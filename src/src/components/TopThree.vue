<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue';
import * as THREE from 'three';

const canvasHost = ref<HTMLDivElement | null>(null);
const hasWebGL = ref(true);

let renderer: THREE.WebGLRenderer | undefined;
let animationFrameId = 0;
let resizeObserver: ResizeObserver | undefined;
let visibilityObserver: IntersectionObserver | undefined;
let cleanUpScene: (() => void) | undefined;

onBeforeUnmount(() => cleanUpScene?.());

onMounted(() => {
  const host = canvasHost.value;
  if (!host) return;

  try {
    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  } catch {
    hasWebGL.value = false;
    return;
  }

  const compactDisplay = window.matchMedia('(max-width: 959px)').matches;
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, compactDisplay ? 1.5 : 2));
  renderer.outputEncoding = THREE.sRGBEncoding;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 0.92;
  renderer.setClearColor(0x000000, 0);
  host.appendChild(renderer.domElement);

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(44, 1, 0.1, 100);
  camera.position.set(0, 0.15, 6.0);

  const symbolGroup = new THREE.Group();
  symbolGroup.scale.setScalar(1.1);
  symbolGroup.rotation.x = -0.08;
  scene.add(symbolGroup);

  const yuShape = new THREE.Shape();
  yuShape.moveTo(-1.05, 1.05);
  yuShape.lineTo(0.73, 1.05);
  yuShape.lineTo(0.56, -0.66);
  yuShape.lineTo(1.45, -0.66);
  yuShape.lineTo(1.45, -1.08);
  yuShape.lineTo(-1.55, -1.08);
  yuShape.lineTo(-1.55, -0.66);
  yuShape.lineTo(0.1, -0.66);
  yuShape.lineTo(0.26, 0.63);
  yuShape.lineTo(-1.05, 0.63);
  yuShape.closePath();

  const yuGeometry = new THREE.ExtrudeGeometry(yuShape, {
    depth: 0.62,
    bevelEnabled: true,
    bevelSegments: 6,
    bevelSize: 0.075,
    bevelThickness: 0.075
  });
  yuGeometry.center();

  const fluidMaterial = new THREE.ShaderMaterial({
    uniforms: {
      uTime: { value: 0 }
    },
    vertexShader: /* glsl */ `
      varying vec3 vPosition;

      void main() {
        vPosition = position;
        vec4 viewPosition = modelViewMatrix * vec4(position, 1.0);
        gl_Position = projectionMatrix * viewPosition;
      }
    `,
    fragmentShader: /* glsl */ `
      uniform float uTime;
      varying vec3 vPosition;

      float random(vec2 point) {
        return fract(sin(dot(point, vec2(127.1, 311.7))) * 43758.5453);
      }

      float noise(vec2 point) {
        vec2 cell = floor(point);
        vec2 local = fract(point);
        local = local * local * (3.0 - 2.0 * local);

        return mix(
          mix(random(cell), random(cell + vec2(1.0, 0.0)), local.x),
          mix(random(cell + vec2(0.0, 1.0)), random(cell + vec2(1.0)), local.x),
          local.y
        );
      }

      float fbm(vec2 point) {
        float value = 0.0;
        float amplitude = 0.5;
        for (int octave = 0; octave < 5; octave++) {
          value += noise(point) * amplitude;
          point = point * 2.03 + vec2(17.4, 9.2);
          amplitude *= 0.5;
        }
        return value;
      }

      void main() {
        float slowTime = uTime * 0.22;
        vec2 point = vPosition.xy + vec2(vPosition.z * 0.34, vPosition.z * 0.16);

        float warpX = fbm(point * 1.18 + vec2(slowTime * 0.72, -slowTime * 0.9));
        float warpY = fbm(point * 1.32 + vec2(-slowTime * 0.66, slowTime * 0.78) + 8.7);
        vec2 warpedPoint = point + (vec2(warpX, warpY) - 0.5) * 0.46;
        vec2 curlWarp = vec2(
          fbm(warpedPoint * 1.86 + vec2(slowTime * 1.21, slowTime * 0.37) + 41.3),
          fbm(warpedPoint * 2.13 + vec2(-slowTime * 0.43, slowTime * 1.47) + 73.8)
        ) - 0.5;
        warpedPoint += curlWarp * 0.28;

        float risingCloud = fbm(
          warpedPoint * vec2(1.28, 1.08) + vec2(-slowTime * 0.82, slowTime * 1.16)
        );
        float crossingCloud = fbm(
          warpedPoint * 2.42 + vec2(slowTime * 1.34, -slowTime * 0.86) + 14.2
        );
        float fineCloud = fbm(
          warpedPoint * 4.1 + vec2(-slowTime * 1.8, slowTime * 1.42) + 31.6
        );
        float broadCloud = fbm(
          warpedPoint * 0.82 + vec2(slowTime * 0.42, -slowTime * 0.56) + 22.4
        );
        float surface = 0.88
          + (risingCloud - 0.5) * 0.18
          + (broadCloud - 0.5) * 0.14
          + curlWarp.x * 0.1;

        float movingDepth = surface - warpedPoint.y
          + (crossingCloud - 0.5) * 0.26
          + (fineCloud - 0.5) * 0.1
          + curlWarp.y * 0.14;
        vec3 skyColor = vec3(0.28, 0.73, 1.0);
        vec3 aquaColor = vec3(0.08, 0.55, 1.0);
        vec3 deepBlue = vec3(0.005, 0.27, 0.96);
        vec3 color = mix(skyColor, aquaColor, smoothstep(-0.05, 0.48, movingDepth));
        color = mix(color, deepBlue, smoothstep(0.42, 1.18, movingDepth));

        float cloudHeight = warpedPoint.y - surface;
        float cloudDistance = abs(
          cloudHeight
            + (broadCloud - 0.5) * 0.24
            + (fineCloud - 0.5) * 0.12
        );
        float cloudCore = 1.0 - smoothstep(0.02, 0.2, cloudDistance);
        float cloudFringe = 1.0 - smoothstep(
          0.06,
          0.34,
          abs(cloudHeight + (crossingCloud - 0.5) * 0.3)
        );
        float upperBillowField = broadCloud * 0.52
          + crossingCloud * 0.34
          + fineCloud * 0.14
          - max(cloudHeight, 0.0) * 0.5;
        float upperBillow = smoothstep(0.46, 0.69, upperBillowField)
          * smoothstep(-0.1, 0.07, cloudHeight)
          * (1.0 - smoothstep(0.24, 0.5, cloudHeight));
        float upperWhite = smoothstep(
          -0.22,
          0.32,
          cloudHeight + (broadCloud - 0.5) * 0.18
        ) * (0.66 + fineCloud * 0.18);
        float topOnly = smoothstep(0.62, 0.82, warpedPoint.y);
        float whiteCloud = clamp(
          cloudCore * (0.42 + crossingCloud * 0.48)
            + cloudFringe * fineCloud * 0.2
            + upperBillow * 0.52
            + upperWhite,
          0.0,
          0.76
        ) * topOnly;
        float cloudShade = smoothstep(0.3, 0.76, fineCloud * 0.62 + broadCloud * 0.38);
        vec3 cloudColor = mix(
          vec3(0.34, 0.54, 0.68),
          vec3(0.68, 0.8, 0.87),
          cloudShade
        );
        color = mix(color, cloudColor, whiteCloud);

        float boundaryBlend = 1.0 - smoothstep(
          0.12,
          0.48,
          abs(cloudHeight + (broadCloud - 0.5) * 0.28)
        );
        float boundaryVariation = smoothstep(
          0.25,
          0.78,
          crossingCloud * 0.58 + fineCloud * 0.42
        );
        vec3 boundaryColor = mix(aquaColor, cloudColor, boundaryVariation);
        color = mix(color, boundaryColor, boundaryBlend * 0.36);

        float aquaPlume = smoothstep(0.47, 0.78, crossingCloud)
          * smoothstep(0.05, 0.62, movingDepth)
          * (1.0 - smoothstep(0.72, 1.22, movingDepth));
        color = mix(color, vec3(0.25, 0.74, 1.0), aquaPlume * 0.26);
        float deepCurrent = smoothstep(0.54, 0.82, risingCloud)
          * smoothstep(0.42, 1.06, movingDepth);
        color = mix(color, deepBlue, deepCurrent * 0.2);

        color += (fineCloud - 0.5) * 0.055;

        gl_FragColor = vec4(color, 1.0);
        #include <tonemapping_fragment>
        #include <encodings_fragment>
      }
    `,
    side: THREE.DoubleSide
  });
  const yu = new THREE.Mesh(yuGeometry, fluidMaterial);
  symbolGroup.add(yu);

  const resize = () => {
    if (!renderer) return;
    const { width, height } = host.getBoundingClientRect();
    renderer.setSize(width, height, false);
    camera.aspect = width / Math.max(height, 1);
    camera.position.z = 6 * Math.max(1, 0.8 / camera.aspect);
    camera.updateProjectionMatrix();
  };

  resizeObserver = new ResizeObserver(resize);
  resizeObserver.observe(host);
  resize();

  const clock = new THREE.Clock();
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const frameInterval = compactDisplay ? 1000 / 30 : 0;
  let lastFrameTime = 0;

  const render = (frameTime = 0) => {
    if (!renderer) return;

    if (frameInterval && frameTime - lastFrameTime < frameInterval) {
      animationFrameId = window.requestAnimationFrame(render);
      return;
    }

    lastFrameTime = frameTime;
    const elapsed = reduceMotion ? 0 : clock.getElapsedTime();
    fluidMaterial.uniforms.uTime.value = elapsed;
    camera.lookAt(0, 0, 0);

    renderer.render(scene, camera);
    if (!reduceMotion) animationFrameId = window.requestAnimationFrame(render);
  };

  const stopRendering = () => {
    window.cancelAnimationFrame(animationFrameId);
    animationFrameId = 0;
  };

  visibilityObserver = new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting) {
      if (!animationFrameId) render();
    } else {
      stopRendering();
    }
  });
  visibilityObserver.observe(host);

  cleanUpScene = () => {
    stopRendering();
    resizeObserver?.disconnect();
    visibilityObserver?.disconnect();
    yuGeometry.dispose();
    fluidMaterial.dispose();
    renderer?.dispose();
    renderer?.domElement.remove();
    renderer = undefined;
  };
});
</script>

<template>
  <div class="three-hero" aria-label="青い流体でできたユの3Dシンボル">
    <div ref="canvasHost" class="canvas-host" aria-hidden="true">
      <div v-if="!hasWebGL" class="webgl-error">ユ</div>
    </div>
  </div>
</template>

<style scoped>
.three-hero {
  position: relative;
  width: 360px;
  height: 450px;
  overflow: hidden;
  isolation: isolate;
  background: radial-gradient(circle at 50% 50%, rgba(228, 233, 239, 0.055), transparent 38%);
}

.canvas-host {
  position: absolute;
  z-index: 0;
  inset: 0;
}

.canvas-host :deep(canvas) {
  display: block;
  width: 100%;
  height: 100%;
}

.webgl-error {
  display: grid;
  height: 100%;
  place-items: center;
  color: #eef1f4;
  font-size: clamp(6rem, 30vw, 10rem);
  font-weight: 900;
  opacity: 0.78;
}
</style>
