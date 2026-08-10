<script setup lang="ts">
import profileData from '@/assets/data/profileData.json';
import icon from '@/assets/images/icons/IMG_icon.png';
import xIcon from '@/assets/images/icons/logo-black.png';
import { mdiGithub } from '@mdi/js';
</script>

<template>
  <v-card elevation="0" color="transparent">
    <div class="d-flex align-center">
      <v-avatar class="ma-6" rounded="1" size="180">
        <v-img :src="icon"></v-img>
      </v-avatar>
      <div class="ma-3">
        <v-card-title class="text-h5">{{ profileData.name }} </v-card-title>
        <v-card-subtitle>{{ profileData.location }}</v-card-subtitle>
        <v-btn
          :href="profileData.links.x"
          target="_blank"
          rel="noopener"
          aria-label="Xのプロフィールを見る"
          icon
          variant="plain"
        >
          <span class="x-icon-background">
            <v-img :src="xIcon" width="14"></v-img>
          </span>
        </v-btn>
        <v-btn
          :icon="mdiGithub"
          :href="profileData.links.github"
          target="_blank"
          rel="noopener"
          aria-label="GitHubのプロフィールを見る"
          variant="plain"
        ></v-btn>
      </div>
    </div>

    <div class="d-flex flex-no-wrap ma-6">
      <div>
        <div v-for="(section, index) in profileData.sections" :key="index">
          <v-card-subtitle class="text-subtitle-1">{{ section.title }}</v-card-subtitle>
          <v-card-text class="text-body-1">
            <p v-for="(line, lineIndex) in section.text" :key="lineIndex" class="pb-1">
              {{ line }}
            </p>
          </v-card-text>
        </div>
      </div>
    </div>
  </v-card>
</template>

<style scoped>
.x-icon-background {
  display: grid;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: #fff;
  place-items: center;
}
</style>
