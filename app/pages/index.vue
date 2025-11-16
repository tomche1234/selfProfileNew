<template>
  <div>
    <WelcomeHeader/>
    <div class="passage">
      Hey! I'm Tom, a full-stack engineer with 5+ years of experience, 
      mainly working with TypeScript, .NET Core, and Python. I'm always 
      up for learning something new, which has helped me transition between roles, 
      from backend to full-stack. I've also led a team of engineers. One thing I 
      really believe in is using integration and end-to-end testing to make sure our 
      systems stay reliable and meet the business needs, even when the code changes.
    </div>
    <MoveToAboutMeButton class="button"/>
  </div>
</template>

<script setup lang="ts">
import MoveToAboutMeButton from '../components/homePage/moveToAboutMeButton.vue'
import WelcomeHeader from '../components/homePage/welcomeHeader.vue'
</script>

<style scoped>
.button{
  margin-top:10px;
}
.passage{
  line-height: 1.75;
  font-family: sans-serif;
}
</style>