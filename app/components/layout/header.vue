<template>
  <header class="w-full fixed top-0 left-0 bg-white/80 backdrop-blur shadow z-50">
    <div class="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
      
      <!-- Left: Home Button -->
      <NuxtLink to="/" class="text-xl font-bold text-gray-800">
        <span class="text-[30px] material-symbols-outlined">
          home
        </span>
      </NuxtLink>

      <!-- Desktop Menu -->
      <nav class="hidden md:flex space-x-8 text-gray-700 font-medium">
        <NuxtLink to="/aboutMe" class="hover:text-black">About Me</NuxtLink>
        <NuxtLink to="/myProject" class="hover:text-black">My Project</NuxtLink>
        <NuxtLink to="/contactMe" class="hover:text-black">Contact Me</NuxtLink>
      </nav>

      <!-- Mobile Menu Button -->
      <button @click="drawer = !drawer" class="md:hidden text-3xl">
        ☰
      </button>

    </div>

    <!-- Mobile Drawer -->
    <transition name="slide">
      <div
        v-if="drawer"
        class="fixed inset-0 bg-black/70 z-40 md:hidden"
        @click="drawer = false"
      ></div>
    </transition>

    <transition name="slide-right">
      <div
        v-if="drawer"
        class="fixed top-0 right-0 w-60 h-full bg-white shadow-lg p-6 z-50 md:hidden"
      >
        <nav class="flex flex-col space-y-6 text-lg">
          <NuxtLink to="/aboutMe" @click="drawer = false" class="hover:text-black">About Me</NuxtLink>
          <NuxtLink to="/myProject" @click="drawer = false" class="hover:text-black">My Project</NuxtLink>
          <NuxtLink to="/contactMe" @click="drawer = false" class="hover:text-black">Contact Me</NuxtLink>
        </nav>
      </div>
    </transition>
  </header>
</template>

<script setup>
const drawer = ref(false)
</script>

