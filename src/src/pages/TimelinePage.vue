<script setup lang="ts">
import type { Career } from '@/types/global';
import { ref, onBeforeMount, reactive } from 'vue';
import Timeline from '@/components/TimelineComponents.vue';
import careerList from '@/assets/data/careerList.json';
import { useCalculateDuration } from '@/stores/calculateDuration';
import { mdiBriefcaseOutline, mdiCodeBraces, mdiViewGridOutline } from '@mdi/js';

const durationStore = useCalculateDuration();

const occupationList = {
  occupation1: `法人営業（${durationStore.dateRange('2016/04', '2016/07')}）`,
  occupation2: `販売職（${durationStore.dateRange('2016/09', '2017/11')}）`,
  occupation3: `ITエンジニア（${durationStore.dateRange('2017/12', '現在')}）`
};

const tabValues = [
  {
    value: 'all',
    label: 'すべて',
    icon: mdiViewGridOutline
  },
  {
    value: 'work',
    label: '実務経験',
    icon: mdiBriefcaseOutline
  },
  {
    value: 'soloDev',
    label: '個人開発',
    icon: mdiCodeBraces
  }
];

const state = reactive({
  careerList: new Array<Career>()
});

const tab = ref('all');

const fetchCareerList = async () => {
  state.careerList = careerList;
};

onBeforeMount(() => {
  fetchCareerList();
});
</script>

<template>
  <v-container>
    <v-row>
      <v-col>
        <v-card class="career-summary">
          <v-card-item>
            <v-card-title class="summary-title">
              <span class="summary-title-part">Vue.jsを中心とする</span>
              <span class="summary-title-part">フロントエンドエンジニア</span>
            </v-card-title>
          </v-card-item>
          <v-card-text>
            <p class="career-path">
              {{ occupationList.occupation1 }} → {{ occupationList.occupation2 }} →
              {{ occupationList.occupation3 }}
            </p>
            <p class="summary-copy">
              法人営業・販売職を経て、2017年にIT業界へ転職。開発・運用保守・ヘルプデスクを経験し、2022年からVue.jsを中心としたフロントエンド開発に従事しています。現在は既存機能の改修、新規機能開発、Vue
              3移行、コードレビューを担当。個人開発ではThree.js、WebGLにも領域を広げています。
            </p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-card color="transparent">
          <v-tabs
            v-model="tab"
            class="career-tabs"
            align-tabs="center"
            grow
            slider-color="primary"
            color="primary"
          >
            <template v-for="(tabValue, i) of tabValues" :key="i">
              <v-tab class="no-uppercase" :value="tabValue.value">
                <v-icon :icon="tabValue.icon" size="18" class="me-2" />
                {{ tabValue.label }}
              </v-tab>
            </template>
          </v-tabs>

          <v-card-text>
            <v-tabs-window v-model="tab">
              <template v-for="(tabValue, i) of tabValues" :key="i">
                <v-tabs-window-item :value="tabValue.value">
                  <Timeline :career-list="state.careerList" :genre="tabValue.value" />
                </v-tabs-window-item>
              </template>
            </v-tabs-window>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.no-uppercase {
  text-transform: none;
}

.career-summary {
  overflow: hidden;
  border-color: color-mix(in srgb, var(--color-main) 56%, var(--color-line));
}

.summary-kicker {
  color: var(--color-main);
  font-size: 0.72rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.summary-title {
  display: flex;
  flex-wrap: wrap;
  padding-top: 6px;
  color: var(--color-ink);
  font-size: clamp(1.05rem, 3vw, 1.35rem);
  font-weight: 900;
  line-height: 1.5;
  white-space: normal;
}

.summary-title-part {
  min-width: 0;
  white-space: normal;
  overflow-wrap: anywhere;
}

.summary-copy {
  color: var(--color-ink-muted);
  font-size: 0.9rem;
  line-height: 1.9;
}

.career-path {
  margin-bottom: 16px;
  color: var(--color-ink);
  font-size: 0.82rem;
  font-weight: 900;
  line-height: 1.8;
}

.strength-list {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 18px;
}

@media (max-width: 600px) {
  .career-tabs :deep(.v-tab) {
    min-width: 0;
    padding-inline: 6px;
    font-size: 0.78rem;
  }

  .career-tabs :deep(.v-icon) {
    display: none;
  }
}
</style>
