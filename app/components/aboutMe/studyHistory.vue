<template>
  <History 
    :historyItems="studyHistorys"
  />
</template>

<script setup lang="ts">
import type { HistoryItem } from '~/types/news'
import History from './history.vue'
const studyHistorys: HistoryItem[] = [
  {
    color: 'rose',
    year: '2013 Sep - 2016 Aug',
    header: 'Hong Kong University of Science and Technology,<br> Bachelor degree in Mathematics ',
    awards: ["Graduation in Second Class Honors", "Finished a jungle chess project"]
  },
  {
    color: 'red',
    year: '2011 Sep - 2013 Aug',
    header: 'HONG KONG COMMITTEE COLLEGE,<br> Associate degree in STATISTIC AND COMPUTER FOR BUSINESS ',
    awards: ["Graduation in dean list", "Finished a fashion website project"]
  },
]

</script>

<style scoped>
/* Optional: smooth dot hover */
</style>
