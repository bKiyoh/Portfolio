<script setup lang="ts">
import type { Career, CareerAchievement, Product } from '@/types/global';
import { useCalculateDuration } from '@/stores/calculateDuration';
import ProductDialog from '@/components/ProductDialog.vue';
import { useProductImages } from '@/stores/productImages';
import { computed, ref } from 'vue';
import {
  mdiBriefcaseOutline,
  mdiCodeBraces,
  mdiDomain,
  mdiFaceMan,
  mdiLaptop,
  mdiSchool,
  mdiTableFurniture
} from '@mdi/js';
import dayjs from 'dayjs';

type TimelineAchievement = Product & {
  achievementId: number;
  genre: string;
  to: string | null;
  responsibility: string | null;
  teamSize: string | number | null;
  scopeOfWork: string | null;
};

const productImages = useProductImages().imgUrlsMap;
const durationStore = useCalculateDuration();

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

const toTimelineAchievement = (achievement: CareerAchievement): TimelineAchievement => {
  return {
    achievementId: achievement.achievementId,
    genre: achievement.genre,
    productId: achievement.productId ?? '',
    title: achievement.title ?? '',
    description: achievement.description ?? '',
    from: achievement.from ?? '',
    to: achievement.to ?? null,
    responsibility: achievement.responsibility ?? null,
    teamSize: achievement.teamSize ?? null,
    technologyUsed: achievement.technologyUsed ?? [],
    scopeOfWork: achievement.scopeOfWork ?? null,
    pageUrl: achievement.pageUrl ?? '',
    gitHubSrc: achievement.gitHubSrc ?? '',
    imgSrc: null
  };
};

const careerList = computed(() =>
  props.careerList
    .map((career) => ({
      ...career,
      achievements: [...career.achievements]
        .filter((achievement) => props.genre === 'all' || achievement.genre === props.genre)
        .map(toTimelineAchievement)
        .sort(
          (a, b) =>
            dayjs(b.from || '1900/01', 'YYYY/MM').valueOf() -
            dayjs(a.from || '1900/01', 'YYYY/MM').valueOf()
        )
    }))
    .filter((career) => career.achievements.length > 0)
    .sort(
      (a, b) => dayjs(b.startDate, 'YYYY/MM').valueOf() - dayjs(a.startDate, 'YYYY/MM').valueOf()
    )
);

const genreLabel = (genre: string) => {
  if (genre === 'work') return '実務経験';
  if (genre === 'soloDev') return '個人開発';
  return '学歴';
};

const genreIcon = (genre: string) => {
  if (genre === 'work') return mdiBriefcaseOutline;
  if (genre === 'soloDev') return mdiCodeBraces;
  return mdiSchool;
};

const careerRole = (career: Career) =>
  [career.department, career.position].filter(Boolean).join(' / ');

const achievementPeriod = (achievement: TimelineAchievement) =>
  [achievement.from, achievement.to].filter(Boolean).join(' – ');

const teamSizeLabel = (teamSize: TimelineAchievement['teamSize']) => {
  const value = String(teamSize);
  return /^\d+名/.test(value) ? value : value.replace(/^(\d+)/, '$1名');
};

const closeDialog = (isOpen: boolean) => {
  isDialogOpen.value = isOpen;
};

const onShowProductDetails = (item: TimelineAchievement) => {
  selectedProduct.value = item;
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

  return iconMapping[jobIcon] || mdiDomain;
};
</script>

