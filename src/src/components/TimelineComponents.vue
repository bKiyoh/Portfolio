<script setup lang="ts">
import type { Career, Product } from '@/types/global';
import { useCalculateDuration } from '@/stores/calculateDuration';
import ProductDialog from '@/components/ProductDialog.vue';
import { useProductImages } from '@/stores/productImages';
import { ref, computed } from 'vue';
import { mdiDomain, mdiSchool, mdiFaceMan, mdiTableFurniture, mdiLaptop } from '@mdi/js';
import dayjs from 'dayjs';

const productImages = useProductImages().imgUrlsMap;

const props = defineProps<{
  careerList: Array<Career>;
  genre: string;
}>();

const isDialogOpen = ref(false);
const selectedProduct = ref<Product>({
  productId: '0',
  title: '',
  description: '',
  pageUrl: '',
  gitHubSrc: '',
  technologyUsed: [],
  from: '',
  imgSrc: null
});

const careerList = computed(() => {
  const formatList = props.careerList.map((x) => ({
    ...x,
    endDate: x.endDate === '現在' ? dayjs().format('YYYY/MM') : x.endDate,
    achievements: x.achievements
      ? x.achievements.sort((a, b) => {
          const dateA = dayjs(a.from, 'YYYY/MM');
          const dateB = dayjs(b.from, 'YYYY/MM');
          return dateB.valueOf() - dateA.valueOf();
        })
      : []
  }));
  return formatList.sort(
    (a, b) => dayjs(b.startDate, 'YYYY/MM').valueOf() - dayjs(a.startDate, 'YYYY/MM').valueOf()
  );
});

const prefixTitle = (genre: string) => {
  if (genre === 'work') return 'Work on';
  if (genre === 'soloDev') return 'Released';
  return '';
};

const closeDialog = (isOpen: boolean) => {
  isDialogOpen.value = isOpen;
};

// 型整理
const onShowProductDetails = (item: any) => {
  selectedProduct.value = {
    productId: item.productId,
    title: item.title,
    description: item.description,
    pageUrl: item.pageUrl,
    gitHubSrc: item.gitHubSrc,
    technologyUsed: item.technologyUsed,
    from: item.from,
    imgSrc: item.imgSrc
  };
  isDialogOpen.value = true;
};

const getIconName = (jobIcon: string) => {
  const iconMapping: Record<string, string> = {
    domain: mdiDomain,
    school: mdiSchool,
    faceMan: mdiFaceMan,
    tableFurniture: mdiTableFurniture,
    laptop: mdiLaptop
  };

  return iconMapping[jobIcon] || '';
};
</script>

<template>
  <v-timeline side="end" align="start" v-if="$vuetify.display?.mdAndUp">
    <v-timeline-item
      size="x-small"
      dot-color="primary"
      v-for="career in careerList"
      :key="career.careerId"
    >
      <template v-slot:opposite v-if="career.startDate || career.endDate">
        <div style="text-align: left">
          <p v-tooltip:bottom="career.company" style="cursor: pointer">
            <v-icon :icon="mdiDomain"></v-icon>&nbsp;
            <v-icon :icon="getIconName(career.jobIcon)"></v-icon>
          </p>
          <p v-if="career.careerId !== 0">
            {{ useCalculateDuration().dateRange(career.startDate, career.endDate) }}
          </p>
        </div>
      </template>

      <template
        v-for="achieve in props.genre === 'all'
          ? career.achievements
          : career.achievements.filter((x) => x.genre === props.genre)"
        :key="achieve.description"
      >
        <v-card class="my-4">
          <v-card-item>
            <v-card-subtitle v-if="achieve.from" class="pb-0">
              <span v-if="career.careerId !== 0" class="me-2">
                {{ achieve.from }}
                <template v-if="achieve.to">- {{ achieve.to }}</template>
              </span>
              {{ prefixTitle(achieve.genre) }}
              <template v-if="achieve.genre === 'soloDev'">
                <a
                  class="product-link ps-1 text-decoration-underline font-weight-bold"
                  style="cursor: pointer"
                  @click="onShowProductDetails(achieve)"
                >
                  {{ achieve.title }}
                </a>
              </template>
              <template v-else>
                <span class="ps-1 font-weight-bold">{{ achieve.title }}</span>
              </template>
            </v-card-subtitle>

            <v-card-text
              v-if="achieve.responsibility"
              class="achievement-copy mt-2 pa-1 font-weight-thin"
            >
              <p v-if="achieve.description">{{ achieve.description }}</p>
              <p class="mb-1" v-if="achieve.responsibility">担当:{{ achieve.responsibility }}</p>
              <div class="mb-1" v-if="achieve.technologyUsed">
                使用技術：{{ achieve.technologyUsed.join(', ') }}
              </div>
              <p class="mb-1" v-if="achieve.scopeOfWork">作業範囲：{{ achieve.scopeOfWork }}</p>
            </v-card-text>
          </v-card-item>
        </v-card>
      </template>
    </v-timeline-item>
  </v-timeline>

  <v-container v-if="$vuetify.display?.smAndDown">
    <v-row v-for="career in careerList" :key="career.careerId">
      <v-col>
        <v-card>
          <v-card-item>
            <v-card-title hide-details>{{ career.company }}</v-card-title>
            <v-card-subtitle v-if="career.startDate || career.endDate" class="me-1">
              <p>
                {{ career.startDate }} - {{ career.endDate }} ({{
                  useCalculateDuration().dateRange(career.startDate, career.endDate)
                }})
              </p>
            </v-card-subtitle>
            <v-card-subtitle>
              <span class="me-1">{{ career.department }}{{ career.position }}</span>
            </v-card-subtitle>
          </v-card-item>
          <v-card-text>
            {{ career.responsibilities }}
          </v-card-text>

          <v-divider class="mx-4 mb-1" v-if="career.achievements.length > 0" />

          <v-card-item
            v-for="achievement in career.achievements.filter((x) => x.genre === 'work')"
            :key="achievement.achievementId"
          >
            <v-card-title>{{ achievement.title }}</v-card-title>
            <v-card-text>
              <v-card-subtitle v-if="achievement.from"
                >{{ achievement.from }} - {{ achievement.to }}</v-card-subtitle
              >
              <p v-if="achievement.responsibility">担当 ：{{ achievement.responsibility }}</p>
              <p v-if="achievement.technologyUsed">
                使用技術：{{ achievement.technologyUsed.join(', ') }}
              </p>
              <p v-if="achievement.scopeOfWork">作業範囲：{{ achievement.scopeOfWork }}</p>
            </v-card-text>
          </v-card-item>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
  <ProductDialog
    :is-opening="isDialogOpen"
    :product="selectedProduct"
    :product-image="productImages.get(`product${selectedProduct.productId}`) ?? ''"
    @close="closeDialog"
  />
</template>

<style scoped>
.product-link {
  color: var(--color-accent-blue);
}

.achievement-copy {
  color: rgba(23, 63, 57, 0.72);
}
</style>
