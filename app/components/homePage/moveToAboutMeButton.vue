<template>
  <div>
    <button class="no-active-state" @click="moveToAboutMe">
      <div  class="glitch-text relative flex items-center">
        <span class="relative">
          <span class="relative z-10">See More About Me</span>
        </span>
        <span class="material-symbols-outlined text-2xl">
          arrow_forward
        </span>
      </div>
    </button>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();
function moveToAboutMe()
{
  router.push("/aboutMe")
}
</script>


<style scoped>
.no-active-state {
  /* Remove active state */
  background-color: transparent !important;
  box-shadow: none !important;
  outline: none !important;
}

.no-active-state:focus,
.no-active-state:active {
  background-color: transparent !important;
  box-shadow: none !important;
  outline: none !important;
}
/* Make text moving inside the button*/
.glitch-text {
  position: relative;
  animation: glitch 2s infinite;
  text-transform: uppercase;
}
@keyframes glitch {
  0% {
    transform: translate(0);
  }
  20% {
    transform: translate(-2px, 2px);
  }
  40% {
    transform: translate(2px, -2px);
  }
  60% {
    transform: translate(-2px, 2px);
  }
  80% {
    transform: translate(2px, -2px);
  }
  100% {
    transform: translate(0);
  }
}
</style>