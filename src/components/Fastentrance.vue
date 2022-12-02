<script setup lang="ts">
import { getImagePath } from '@/utils/utils'

const fastEntranceList = [
  { title: '快速报价', icon: getImagePath('ico_llis1.png'), href: '/' },
  { title: '美景大家', icon: getImagePath('ico_llis2.png'), href: '/' },
  { title: '保修服务', icon: getImagePath('ico_llis3.png'), href: '/' },
  { title: '关于美景', icon: getImagePath('ico_llis4.png'), href: '/' },
  { title: '门店地址', icon: getImagePath('ico_llis5.png'), href: '/' },
  { title: '联系我们', icon: getImagePath('ico_llis6.png'), href: '/' }
]

const imgEntanceList = [
  {
    title: '燃气壁挂炉',
    text: '意大利阿里斯顿 GENUS X',
    background: getImagePath('bg_orange.jpg'),
    product: getImagePath('upload_01.png'),
    href: '/'
  },
  {
    title: '暖气片',
    text: '德国楷美钢制板式',
    background: getImagePath('bg_red.jpg'),
    product: getImagePath('upload_02.png'),
    href: '/'
  },
  {
    title: '大金VRV',
    text: '全效家用中央空调',
    background: getImagePath('bg_blue.jpg'),
    product: getImagePath('upload_03.png'),
    href: '/'
  }
]
</script>

<template>
  <div class="topfastentrance">
    <ul class="ul_fastleft">
      <li v-for="item in fastEntranceList">
        <RouterLink :to="item.href">
          <i :style="{ backgroundImage: `url(${item.icon})` }"></i>
          <span>{{ item.title }}</span>
        </RouterLink>
      </li>
    </ul>
    <ul class="ul_imgentrance">
      <li
        v-for="item in imgEntanceList"
        :style="{ backgroundImage: `url(${item.background})` }"
      >
        <RouterLink :to="item.href">
          <p class="p_title">
            <span>{{ item.title }}</span>
          </p>
          <p class="p_text">{{ item.text }}</p>
          <span class="btn_reserve">快速预定</span>
          <div class="imgbox">
            <img :src="item.product" alt="" />
          </div>
        </RouterLink>
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
.topfastentrance {
  margin: 40px 0;
  display: flex;

  .ul_fastleft {
    display: flex;
    flex-wrap: wrap;
    width: 228px;
    height: 168px;
    background: #666;

    li {
      width: 76px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      a {
        opacity: 0.5;
        color: #fff;
        font-size: 12px;

        i {
          display: block;
          height: 42px;
          background-repeat: no-repeat;
          background-position: center center;
          background-size: auto 25px;
        }

        &:hover {
          opacity: 1;
        }
      }

      &::before {
        content: '';
        display: block;
        position: absolute;
        left: 0;
        top: 8px;
        bottom: 8px;
        width: 1px;
        background: #777;
      }

      &::after {
        content: '';
        display: block;
        position: absolute;
        left: 8px;
        right: 8px;
        top: 0;
        background: #777;
        height: 1px;
      }
    }
  }

  .ul_imgentrance {
    display: flex;
    font-size: 12px;
    vertical-align: middle;

    li {
      margin-left: 14px;
      width: 310px;
      height: 168px;
      background-image: url('@/assets/bg_orange.jpg');
      background-repeat: no-repeat;
      background-position: center center;

      a {
        display: block;
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        position: relative;
        padding: 30px 120px 30px 20px;
        color: #fff;
        overflow: hidden;

        .p_title {
          font-size: 24px;
          height: 30px;
          line-height: 30px;
        }

        .p_text {
          font-size: 14px;
          margin-top: 10px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .btn_reserve {
          display: block;
          height: 28px;
          margin-top: 20px;
          width: 92px;
          border: 1px solid #fff;
          color: #fff;
          font-size: 14px;
          line-height: 28px;
          text-align: center;
        }

        .imgbox {
          position: absolute;
          width: 132px;
          height: 124px;
          right: -6px;
          bottom: 22px;

          img {
            position: absolute;
            display: block;
            max-width: 100%;
            max-height: 100%;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
          }
        }

        &:hover {
          opacity: 0.8;
          color: #1974a1;
        }
      }
    }
  }
}
</style>
