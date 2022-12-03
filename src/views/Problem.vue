<script setup lang="tsx">
import Accordion from '@/components/Accordion.vue'
import Service from '@/components/Service.vue'
import { getImagePath } from '@/utils/utils'

const dataList = [
  {
    title: '别让空调成为各类细菌、真菌、尘螨滋生的温床',
    content: (
      <>
        <p>
          hello，美景粉们！这两天你们感受到三伏天的热情了嘛？真正是应验了那句话，夏天的命是空调给的。在享受空调带来的清凉之余，对于空调的清洗和使用，你可得注意了！
        </p>
        <img src={getImagePath('news_01.jpg')}></img>
      </>
    )
  },
  {
    title: '别让空调成为各类细菌、真菌、尘螨滋生的温床',
    content: (
      <>
        <p>
          hello，美景粉们！这两天你们感受到三伏天的热情了嘛？真正是应验了那句话，夏天的命是空调给的。在享受空调带来的清凉之余，对于空调的清洗和使用，你可得注意了！
        </p>
        <img src={getImagePath('news_01.jpg')}></img>
      </>
    )
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
