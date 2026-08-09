<script setup lang="ts">
import type { Career, OccupationList } from '@/types/global';
import { ref, onBeforeMount, reactive } from 'vue';
import Timeline from '@/components/TimelineComponents.vue';
import careerList from '@/assets/data/careerList.json';
import { useCalculateDuration } from '@/stores/calculateDuration';
import dayjs from 'dayjs';

const tabValues = [
  {
    value: 'all',
    label: 'All'
  },
  {
    value: 'work',
    label: 'Work'
  },
  {
    value: 'soloDev',
    label: 'SoloDev'
  }
];

const state = reactive({
  careerList: new Array<Career>(),
  occupationList: {} as OccupationList
});

const tab = ref(null);

const fetchCareerList = async () => {
  state.careerList = careerList;
  state.occupationList = {
    occupation1: `法人営業(${useCalculateDuration().dateRange(
      state.careerList[1].startDate ?? '',
      state.careerList[1].endDate ?? ''
    )})`,
    occupation2: `販売員(${useCalculateDuration().dateRange(
      state.careerList[2]?.startDate ?? '',
      state.careerList[2]?.endDate ?? ''
    )})`,
    occupation3: `ITエンジニア(${useCalculateDuration().dateRange(
      state.careerList[3]?.startDate ?? '',
      dayjs().format('YYYY/MM')
    )})`
  };
};

onBeforeMount(() => {
  fetchCareerList();
});
</script>

<template>
  <v-container>
    <v-row>
      <v-col>
        <v-card>
          <v-card-item>
            <v-card-subtitle>Career History</v-card-subtitle>
          </v-card-item>
          <v-card-text>
            {{ state.occupationList.occupation1 }} → {{ state.occupationList.occupation2 }} →
            {{ state.occupationList.occupation3 }}
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-card color="transparent">
          <v-tabs v-model="tab" align-tabs="center" grow slider-color="primary" color="primary">
            <template v-for="(tabValue, i) of tabValues" :key="i">
              <v-tab class="no-uppercase" :value="tabValue.value">{{ tabValue.label }}</v-tab>
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
</style>
