<script setup lang="ts">
import { defineAsyncComponent } from 'vue';
import TopVideo from '@/components/TopVideo.vue';

const TopThree = defineAsyncComponent(() => import('@/components/TopThree.vue'));
</script>

<template>
  <v-container class="top-media">
    <v-row v-if="$vuetify.display?.mdAndUp" class="hero-strip" align="center" no-gutters>
      <v-col cols="auto" class="three-column">
        <TopThree />
      </v-col>
      <v-col v-for="index in 3" :key="index" cols="auto" class="video-column">
        <TopVideo />
      </v-col>
    </v-row>

    <div v-else class="mobile-hero">
      <TopThree class="mobile-three" />
    </div>
  </v-container>
</template>

<style scoped>
.top-media {
  max-width: none;
  padding: 0;
}

.hero-strip {
  flex-wrap: nowrap;
  gap: 10px;
  justify-content: safe center;
  overflow-x: auto;
  padding-inline: 16px;
  scrollbar-width: thin;
  scrollbar-color: var(--color-line) transparent;
}

.three-column {
  padding: 0;
}

.mobile-hero {
  display: grid;
  width: 100%;
  min-height: calc(100svh - 64px);
  place-items: center;
  background: radial-gradient(circle at 50% 48%, rgba(145, 183, 222, 0.1), transparent 42%),
    radial-gradient(circle at 50% 50%, rgba(224, 182, 111, 0.045), transparent 62%);
}

.mobile-three {
  width: min(calc(100% - 32px), 520px);
  height: min(64svh, 600px);
  min-height: 420px;
}

@media (max-height: 680px) {
  .mobile-three {
    height: calc(100svh - 96px);
    min-height: 340px;
  }
}
</style>
