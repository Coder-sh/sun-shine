<script setup lang="ts">
import { getImagePath } from '@/utils/utils'
defineProps<{
  title: string
  icon: string
}>()
</script>

<template>
  <div class="title">
    <p class="p_title">
      <i :style="{ backgroundImage: `url(${getImagePath(icon)})` }"></i>
      <span>{{ title }}</span>
    </p>
    <RouterLink to="/" class="more">更多&gt;&gt;</RouterLink>
  </div>
</template>

<style scoped lang="scss">
.title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 18px 20px;
  background: #fbfbfb;
  border-radius: 10px 10px 0 0;

  .p_title {
    display: flex;
    font-size: 24px;
    color: #333;
    height: 100%;

    i {
      margin-right: 5px;
      background-repeat: no-repeat;
      background-position: center center;
      background-size: contain;
      width: 25px;
    }
  }

  .more {
    width: 100px;
    height: 32px;
    line-height: 32px;
    border: 1px solid #e1e1e1;
    border-radius: 3px;
    font-size: 16px;
    text-align: center;
    color: #999;
  }
}
</style>
