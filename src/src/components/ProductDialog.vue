<script setup lang="ts">
import type { Product } from '@/types/global';
import { mdiClose, mdiGithub, mdiWeb } from '@mdi/js';

const props = defineProps<{
  isOpening: boolean;
  product: Product;
  productImage: string;
}>();

const emit = defineEmits<{
  (event: 'close', isOpen: boolean): void;
}>();

const onClose = (isOpen: boolean) => emit('close', isOpen);
</script>

<template>
  <div class="text-center">
    <v-dialog
      v-if="props.isOpening"
      :model-value="props.isOpening"
      class="product-dialog"
      max-width="500"
      @update:model-value="onClose"
    >
      <v-card class="dialog-card" width="100%">
        <v-card-title class="dialog-header">
          <span class="dialog-title">{{ product.title }}</span>
          <v-btn
            class="dialog-close"
            :icon="mdiClose"
            variant="text"
            aria-label="モーダルを閉じる"
            @click="onClose(false)"
          />
        </v-card-title>
        <v-img :src="props.productImage" max-height="400" cover> </v-img>
        <v-card-subtitle class="dialog-subtitle"> From：{{ product.from }} </v-card-subtitle>
        <v-card-text class="dialog-copy">
          {{ product.description }}
          <br />
          <div class="dialog-technologies">
            <v-chip v-for="item in product.technologyUsed" :key="item" size="small">
              {{ item }}
            </v-chip>
          </div>
        </v-card-text>

        <v-card-actions>
          <v-tooltip v-if="product.gitHubSrc" location="bottom" text="GitHubで見る">
            <template v-slot:activator="{ props }">
              <v-btn
                v-bind="props"
                :icon="mdiGithub"
                :href="product.gitHubSrc"
                target="_blank"
                rel="noopener"
              />
            </template>
          </v-tooltip>
          <v-tooltip v-if="product.pageUrl" location="bottom" :text="`${product.pageUrl}を見る`">
            <template v-slot:activator="{ props }">
              <v-btn
                v-bind="props"
                :icon="mdiWeb"
                :href="product.pageUrl"
                target="_blank"
                rel="noopener"
              />
            </template>
          </v-tooltip>
          <v-spacer></v-spacer>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<style scoped>
.dialog-card {
  background-color: var(--color-surface) !important;
}

.dialog-header {
  display: flex;
  align-items: flex-start;
  gap: 8px;
}

.dialog-title,
.dialog-subtitle,
.dialog-copy {
  overflow-wrap: anywhere;
  white-space: normal;
}

.dialog-title {
  flex: 1;
  line-height: 1.5;
}

.dialog-close {
  flex: none;
  margin: -8px -8px -8px 0;
}

.dialog-technologies {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 16px;
}

@media (max-width: 600px) {
  .dialog-header {
    padding: 16px;
  }

  .dialog-title {
    font-size: 1.05rem;
  }

  .dialog-copy {
    padding: 16px;
  }
}
</style>
