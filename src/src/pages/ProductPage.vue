<script setup lang="ts">
import type { Career, CareerAchievement, Product } from '@/types/global';
import { onBeforeMount, reactive } from 'vue';
import ProductDialog from '@/components/ProductDialog.vue';
import careerList from '@/assets/data/careerList.json';
import { useProductImages } from '@/stores/productImages';

const productImages = useProductImages().imgUrlsMap;

const state = reactive({
  isDialogOpen: false,
  productList: new Array<Product>(),
  selectedProduct: {} as Product,
  selectedProductImage: ''
});

const onShowProductDetails = (item: Product) => {
  state.selectedProduct = item;
  state.selectedProductImage = productImages.get(`product${item.productId}`) ?? '';
  state.isDialogOpen = true;
};

const closeDialog = (isOpen: boolean) => {
  state.isDialogOpen = isOpen;
};

const toProduct = (achievement: CareerAchievement): Product => ({
  productId: achievement.productId ?? '',
  title: achievement.title ?? '',
  description: achievement.description ?? '',
  pageUrl: achievement.pageUrl ?? '',
  gitHubSrc: achievement.gitHubSrc ?? '',
  technologyUsed: achievement.technologyUsed ?? [],
  from: achievement.from ?? '',
  imgSrc: null
});

const fetchProductList = async () => {
  state.productList = (careerList as Career[])
    .flatMap((career) => career.achievements)
    .filter((achievement) => achievement.genre === 'soloDev' && achievement.productId)
    .map(toProduct)
    .sort((a, b) => Number(a.productId) - Number(b.productId));
};

onBeforeMount(() => fetchProductList());
</script>

<template>
  <v-container>
    <v-row>
      <v-col v-for="item of state.productList" :key="item.productId" cols="12" sm="1" md="6">
        <v-container>
          <v-row>
            <v-col class="ma-6">
              <v-card elevation="0" @click="onShowProductDetails(item)">
                <v-img
                  :src="productImages.get(`product${item.productId}`)"
                  height="230"
                  aspect-ratio="16/9"
                  cover
                >
                </v-img>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-col>
    </v-row>
  </v-container>
  <ProductDialog
    :is-opening="state.isDialogOpen"
    :product="state.selectedProduct"
    :product-image="state.selectedProductImage"
    @close="closeDialog"
  />
</template>

<style scoped></style>
