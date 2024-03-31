<script setup lang="ts">
import { onMounted } from "vue";

onMounted(() => {
  document.body.style.margin = "0";
});
</script>
<template>
  <div class="layout-root">
    <header-component />
    <slot />
    <div class="background-container"></div>
    <FloatingButton />
  </div>
</template>
<style scoped lang="scss">
.layout-root {
  font-family: "Zen Old Mincho", sans-serif;
  color: #333333;
  position: relative;
  margin: 0;
  padding: 0;
  .navigation-menu {
      text-align: right;
    }
}
.background-container {
  background-image: url(~/assets/images/default-background-image.webp);
  background-size: cover;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: -100;
  position: absolute;
  min-height: 100vh;
  overflow: hidden;
  margin: 0;
}
</style>
