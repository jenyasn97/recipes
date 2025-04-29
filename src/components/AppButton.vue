<template>
  <el-button type="primary" class="btn">{{ text }}</el-button>
</template>

<script setup>
const props = defineProps({
  text: {
    type: String,
    default: "",
  },
});
</script>

<style lang="scss" scoped>
@import "@/assets/styles/index.scss";
.btn {
  background-color: $violet;
  border-radius: 4px;
  padding: 20px 24px;
  font-size: 16px;
}
</style>
