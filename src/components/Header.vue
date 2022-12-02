<script setup lang="ts"></script>

<template>
  <div class="header-wrap">
    <div class="header">
      <div class="logo">
        <RouterLink to="/">
          <img src="@/assets/logo.png" alt="" />
        </RouterLink>
      </div>
      <nav>
        <ul class="nav">
          <li>
            <RouterLink to="/">产品中心</RouterLink>
          </li>
          <li>
            <RouterLink to="/">预约量房</RouterLink>
          </li>
          <li>
            <RouterLink to="/">工程案例</RouterLink>
          </li>
          <li>
            <RouterLink to="/">附近门店</RouterLink>
          </li>
          <li>
            <RouterLink to="/service/problem">客户服务</RouterLink>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<style scoped lang="scss">
.header-wrap {
  padding: 22px 0;
  background: #333;
  font-size: 14px;
  height: 85px;

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 1200px;
    margin: auto;

    .nav {
      display: flex;
      column-gap: 50px;
    }
  }
}
</style>
