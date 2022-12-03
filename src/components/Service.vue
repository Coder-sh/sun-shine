<script setup lang="ts">
withDefaults(
  defineProps<{
    title: { zh: string; en: string }
    selectTab?: number
  }>(),
  { selectTab: 1 }
)

const tabs = [
  { title: '常见问题', href: '/service/problem' },
  { title: '常规保养方法', href: '/service/maintain' },
  { title: '联系我们', href: '/service/contact' }
]
</script>

<template>
  <div class="service">
    <div class="service-img">
      <img src="@/assets/problem.png" alt="" />
      <div class="service-content">
        <p class="service-title">{{ title.zh }}</p>
        <p class="service-en">
          <div class="short_line"></div>
          <span class="text_en">{{ title.en }}</span>
          <div class="short_line"></div>
        </p>
      </div>
    </div>
    <div class="service-tabs">
      <div class="tabs">
        <ul>
          <li v-for="(item, index) in tabs">
            <RouterLink
              :to="item.href"
              :class="{ current: selectTab === index + 1 }"
              >{{ item.title }}</RouterLink
            >
          </li>
        </ul>
      </div>
      <div class="tabs_content">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.service {
  display: flex;
  flex-direction: column;
  width: 1200px;
  padding: 0 10px;
  margin: 0 auto 40px;

  .service-img {
    margin: 26px 0 14px 0;
    position: relative;

    img {
      width: 100%;
    }

    .service-content {
      position: absolute;
      top: 172px;
      left: 510px;
      color: #a83042;

      .service-title {
        font-size: 40px;
      }

      .service-en {
        display: flex;
        align-items: center;
        column-gap: 6px;

        .short_line {
          width: 30px;
          height: 1px;
          background-color: #a83042;
        }

        .text_en {
          font-size: 16px;
          font-weight: 500;
          position: relative;
          bottom: 1px;
        }
      }
    }
  }

  .service-tabs {
    width: 100%;

    .tabs {
      height: 110px;
      background: #ffffff;
      position: relative;
      margin-bottom: 20px;

      ul {
        float: left;
        vertical-align: middle;
        position: absolute;
        left: 37px;
        top: -1px;
        height: 32px;

        li {
          float: left;
          margin-right: 56px;

          a {
            display: inline-block;
            padding: 50px 0px 16px 0px;
            color: #999999;
            font-size: 16px;
          }

          .current {
            color: #a83042;
            border-bottom: 4px solid #a83042;
          }
        }
      }
    }

    .tabs_content {
      padding: 0 15px;
      background: #fff;
    }
  }
}
</style>
