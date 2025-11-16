<template>
  <div class="min-h-screen flex flex-col relative overflow-hidden">

    <!-- Animated Background -->
    <div class="fixed inset-0 -z-10 animate-bg bg-gradient-to-r from-gray-100 via-white to-gray-300
      dark:from-gray-900 dark:via-gray-800 dark:to-gray-900" />

    <!-- Header -->
    <Header />

    <!-- Main content -->
    <main class="flex-1 pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <div class="mx-auto max-w-7xl w-full">
        <NuxtPage />
      </div>
    </main>

    <!-- Footer -->
    <Footer />

  </div>
</template>

<script setup>
import Header from '~/components/layout/header.vue'
import Footer from '~/components/layout/footer.vue'
</script>

<style scoped>
/* Background animation */
@keyframes bgSlide {
  0%   { background-position: 0% 50%; }
  50%  { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

.animate-bg {
  background-size: 200% 200%;
  animation: bgSlide 10s ease infinite;
}
</style>
