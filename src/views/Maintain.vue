<script setup lang="ts">
import Accordion from '@/components/Accordion.vue'
import Service from '@/components/Service.vue'

const dataList = [
  {
    title: '难得一见的空调清洗现场，看看空调到底有多脏！',
    content: '124312438412'
  },
  {
    title: '难得一见的空调清洗现场，看看空调到底有多脏！',
    content: '21341234124'
  },
  {
    title: '难得一见的空调清洗现场，看看空调到底有多脏！',
    content: '21341234124'
  }
]
</script>

<template>
  <Service
    :title="{ zh: '常规保养方法', en: 'Routine maintenance method' }"
    :selectTab="2"
  >
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
