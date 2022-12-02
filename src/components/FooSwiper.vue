<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, Pagination, A11y } from 'swiper'
import { getImagePath } from '@/utils/utils'
import 'swiper/css'
import 'swiper/css/pagination'

const modules = [Autoplay, A11y]

const sliders = [
  getImagePath('slider_01.jpg'),
  getImagePath('slider_02.jpg'),
  getImagePath('slider_03.jpg'),
  getImagePath('slider_04.jpg'),
  getImagePath('slider_05.jpg')
]
</script>

<template>
  <swiper
    :slidesPerView="4"
    :spaceBetween="10"
    :loop="true"
    :autoplay="{
      delay: 2500,
      disableOnInteraction: false
    }"
    :modules="modules"
    class="swiper-wrap"
  >
    <swiper-slide v-for="banner in sliders">
      <img :src="banner" />
    </swiper-slide>
  </swiper>
</template>

<style scoped lang="scss">
.swiper-wrap {
  margin-top: 40px;
  width: 100%;

  img {
    width: 100%;
    height: 200px;
  }
}
</style>
