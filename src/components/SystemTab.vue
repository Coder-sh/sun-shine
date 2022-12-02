<script setup lang="ts">
import { getImagePath } from '@/utils/utils'
import { ref } from 'vue'
import IndexTitle from './IndexTitle.vue'

const tabs = ['暖气', '中央空调', '净水系统', '新风系统']

const tabsContent = [
  [
    {
      img: getImagePath('heating_01.jpg'),
      title: '菲斯曼Vitodens 100-W B1KF 冷凝壁挂炉'
    },
    {
      img: getImagePath('heating_01.jpg'),
      title: '菲斯曼Vitodens 100-W B1KF 冷凝壁挂炉'
    },
    {
      img: getImagePath('heating_01.jpg'),
      title: '菲斯曼Vitodens 100-W B1KF 冷凝壁挂炉'
    },
    {
      img: getImagePath('heating_01.jpg'),
      title: '菲斯曼Vitodens 100-W B1KF 冷凝壁挂炉'
    },
    {
      img: getImagePath('heating_01.jpg'),
      title: '菲斯曼Vitodens 100-W B1KF 冷凝壁挂炉'
    }
  ],
  [
    {
      img: getImagePath('aircondition_01.jpg'),
      title: '菲斯曼Vitodens 100-W B1KF 冷凝壁挂炉'
    },
    {
      img: getImagePath('aircondition_01.jpg'),
      title: '菲斯曼Vitodens 100-W B1KF 冷凝壁挂炉'
    },
    {
      img: getImagePath('aircondition_01.jpg'),
      title: '菲斯曼Vitodens 100-W B1KF 冷凝壁挂炉'
    }
  ],
  [
    {
      img: getImagePath('waterpure_01.jpg'),
      title: '菲斯曼Vitodens 100-W B1KF 冷凝壁挂炉'
    },
    {
      img: getImagePath('waterpure_01.jpg'),
      title: '菲斯曼Vitodens 100-W B1KF 冷凝壁挂炉'
    }
  ],
  [
    {
      img: getImagePath('freshair_01.jpg'),
      title: '菲斯曼Vitodens 100-W B1KF 冷凝壁挂炉'
    }
  ]
]

const selectTab = ref(0)

const tabOver = (index: number) => {
  selectTab.value = index
}
</script>

<template>
  <div class="tabs_system">
    <IndexTitle title="舒适家居系统" icon="ic_system.png" />
    <div class="tabs_container">
      <ul class="switch_tab">
        <li
          v-for="(item, index) in tabs"
          :class="{ current: selectTab === index }"
          @mouseover="tabOver(index)"
        >
          {{ item }}
        </li>
      </ul>
      <div
        class="switch_content"
        v-for="(content, index) in tabsContent"
        v-show="selectTab === index"
      >
        <ul>
          <li v-for="product in content">
            <RouterLink to="/" class="topimg">
              <img :src="product.img" alt="" />
            </RouterLink>
            <RouterLink to="/" class="title" style="margin-top: 0px">
              {{ product.title }}
            </RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.tabs_system {
  margin-top: 40px;
  border-radius: 10px;
  border: 1px solid #dddddd;

  .tabs_container {
    border-radius: 0 0 10px 10px;
    overflow: hidden;

    .switch_tab {
      display: flex;

      li {
        width: 25%;
        height: 44px;
        line-height: 44px;
        text-align: center;
        font-size: 18px;
        color: #fff;
        background: #333;
        transition: all 0.3s 0s ease-in-out;

        & + li {
          border-left: 1px solid #434343;
        }
      }

      .current {
        background: #a83042;
      }
    }

    .switch_content {
      max-width: 1200px;
      overflow: hidden;

      ul {
        display: flex;

        li {
          width: 25%;
          flex-shrink: 0;
          text-align: center;
          display: inline-block;
          vertical-align: middle;
          background-color: #fff;

          .topimg {
            display: block;
            position: relative;
            height: 200px;
            transition: all 0.3s 0s ease-in-out;

            img {
              display: block;
              position: absolute;
              max-width: 100%;
              max-height: 100%;
              left: 50%;
              top: 50%;
              transform: translate(-50%, -50%);
            }
          }

          .title {
            display: inline-block;
            margin-bottom: 20px;
            font-size: 12px;
            color: #000;
          }

          & + li {
            border-left: 1px solid #ddd;
          }
        }
      }
    }
  }
}
</style>
