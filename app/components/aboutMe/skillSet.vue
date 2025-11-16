<template>
  <div class="max-w-6xl mx-auto py-10 px-4">
    <h2 class="text-3xl font-bold text-center mb-10">My Skill Set</h2>
    <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
      <div v-for="(category, i) in skills" :key="i" class="b">
        <h3 class="text-xl font-semibold mb-4 text-gray-800">{{ category.name }}</h3>
        <ul class="list-disc list-inside space-y-1 text-gray-700">
          <li v-for="(skill, index) in category.items" :key="index">{{ skill }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
const skills = [
  {
    name: "Front-End",
    items: ["Vue.js", "TypeScript"]
  },
  {
    name: "Back-End",
    items: [".NET Core", "C#", "Python"]
  },
  {
    name: "Database",
    items: ["MySQL", "MSSQL", "MongoDB", "PostgreSQL"]
  },
  {
    name: "Management",
    items: ["Git", "Docker", "CI/CD / Jenkins", "Agile / Jira"]
  }
]
</script>

<style scoped>
/* Tailwind handles most of the styling */
</style>
