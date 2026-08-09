<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue';
import { mdiHome, mdiAccount, mdiHammerWrench, mdiTimelineOutline } from '@mdi/js';
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
    label: 'Home',
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
  }
];

const router = useRouter();
const activeSection = ref(window.location.hash.replace('#', '') || 'home');
let ticking = false;

const updateActiveSection = () => {
  const headerOffset = 96;
  let currentSection = navigation[0].id;

  navigation.forEach(({ id }) => {
    const section = document.getElementById(id);
    if (section && section.getBoundingClientRect().top <= headerOffset) {
      currentSection = id;
    }
  });

  activeSection.value = currentSection;
  ticking = false;
};

const onScroll = () => {
  if (!ticking) {
    window.requestAnimationFrame(updateActiveSection);
    ticking = true;
  }
};

const moveToSection = async (id: string) => {
  activeSection.value = id;
  const hash = `#${id}`;

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
});
</script>

<template>
  <v-app-bar app :elevation="0" color="#dfe7e4" class="site-header">
    <v-container
      class="header-container"
      :style="{
        maxWidth: props.contentWidth
      }"
    >
      <nav class="table-of-contents" aria-label="ページ内目次">
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
  gap: 24px;
  height: 100%;
  padding-block: 0;
}

.site-header {
  border-bottom: 1px solid var(--color-line);
  box-shadow: none !important;
}

.brand {
  flex: 0 0 auto;
  padding: 0;
  border: 0;
  background: transparent;
  color: inherit;
  font-family: inherit;
  font-size: 1.25rem;
  cursor: pointer;
}

.table-of-contents {
  display: flex;
  align-items: stretch;
  gap: 4px;
  min-width: 0;
  height: 100%;
  overflow-x: auto;
  scrollbar-width: none;
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
  color: rgba(23, 63, 57, 0.62);
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
  opacity: 1;
  transform: scaleX(1);
}

@media (max-width: 768px) {
  .header-container {
    gap: 10px;
    padding-inline: 16px;
  }

  .brand {
    font-size: 1rem;
  }

  .nav-item {
    padding-inline: 9px;
  }

  .nav-item .v-icon {
    display: none;
  }
}
</style>
