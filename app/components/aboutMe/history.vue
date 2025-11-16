<template>
  <div class="relative max-w-4xl mx-auto py-12">
    <!-- Vertical line -->
    <div class="absolute left-4 top-0 w-1 bg-gray-300 h-full"></div>

    <div v-for="(year, i) in years" :key="i" class="relative mb-12 pl-12">
      <!-- Dot -->
      <div
        class="absolute -left-1.5 top-1.5 w-3 h-3 rounded-full"
        :class="dotColors[year.color]"
      ></div>

      <!-- Year -->
      <div class="text-lg font-bold mb-2" :class="textColors[year.color]">
        {{ year.year }}
      </div>

      <!-- Header -->
      <div class="text-base font-semibold mb-1" v-html="year.header"></div>

      <!-- Awards / list -->
      <ul class="list-disc list-inside space-y-1">
        <li v-for="(award, index) in year.awards" :key="index" v-html="award"></li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { HistoryItem } from '~/types/news'
const props = defineProps<{ historyItems: HistoryItem[] }>()

const years = props.historyItems

// Dot color mapping
const dotColors = {
  blue: 'bg-blue-500',
  cyan: 'bg-cyan-400',
  green: 'bg-green-500',
  orange: 'bg-orange-500',
  rose: 'bg-rose-500',
  red: 'bg-red-500',
}

// Text color mapping
const textColors = {
  blue: 'text-blue-500',
  cyan: 'text-cyan-400',
  green: 'text-green-500',
  orange: 'text-orange-500',
  rose: 'text-rose-500',
  red: 'text-red-500',
}
</script>

<style scoped>
/* Optional: smooth dot hover */
</style>