<template>
  <v-timeline v-if="$vuetify.display?.mdAndUp" side="end" align="start">
    <v-timeline-item
      v-for="career in careerList"
      :key="career.careerId"
      size="x-small"
      dot-color="primary"
    >
      <template #opposite>
        <div class="employer-meta">
          <p class="employer-name">
            <v-icon :icon="getIconName(career.jobIcon)" size="18" /> {{ career.company }}
          </p>
          <p>{{ career.startDate }} – {{ career.endDate }}</p>
          <p v-if="career.careerId !== 0" class="duration">
            {{ durationStore.dateRange(career.startDate, career.endDate) }}
          </p>
        </div>
      </template>

      <div v-if="careerRole(career) || career.responsibilities" class="career-context">
        <p v-if="careerRole(career)" class="career-role">{{ careerRole(career) }}</p>
        <p v-if="career.responsibilities" class="career-story">{{ career.responsibilities }}</p>
      </div>

      <v-card
        v-for="achievement in career.achievements"
        :key="achievement.achievementId"
        class="achievement-card my-4"
      >
        <v-card-item>
          <div class="achievement-meta">
            <span class="genre-icon" :aria-label="genreLabel(achievement.genre)">
              <v-icon :icon="genreIcon(achievement.genre)" size="18" />
            </span>
            <span v-if="achievement.from">{{ achievementPeriod(achievement) }}</span>
          </div>

          <v-card-title class="achievement-title">
            <button
              v-if="achievement.genre === 'soloDev'"
              type="button"
              class="product-link"
              @click="onShowProductDetails(achievement)"
            >
              {{ achievement.title }}
            </button>
            <span v-else>{{ achievement.title }}</span>
          </v-card-title>

          <v-card-text class="achievement-copy px-0 pb-0">
            <p v-if="achievement.description" class="achievement-description">
              {{ achievement.description }}
            </p>
            <div class="detail-list">
              <p v-if="achievement.responsibility">
                <span>役割</span>{{ achievement.responsibility }}
              </p>
              <p v-if="achievement.teamSize">
                <span>チーム</span>{{ teamSizeLabel(achievement.teamSize) }}
              </p>
              <p v-if="achievement.scopeOfWork">
                <span>担当範囲</span>{{ achievement.scopeOfWork }}
              </p>
            </div>
            <div v-if="achievement.technologyUsed.length" class="technology-list">
              <v-chip
                v-for="technology in achievement.technologyUsed"
                :key="technology"
                size="small"
                variant="outlined"
              >
                {{ technology }}
              </v-chip>
            </div>
          </v-card-text>
        </v-card-item>
      </v-card>
    </v-timeline-item>
  </v-timeline>

  <v-container v-else class="mobile-timeline px-0">
    <v-card v-for="career in careerList" :key="career.careerId" class="career-card mb-6">
      <v-card-item>
        <div class="mobile-career-period">
          {{ career.startDate }} – {{ career.endDate }}
          <span v-if="career.careerId !== 0">
            （{{ durationStore.dateRange(career.startDate, career.endDate) }}）
          </span>
        </div>
        <v-card-title class="mobile-company-title">{{ career.company }}</v-card-title>
        <v-card-subtitle v-if="careerRole(career)">{{ careerRole(career) }}</v-card-subtitle>
        <p v-if="career.responsibilities" class="mobile-career-story">
          {{ career.responsibilities }}
        </p>
      </v-card-item>

      <v-divider class="mx-4" />

      <v-card-item
        v-for="achievement in career.achievements"
        :key="achievement.achievementId"
        class="mobile-achievement"
      >
        <div class="achievement-meta">
          <span class="genre-icon" :aria-label="genreLabel(achievement.genre)">
            <v-icon :icon="genreIcon(achievement.genre)" size="18" />
          </span>
          <span v-if="achievement.from">{{ achievementPeriod(achievement) }}</span>
        </div>
        <v-card-title class="achievement-title">
          <button
            v-if="achievement.genre === 'soloDev'"
            type="button"
            class="product-link"
            @click="onShowProductDetails(achievement)"
          >
            {{ achievement.title }}
          </button>
          <span v-else>{{ achievement.title }}</span>
        </v-card-title>
        <v-card-text class="achievement-copy px-0 pb-1">
          <p v-if="achievement.description" class="achievement-description">
            {{ achievement.description }}
          </p>
          <div class="detail-list">
            <p v-if="achievement.responsibility">
              <span>役割</span>{{ achievement.responsibility }}
            </p>
            <p v-if="achievement.teamSize">
              <span>チーム</span>{{ teamSizeLabel(achievement.teamSize) }}
            </p>
            <p v-if="achievement.scopeOfWork"><span>担当範囲</span>{{ achievement.scopeOfWork }}</p>
          </div>
          <div v-if="achievement.technologyUsed.length" class="technology-list">
            <v-chip
              v-for="technology in achievement.technologyUsed"
              :key="technology"
              size="small"
              variant="outlined"
            >
              {{ technology }}
            </v-chip>
          </div>
        </v-card-text>
      </v-card-item>
    </v-card>
  </v-container>

  <ProductDialog
    :is-opening="isDialogOpen"
    :product="selectedProduct"
    :product-image="productImages.get(`product${selectedProduct.productId}`) ?? ''"
    @close="closeDialog"
  />
</template>

<style scoped>
.employer-meta {
  max-width: 180px;
  color: var(--color-ink-muted);
  font-size: 0.78rem;
  line-height: 1.6;
  text-align: left;
}

.employer-icons {
  display: flex;
  gap: 6px;
  margin-bottom: 4px;
  color: var(--color-main);
}

.employer-name,
.career-role {
  color: var(--color-ink);
  font-weight: 900;
}

.duration {
  color: var(--color-main);
}

.career-context {
  padding: 4px 4px 2px;
}

.career-role {
  margin-bottom: 6px;
  font-size: 0.9rem;
}

.career-story,
.mobile-career-story {
  color: var(--color-ink-muted);
  font-size: 0.84rem;
  line-height: 1.8;
}

.achievement-card {
  overflow: hidden;
}

.achievement-meta {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 8px 16px;
  color: var(--color-main);
  font-size: 0.72rem;
  letter-spacing: 0.04em;
}

.genre-icon {
  display: inline-flex;
  align-items: center;
  color: var(--color-main);
}

.achievement-title {
  padding: 6px 0 0;
  font-size: 1rem;
  line-height: 1.5;
  white-space: normal;
}

.product-link {
  padding: 0;
  border: 0;
  background: transparent;
  color: var(--color-main);
  font: inherit;
  font-weight: 900;
  text-align: left;
  text-decoration: underline;
  text-underline-offset: 3px;
  cursor: pointer;
}

.achievement-copy {
  color: var(--color-ink-muted);
  font-size: 0.82rem;
  line-height: 1.75;
}

.achievement-description {
  margin-bottom: 10px;
  color: var(--color-ink);
}

.detail-list {
  display: grid;
  gap: 4px;
}

.detail-list span {
  display: inline-block;
  width: 5.5em;
  color: var(--color-ink);
  font-weight: 900;
}

.technology-list {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 12px;
}

.mobile-career-period {
  margin-bottom: 4px;
  color: var(--color-main);
  font-size: 0.75rem;
}

.mobile-company-title {
  padding: 0;
  font-size: 1.1rem;
  white-space: normal;
}

.mobile-career-story {
  margin-top: 14px;
}

.mobile-achievement + .mobile-achievement {
  border-top: 1px solid var(--color-line);
}
</style>
