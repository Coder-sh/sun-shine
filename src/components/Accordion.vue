<script setup lang="tsx">
import { ref } from 'vue'
import Vnode from '@/components/Vnode'

withDefaults(defineProps<{
  props: { title: string; content: any }
  showTopborder?: boolean
}>(), {showTopborder: true})

const isExpand = ref(false)

</script>

<template>
  <div :class="['accordion',{ top_border: showTopborder}]">
    <p
      class="title"
      @click="
        () => { 
          isExpand = !isExpand
        }
      "
    >
    <div class="red_icon"></div>
      {{ props.title }}
    <div :class="['arrow',  { arrow_down: isExpand }]"></div>
    </p>
    <div class="content" v-show="isExpand">
      <Vnode :content="props.content" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.accordion {
  line-height: 30px;
  padding: 30px 0;
  cursor: auto;

  .title {
    position: relative;
    padding: 0 60px;
    line-height: 30px;
    font-size: 16px;
    color: #333;
    cursor: pointer;

    .red_icon {
      position: absolute;
      width: 8px;
      height: 8px;
      background: #a83042;
      border-radius: 50%;
      left: 26px;
      top: 50%;
      margin-top: -4px;
    }

    .arrow {
      position: absolute;
      width: 13px;
      height: 8px;
      background-image: url(@/assets/ico_arrow.png);
      background-repeat: no-repeat;
      background-position: center;
      right: 18px;
      top: 50%;
      margin-top: -4px;
      transition: all 0.3s 0s ease-in-out;
      -webkit-transition: all 0.3s 0s ease-in-out;
      transform: rotate(-90deg);
    }
    .arrow_down {
      transform: none;
    }
  }

  .content {
    display: flex;
    flex-direction: column;
    row-gap: 30px;
    color: #333;
    overflow: hidden;
    margin-top: 10px;
    font-size: 14px;
    padding: 0 60px;
    line-height: 24px;
  }
}

.top_border {
    border-top: 1px solid #E9E9E9;
}
</style>
