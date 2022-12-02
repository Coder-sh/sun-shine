<script setup lang="ts">
withDefaults(
  defineProps<{
    title: { zh: string; en: string }
    selectTab?: number
  }>(),
  { selectTab: 0 }
)
</script>

<template></template>

<style scoped></style>
