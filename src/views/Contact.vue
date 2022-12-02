<script setup lang="ts">
import Service from '@/components/Service.vue'
</script>

<template>
  <Service :title="{ zh: '联系我们', en: 'Contact us' }" :selectTab="3">
    <div class="contact">
      <img src="@/assets/contact.jpg" alt="" />
      <table>
        <tbody>
          <tr>
            <td>客户服务热线</td>
            <td>028-96098</td>
          </tr>
          <tr>
            <td>销售咨询:028-96098转1号线</td>
            <td>销售咨询:028-96098转1号线</td>
            <td>销售咨询:028-96098转1号线</td>
          </tr>
          <tr>
            <td>销售咨询:028-96098转1号线</td>
            <td>销售咨询:028-96098转1号线</td>
            <td>销售咨询:028-96098转1号线</td>
          </tr>
        </tbody>
      </table>
      <hr />
      <div class="contact_way">
        <p>地区专卖店</p>
        <p><span>联系人：</span>马先生</p>
        <p><span>电 话：</span>18284525286</p>
      </div>
    </div>
  </Service>
</template>

<style scoped lang="scss">
.contact {
  display: flex;
  flex-direction: column;
  padding: 30px;

  table {
    margin: 50px 0;

    tbody {
      tr {
        td {
          display: inline-block;
          width: 250px;
          font-size: 16px;
          color: #333;
          padding: 10px;
        }
      }
    }
  }

  .contact_way {
    display: flex;
    flex-direction: column;
    margin-top: 50px;
    font-size: 16px;
    color: #333;
    row-gap: 20px;
  }
}
</style>
