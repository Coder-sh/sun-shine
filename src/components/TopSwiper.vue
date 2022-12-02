<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, Pagination, A11y } from 'swiper'
import { getImagePath } from '@/utils/utils'
import 'swiper/css'
import 'swiper/css/pagination'

const modules = [Autoplay, Pagination, A11y]

const banners = [
  getImagePath('banner_01.jpg'),
  getImagePath('banner_02.jpg'),
  getImagePath('banner_03.jpg')
]
</script>

<template>
  <swiper
    :slidesPerView="1"
    :spaceBetween="30"
    :loop="true"
    :centeredSlides="true"
    :pagination="{
      clickable: true
    }"
    :autoplay="{
      delay: 2500,
      disableOnInteraction: false
    }"
    :navigation="true"
    :modules="modules"
    class="swiper-wrap"
  >
    <swiper-slide v-for="banner in banners">
      <li :style="{ backgroundImage: `url(${banner})` }"></li>
    </swiper-slide>
  </swiper>
</template>

<style scoped lang="scss">
.swiper-wrap {
  width: 100%;
  height: 600px;

  li {
    height: 100%;
    background-repeat: no-repeat;
    background-position: center center;
  }
}
</style>
