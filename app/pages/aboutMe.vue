<template>
  <div class="w-full max-w-5xl mx-auto px-4 py-12">
    <!-- Header -->
    <div class="text-center mb-8">
      <h1 class="text-3xl md:text-4xl font-bold mb-6">
        Got a question or proposal?
      </h1>
      <NuxtLink to="/contactMe">
        <button
          class="inline-flex items-center px-6 py-3 bg-blue-100 hover:bg-blue-200 text-blue-600 font-medium rounded-lg transition"
        >
          <span class="material-symbols-outlined mr-2 text-blue-600">
            mail
          </span>
          Contact Me
        </button>
      </NuxtLink>
    </div>

    <!-- Tabs -->
    <div class="">
      <!-- Tab headers -->
      <div class="flex border-b border-gray-200 overflow-x-auto">
        <button
          v-for="item in tabs"
          :key="item.value"
          @click="tab = item.value"
          class="flex-1 py-3 text-center font-medium transition"
          :class="tab === item.value ? 'border-b-2 border-blue-600 text-blue-600' : 'text-gray-600 hover:text-blue-500'"
        >
          {{ item.label }}
        </button>
      </div>

      <!-- Tab content -->
      <div class="p-6">
        <div v-show="tab === 'history'">
          <WorkingHistory />
        </div>
        <div v-show="tab === 'study'">
          <StudyHistory />
        </div>
        <div v-show="tab === 'skill'">
          <SkillSet />
        </div>
        <div v-show="tab === 'lang'">
          <Language />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import WorkingHistory from '../components/aboutMe/workingHistory.vue'
import StudyHistory from '../components/aboutMe/studyHistory.vue'
import SkillSet from '../components/aboutMe/skillSet.vue'
import Language from '../components/aboutMe/language.vue'

const tab = ref('history')

const tabs = [
  { value: 'history', label: 'My Working History' },
  { value: 'study', label: 'My Study History' },
  { value: 'skill', label: 'My Skill Set' },
  { value: 'lang', label: 'Language I Know' },
]
</script>

<style scoped>
</style>
