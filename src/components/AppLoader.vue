<template>
  <Transition appear>
    <div class="root">
      <div class="heading">Loading...</div>
    </div>
  </Transition>
</template>

<script setup></script>

<style lang="scss" scoped>
@use "../assets/styles/variables.scss";

.root {
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(variables.$white, 0.8);
}

.heading {
  font-size: 28px;
  font-weight: 700;
}
</style>
