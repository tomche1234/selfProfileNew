<template>
  <div class="language-level">
    <div >
      <table>
        <tbody>
          <tr v-for="(language, index) in languages" :key="index" class="language">
            <td style="width:30%">
              <span>{{language.title}}</span>
            </td>
            <td style="width:30%">
              <div class="rating">
                <div 
                  v-for="(filled, index) in language.level" 
                  :key="index" 
                  class="block" 
                  :class="{ animate: filled, empty: !filled }">
                </div>
              </div>
            </td>
            <td style="width:30%">
              <span>{{language.describe}}</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const cantonese = ref([true, true, true, true, true]);
const english = ref([true, true, true, true, false]);
const mandarin = ref([true, true, true, false, false]);
const languages = [
  {
    title: "Chinese (Cantonese)",
    level: [true, true, true, true, true],
    describe: "native"
  },
  {
    title: "English",
    level: [true, true, true, true, false],
    describe: "Professional Working"
  },
  {
    title: "Chinese (Mandarin)",
    level: [true, true, true, true, false],
    describe: "Professional Working"
  }
]
</script>

<style scoped>
.language-level {
  margin-top: 5%;
  align-items: center;
  font-family: Arial, sans-serif;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.language {
  display: flex;
  gap: 10px;
}

.rating {
  /* margin: 0% 1%; */
  display: flex;
  gap: 4px;
}

.block {
  width: 20px;
  height: 20px;
  border: 1px solid #000;
  background-color: #fff;
}

.block.animate {
  animation: fillAnimation 0.5s ease-in-out forwards;
}

.block:nth-child(1).animate {
  animation-delay: 0s;
}
.block:nth-child(2).animate {
  animation-delay: 0.2s;
}
.block:nth-child(3).animate {
  animation-delay: 0.4s;
}
.block:nth-child(4).animate {
  animation-delay: 0.6s;
}
.block:nth-child(5).animate {
  animation-delay: 0.8s;
}

@keyframes fillAnimation {
  from {
    background-color: #fff;
    opacity: 0;
  }
  to {
    background-color: #2c3e50;
    opacity: 1;
  }
}

</style>