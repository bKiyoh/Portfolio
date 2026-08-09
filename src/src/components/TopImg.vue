<script setup lang="ts">
import image from '@/assets/images/IMG_top.jpg';
</script>

<template>
  <v-container>
    <v-row>
      <v-col>
        <v-img class="hero-image" :width="800" aspect-ratio="16/9" cover :src="image" />
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.hero-image {
  border: 1px solid var(--color-line);
  border-radius: 18px;
  box-shadow: 0 18px 42px var(--color-shadow);
  filter: saturate(0.78) sepia(0.06) contrast(0.94);
}
</style>
