<script setup lang="ts">
import TopSwiper from '@/components/TopSwiper.vue'
import FastentranceVue from '@/components/Fastentrance.vue'
import HotSale from '@/components/HotSale.vue'
import SystemTab from '@/components/SystemTab.vue'
import Classroom from '@/components/Classroom.vue'
import FooSwiper from '@/components/FooSwiper.vue'
</script>

<template>
  <div class="home">
    <TopSwiper />
    <div class="content">
      <FastentranceVue />
      <HotSale />
      <SystemTab />
      <Classroom />
    </div>
    <FooSwiper />
  </div>
</template>

<style scoped lang="scss">
.home {
  display: flex;
  flex-direction: column;

  .content {
    margin: auto;
  }
}
</style>
