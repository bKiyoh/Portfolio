<script setup lang="ts">
import profileData from '@/assets/data/profileData.json';
import icon from '@/assets/images/icons/IMG_icon.png';
import xIcon from '@/assets/images/icons/logo-black.png';
import { mdiGithub } from '@mdi/js';
</script>

<template>
  <v-card class="about-card" elevation="0" color="transparent">
    <div class="profile-header">
      <v-avatar class="profile-avatar" rounded="1" size="180">
        <v-img :src="icon"></v-img>
      </v-avatar>
      <div class="profile-info">
        <v-card-title class="profile-name">{{ profileData.name }}</v-card-title>
        <v-card-subtitle class="profile-location">{{ profileData.location }}</v-card-subtitle>
        <div class="profile-links">
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
    </div>

    <div class="profile-sections">
      <div v-for="(section, index) in profileData.sections" :key="index">
        <v-card-subtitle class="section-title text-subtitle-1">{{ section.title }}</v-card-subtitle>
        <v-card-text class="section-copy text-body-1">
          <p v-for="(line, lineIndex) in section.text" :key="lineIndex" class="pb-1">
            {{ line }}
          </p>
        </v-card-text>
      </div>
    </div>
  </v-card>
</template>

<style scoped>
.about-card {
  width: 100%;
}

.profile-header {
  display: flex;
  align-items: center;
  gap: 24px;
  padding: 24px;
}

.profile-avatar {
  flex: 0 0 auto;
}

.profile-info {
  min-width: 0;
}

.profile-name {
  padding-inline: 0;
  font-size: 1.25rem;
  line-height: 1.5;
  overflow-wrap: anywhere;
  white-space: normal;
}

.profile-location {
  padding-inline: 0;
  white-space: normal;
}

.profile-links {
  display: flex;
  margin-top: 4px;
}

.profile-sections {
  padding: 0 24px 24px;
}

.section-title,
.section-copy {
  padding-inline: 0;
}

.section-copy {
  overflow-wrap: anywhere;
}

.x-icon-background {
  display: grid;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: #fff;
  place-items: center;
}

@media (max-width: 600px) {
  .profile-header {
    gap: 16px;
    padding: 16px;
  }

  .profile-avatar {
    width: clamp(96px, 32vw, 128px) !important;
    height: clamp(96px, 32vw, 128px) !important;
  }

  .profile-name {
    font-size: clamp(1rem, 5vw, 1.2rem);
  }

  .profile-location {
    font-size: 0.75rem;
  }

  .profile-sections {
    padding: 8px 16px 16px;
  }

  .section-copy {
    padding-top: 8px;
    font-size: 0.9rem !important;
    line-height: 1.8;
  }
}

@media (max-width: 340px) {
  .profile-header {
    align-items: flex-start;
  }

  .profile-links .v-btn {
    width: 40px;
    height: 40px;
  }
}
</style>
