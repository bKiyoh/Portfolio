<script setup lang="ts">
import videoSource from '@/assets/video/IMG_8193.mp4';
import posterSource from '@/assets/video/IMG_8193-poster.jpg';
</script>

<template>
  <v-container>
    <v-row>
      <v-col class="ma-1">
        <video
          class="hero-video"
          :src="videoSource"
          :poster="posterSource"
          preload="metadata"
          autoplay
          loop
          muted
          playsinline
          aria-hidden="true"
        ></video>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.hero-video {
  display: block;
  width: auto;
  height: 340px;
  aspect-ratio: 128 / 720;
  box-shadow: 0 12px 30px var(--color-shadow);
  filter: saturate(0.76) sepia(0.08) contrast(0.94);
}
</style>
