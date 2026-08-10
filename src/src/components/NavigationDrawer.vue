<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue';
import {
  mdiAccount,
  mdiClose,
  mdiEmailOutline,
  mdiHammerWrench,
  mdiHome,
  mdiMenu,
  mdiTimelineOutline
} from '@mdi/js';
import { useRouter } from 'vue-router';

type Navigation = { label: string; id: string; icon: string };

const props = defineProps({
  contentWidth: {
    type: String,
    required: false
  }
});

const navigation: Array<Navigation> = [
  {
    label: 'Top',
    id: 'home',
    icon: mdiHome
  },
  {
    label: 'About',
    id: 'about',
    icon: mdiAccount
  },
  {
    label: 'Timeline',
    id: 'timeline',
    icon: mdiTimelineOutline
  },
  {
    label: 'Product',
    id: 'product',
    icon: mdiHammerWrench
  },
  {
    label: 'Contact',
    id: 'contact',
    icon: mdiEmailOutline
  }
];

const router = useRouter();
const activeSection = ref(window.location.hash.replace('#', '') || 'home');
const isMenuOpen = ref(activeSection.value !== 'home');
let ticking = false;
let pendingNavigationTarget: string | null = null;
let navigationFallbackTimer: number | undefined;

const updateActiveSection = () => {
  const headerOffset = 96;
  let currentSection = navigation[0].id;

  navigation.forEach(({ id }) => {
    const section = document.getElementById(id);
    if (section && section.getBoundingClientRect().top <= headerOffset) {
      currentSection = id;
    }
  });

  if (pendingNavigationTarget) {
    if (currentSection === pendingNavigationTarget) {
      activeSection.value = currentSection;
      isMenuOpen.value = true;
      pendingNavigationTarget = null;
      window.clearTimeout(navigationFallbackTimer);
    }

    ticking = false;
    return;
  }

  if (activeSection.value !== currentSection) {
    activeSection.value = currentSection;
    isMenuOpen.value = currentSection !== 'home';
  }
  ticking = false;
};

const onScroll = () => {
  if (!ticking) {
    window.requestAnimationFrame(updateActiveSection);
    ticking = true;
  }
};

const moveToSection = async (id: string) => {
  pendingNavigationTarget = id;
  activeSection.value = id;
  isMenuOpen.value = true;
  const hash = `#${id}`;

  window.clearTimeout(navigationFallbackTimer);
  navigationFallbackTimer = window.setTimeout(() => {
    pendingNavigationTarget = null;
    updateActiveSection();
  }, 1500);

  if (window.location.hash === hash) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    return;
  }

  await router.push({ name: 'home', hash });
};

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true });
  updateActiveSection();
});

onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll);
  window.clearTimeout(navigationFallbackTimer);
});
</script>

<template>
  <v-app-bar app :elevation="0" color="header" class="site-header">
    <v-container
      class="header-container"
      :style="{
        maxWidth: props.contentWidth
      }"
    >
      <v-btn
        class="menu-toggle"
        :icon="isMenuOpen ? mdiClose : mdiMenu"
        variant="text"
        :aria-label="isMenuOpen ? 'メニューを閉じる' : 'メニューを開く'"
        :aria-expanded="isMenuOpen"
        aria-controls="site-navigation"
        @click="isMenuOpen = !isMenuOpen"
      />

      <nav
        id="site-navigation"
        class="table-of-contents"
        :class="{ 'table-of-contents--open': isMenuOpen }"
        :aria-hidden="!isMenuOpen"
        :inert="!isMenuOpen"
        aria-label="ページ内目次"
      >
        <button
          v-for="item in navigation"
          :key="item.id"
          type="button"
          class="nav-item"
          :class="{ 'nav-item--active': activeSection === item.id }"
          :aria-current="activeSection === item.id ? 'location' : undefined"
          @click="moveToSection(item.id)"
        >
          <v-icon :icon="item.icon" size="16" />
          <span>{{ item.label }}</span>
        </button>
      </nav>
    </v-container>
  </v-app-bar>
</template>

<style scoped>
.header-container {
  display: flex;
  align-items: center;
  gap: 8px;
  height: 100%;
  padding-block: 0;
}

.site-header {
  border-bottom: 1px solid var(--color-line);
  box-shadow: none !important;
}

.menu-toggle {
  flex: 0 0 auto;
  color: var(--color-ink);
}

.table-of-contents {
  display: flex;
  flex: 1 1 auto;
  align-items: stretch;
  gap: 4px;
  min-width: 0;
  height: 100%;
  overflow-x: auto;
  opacity: 0;
  pointer-events: none;
  transform: translateX(-10px);
  transition: opacity 180ms ease, transform 180ms ease;
  scrollbar-width: none;
}

.table-of-contents--open {
  opacity: 1;
  pointer-events: auto;
  transform: translateX(0);
}

.table-of-contents::-webkit-scrollbar {
  display: none;
}

.nav-item {
  position: relative;
  display: inline-flex;
  flex: 0 0 auto;
  align-items: center;
  gap: 6px;
  padding: 0 12px;
  border: 0;
  background: transparent;
  color: var(--color-ink-muted);
  font-family: inherit;
  font-size: 0.8rem;
  cursor: pointer;
  transition: color 180ms ease;
}

.nav-item::after {
  position: absolute;
  right: 12px;
  bottom: 0;
  left: 12px;
  height: 2px;
  background: currentColor;
  content: '';
  opacity: 0;
  transform: scaleX(0.4);
  transition: opacity 180ms ease, transform 180ms ease;
}

.nav-item:hover,
.nav-item--active {
  color: var(--color-ink);
}

.nav-item--active::after {
  color: var(--color-main);
  opacity: 1;
  transform: scaleX(1);
}

@media (max-width: 768px) {
  .header-container {
    gap: 10px;
    padding-inline: 16px;
  }

  .nav-item {
    padding-inline: 9px;
  }

  .nav-item .v-icon {
    display: none;
  }
}
</style>
