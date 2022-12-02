<script setup lang="ts">
import IndexTitle from './IndexTitle.vue'
</script>

<template>
  <div class="hot">
    <IndexTitle title="热销产品" icon="ico_fire.png" />
    <div class="hot_container">
      <a href="/" class="leftbig">
        <img src="@/assets/hot_01.jpg" alt="" />
      </a>
      <div class="rightlist">
        <ul>
          <li>
            <RouterLink to="/" class="top_img">
              <img src="@/assets/hot_02.jpg" alt="" />
            </RouterLink>
            <RouterLink to="/" class="title"
              >德国伯爵SCB PRO 24kw 壁挂炉</RouterLink
            >
            <p class="p_desc">意大利原装进口 适用100-180㎡中大户型.</p>
          </li>
          <li>
            <RouterLink to="/" class="top_img">
              <img src="@/assets/hot_03.jpg" alt="" />
            </RouterLink>
            <RouterLink to="/" class="title"
              >德国菲斯曼A1JG 24kw 壁挂炉</RouterLink
            >
            <p class="p_desc">环保低氮经济型 适用60-120㎡中小户型.</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.hot {
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  border: 1px solid #dddddd;

  .hot_container {
    display: flex;

    .leftbig {
      width: 598px;
      height: 447px;

      img {
        border-radius: 0 0 0 10px;
        width: 100%;
        height: 100%;
      }
    }

    .rightlist {
      width: 600px;
      height: 447px;
      border-top: 1px solid #dddddd;
      border-radius: 0 0 10px 0;
      background-color: #fff;
      overflow: hidden;

      ul {
        display: flex;
        height: 100%;

        li {
          flex: 1;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          cursor: pointer;

          .top_img {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            height: 310px;
            position: relative;

            &:hover {
              opacity: 0.8;
              transition: all 0.3s 0s ease-in-out;
            }
          }

          .title {
            margin-top: 30px;
            font-size: 12px;
            color: #000;
            display: inline-block;
            max-width: 170px;
            transition: all 0.3s 0s ease-in-out;

            &:hover {
              color: #a83042;
            }
          }

          .p_desc {
            margin-top: 20px;
            text-align: center;
            font-size: 12px;
            color: #999;
            line-height: 24px;
          }

          &:last-child {
            border-left: 1px solid #dddddd;
          }
        }
      }
    }
  }
}
</style>
