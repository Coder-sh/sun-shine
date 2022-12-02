<script setup lang="ts">
import { getImagePath } from '@/utils/utils'
import IndexTitle from './IndexTitle.vue'

const classList = [
  { title: '采暖系统', icon: getImagePath('ico_sskt1_1.png') },
  { title: '中央空调', icon: getImagePath('ico_sskt2_1.png') },
  { title: '水处理系统', icon: getImagePath('ico_sskt3_1.png') },
  { title: '新风系统', icon: getImagePath('ico_sskt4_1.png') },
  { title: '智能门窗', icon: getImagePath('ico_sskt5_1.png') }
]
</script>

<template>
  <div class="classroom">
    <IndexTitle title="舒适课堂" icon="ic_classroom.png" />
    <div class="container">
      <ul>
        <li v-for="item in classList">
          <i :style="{ backgroundImage: `url(${item.icon})` }"></i>
          <p class="title">{{ item.title }}</p>
          <RouterLink to="/" class="more">MORE</RouterLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped lang="scss">
.classroom {
  margin-top: 40px;
  border-radius: 10px;
  border: 1px solid #dddddd;

  .container {
    ul {
      height: 370px;
      border-top: 1px solid #dddddd;

      li {
        display: inline-block;
        width: 20%;
        box-sizing: border-box;
        height: 100%;
        text-align: center;
        overflow: hidden;
        transition: all 0.3s 0s ease-in-out;
        background: #fff;
        padding-top: 80px;
        font-size: 12px;
        vertical-align: middle;

        i {
          display: block;
          width: 81px;
          height: 83px;
          margin: 0 auto;
          background-repeat: no-repeat;
          background-position: center center;
          transition: all 0.3s 0s ease-in-out;
        }

        .title {
          font-size: 18px;
          color: #666;
          margin-top: 50px;
        }

        .more {
          display: inline-block;
          margin-top: 30px;
          width: 80px;
          height: 24px;
          line-height: 24px;
          text-align: center;
          border: 1px solid #797777;
          font-size: 14px;
          color: #666;
          transition: all 0.3s 0s ease-in-out;
          vertical-align: baseline;
        }

        & + li {
          border-left: 1px solid #dddddd;
        }

        &:hover {
          box-shadow: 0px 0px 23px 3px rgb(0 0 0 / 23%);
          position: relative;
          z-index: 1;

          .title {
            color: #a83042;
          }

          .more {
            border: 1px solid #a83042;
            color: #a83042;
          }
        }
      }
    }
  }
}
</style>
