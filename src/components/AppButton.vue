<template>
  <el-button type="primary" v-if="!circle" class="btn">{{ text }}</el-button>
  <el-button type="primary" v-else :icon="icon" circle class="circle" />
</template>

<script setup>
const props = defineProps({
  text: {
    type: String,
    default: "",
  },

  circle: {
    type: Boolean,
    default: false,
  },
  icon: {
    type: String,
    default: "",
  },
});
</script>

<style lang="scss" scoped>
@use "@/assets/styles/variables.scss";

.btn {
  background-color: variables.$violet;
  border-radius: 4px;
  padding: 20px 24px;
  font-size: 16px;
}

.circle {
  background-color: variables.$violet;
  font-size: 16px;
}
</style>
