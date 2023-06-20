<template>
  <div class="max-w-4xl m-auto ">

    <div class="">
      <div class="bg-white p-6 rounded-lg flex items-center w-max mb-5" v-for="item, index in sourceList" :key="index">
        <img class="rounded-full w-16 h-16"
          src="https://s1.imagehub.cc/images/2023/06/01/Default_European_young_woman_night_city_detailed_symmetric_cro_0_55f6808c-f1ab-4d83-b89e-16a8cd2c18b8_1.jpeg"
          alt="" srcset="">
        <div class="flex flex-col ml-3">
          <span>GitHubCopilotGitHubAI编程工具</span>
          <span>GitHub AI编程工具</span>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const sourceList = ref(
  [
    null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
  ]
)

</script>

<style></style>