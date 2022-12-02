<script setup lang="ts"></script>

<template>
  <footer class="footer-container">
    <div class="footer">
      <div class="lefttimetel">
        <img src="@/assets/tel_footer.png" alt="" />
        <p class="p_time">周一到周日 8:00-22:00</p>
      </div>
      <div class="center_text">
        <RouterLink to="/">产品中心</RouterLink>
        <RouterLink to="/">附近门店</RouterLink>
        <RouterLink to="/service">客户服务</RouterLink>
      </div>
      <div class="qr_code">
        <img src="@/assets/qr_code.jpg" alt="" />
        <p class="p_text">美景服务号</p>
      </div>
    </div>
  </footer>
</template>

<style scoped lang="scss">
.footer-container {
  display: block;
  height: 340px;
  padding: 22px 0;
  background: #edeff1;

  .footer {
    display: flex;
    width: 1200px;
    padding: 30px 0;
    margin: auto;

    .lefttimetel {
      margin-left: 20px;
      border-right: 1px solid #dedfe1;
      padding-top: 2px;
      padding-right: 60px;
      padding-bottom: 30px;

      .p_time {
        font-size: 12px;
        color: #aaabab;
        text-align: center;
        margin-top: 30px;
      }
    }

    .center_text {
      padding-left: 60px;
      padding-top: 28px;
      box-sizing: border-box;

      a {
        padding: 20px 10px;
        font-size: 12px;
        color: #333;

        &:hover {
          color: #a83042;
        }
      }
    }

    .qr_code {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 80px 0 0 150px;

      .p_text {
        font-size: 16px;
        color: #000;
        padding-top: 20px;
      }
    }
  }
}
</style>
