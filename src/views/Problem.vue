<script setup lang="ts">
import Accordion from '@/components/Accordion.vue'
import Service from '@/components/Service.vue'

const dataList = [
  {
    title: '别让空调成为各类细菌、真菌、尘螨滋生的温床',
    content: '21341234124'
  },
  {
    title: '别让空调成为各类细菌、真菌、尘螨滋生的温床',
    content: '21341234124'
  },
  {
    title: '别让空调成为各类细菌、真菌、尘螨滋生的温床',
    content: '21341234124'
  },
  {
    title: '别让空调成为各类细菌、真菌、尘螨滋生的温床',
    content: '21341234124'
  }
]
</script>

<template>
  <Service :title="{ zh: '常见问题', en: 'Common problems' }">
    <Accordion
      v-for="(item, index) in dataList"
      :props="{
        title: item.title,
        content: item.content
      }"
      :showTopborder="!!index"
    />
  </Service>
</template>

<style scoped lang="scss"></style>
