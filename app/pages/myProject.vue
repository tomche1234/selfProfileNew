<template>
  <div class="flex items-center justify-center ">
    <div class="text-center max-w-lg  p-8">
      <h1 class="text-4xl md:text-5xl font-extrabold text-red-600 mb-4">
        Coming Soon
      </h1>
      <p class="text-gray-700 mb-6">
        I'm working hard to bring something amazing to you. Stay tuned!
      </p>
      <p class="text-gray-700 mb-6">
        Here is my GitHub, feel free to take a look first: 
        <a href="https://github.com/tomche1234" target="_blank" class="text-red-600 font-semibold hover:underline">
          github.com/tomche1234
        </a>
      </p>
      <NuxtLink to="/contactMe" class="inline-block px-6 py-3 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition-colors delay-600">
        Contact Me
      </NuxtLink>
    </div>
  </div>
</template>

<style scoped>
/* Simple fade-in animation */
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

.animate-fade-in {
  animation: fadeIn 0.6s ease forwards;
}

.animate-fade-in.delay-200 {
  animation-delay: 0.2s;
}

.animate-fade-in.delay-400 {
  animation-delay: 0.4s;
}

.animate-fade-in.delay-600 {
  animation-delay: 0.6s;
}

/* Optional background animation */
@keyframes gradientMove {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}
.animate-gradient {
  background-size: 200% 200%;
  animation: gradientMove 15s ease infinite;
}
</style>
