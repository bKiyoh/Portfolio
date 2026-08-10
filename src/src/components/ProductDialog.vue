<script setup lang="ts">
import type { Product } from '@/types/global';
import { reactive, watch } from 'vue';
import { mdiGithub, mdiWeb } from '@mdi/js';

const props = defineProps<{
  isOpening: boolean;
  product: Product;
  productImage: string;
}>();

const emit = defineEmits(['close']);
const onClose = (isOpen: boolean) => {
  state.isOpening = isOpen;
  emit('close', isOpen);
};

const state = reactive({
  isOpening: false
});

watch(
  () => props.isOpening,
  () => (state.isOpening = props.isOpening)
);
</script>

<template>
  <div class="text-center">
    <v-dialog
      v-if="props.isOpening"
      v-model="state.isOpening"
      class="product-dialog"
      max-width="500"
      persistent
    >
      <v-card width="100%">
        <v-card-title class="dialog-title">
          {{ product.title }}
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
          <v-btn color="primary" variant="flat" @click="onClose(false)">Close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<style scoped>
.dialog-title,
.dialog-subtitle,
.dialog-copy {
  overflow-wrap: anywhere;
  white-space: normal;
}

.dialog-title {
  line-height: 1.5;
}

.dialog-technologies {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 16px;
}

@media (max-width: 600px) {
  .dialog-title {
    padding: 16px;
    font-size: 1.05rem;
  }

  .dialog-copy {
    padding: 16px;
  }
}
</style>
