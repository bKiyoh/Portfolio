<script setup lang="ts"></script>
<template>
  <v-container class="contact-container">
    <v-row justify="center">
      <v-col cols="12" class="text-center">
        <h3 class="contact-title">次のXアカウントのDMにてご連絡ください</h3>
        <a class="contact-link" href="https://x.com/bKiyoh" target="_blank" rel="noopener">
          https://x.com/bKiyoh
        </a>
      </v-col>
    </v-row>
  </v-container>
</template>
<style scoped>
.contact-title {
  font-size: clamp(1rem, 4vw, 1.17rem);
  line-height: 1.7;
}

.contact-link {
  display: inline-block;
  max-width: 100%;
  margin-top: 12px;
  overflow-wrap: anywhere;
}
</style>
