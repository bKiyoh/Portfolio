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
    <v-dialog v-if="props.isOpening" v-model="state.isOpening" width="auto" persistent>
      <v-card max-width="500">
        <v-card-title>
          {{ product.title }}
        </v-card-title>
        <v-img :src="props.productImage" max-height="400" cover> </v-img>
        <v-card-subtitle> From：{{ product.from }} </v-card-subtitle>
        <v-card-text>
          {{ product.description }}
          <br />
          <v-chip-group>
            <v-chip v-for="item in product.technologyUsed" :key="item" x-small>{{ item }}</v-chip>
          </v-chip-group>
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

<style scoped></style>
