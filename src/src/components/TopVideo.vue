<script setup lang="ts"></script>

<template>
  <v-container>
    <v-row>
      <v-col class="ma-4">
        <video
          class="hero-video"
          src="../assets/video/IMG_8193.mp4"
          autoplay
          loop
          muted
          style="width: auto; height: 450px"
        ></video>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.hero-video {
  display: block;
  border: 1px solid rgba(47, 116, 102, 0.28);
  box-shadow: 0 18px 42px rgba(23, 63, 57, 0.14);
  filter: saturate(0.76) sepia(0.08) contrast(0.94);
}
</style>
