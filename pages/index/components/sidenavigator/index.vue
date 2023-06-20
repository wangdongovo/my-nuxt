<template>
  <div class="fixed top-24 w-44 bg-white rounded-lg">
      <div class="h-14 flex justify-start items-center pl-3"  v-for="item,index in sideSource" :key="index">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-560f93ae="" class=""><path fill-rule="evenodd" clip-rule="evenodd" d="M0.666016 8.00033C0.666016 12.0504 3.94926 15.3337 7.99935 15.3337C12.0494 15.3337 15.3327 12.0504 15.3327 8.00033C15.3327 3.95024 12.0494 0.666992 7.99935 0.666992C3.94926 0.666992 0.666016 3.95024 0.666016 8.00033ZM5.43709 11.0048L9.3392 9.34286L11.0037 5.43876C11.0397 5.35428 11.0393 5.25869 11.0025 5.17455C10.9288 5.00586 10.7323 4.92887 10.5636 5.00259L6.68535 6.69744L5.00087 10.565C4.96428 10.649 4.96389 10.7444 4.9998 10.8287C5.07193 10.9981 5.26772 11.0769 5.43709 11.0048Z" fill="currentColor" data-v-560f93ae=""></path></svg>
        <text class="ml-5">{{item.text}}</text>
      </div>
  </div>
</template>

<script setup lang="ts">
import {ref} from 'vue'

const sideSource = ref([
  {
    text: 'AI编程工具',
    image: ''
  },
  {
    text: 'AI设计工具',
    image: ''
  },
  {
    text: 'AI音频工具',
    image: ''
  },
  {
    text: 'AI图片插画生成',
    image: ''
  },
  {
    text: 'AI幻灯片和演示',
    image: ''
  },
  {
    text: 'AI学习网站',
    image: ''
  }
])

</script>

<style>
</style>