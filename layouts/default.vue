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
    <div class="background-container">
      <div class="background-img"></div>
    </div>
    <FloatingButton />
  </div>
</template>
<style scoped lang="scss">
.layout-root {
  font-family: "Zen Old Mincho", sans-serif;
  color: #333333;
  position: relative;
  // margin: 0;
  // padding: 0;
  .navi-menu {
    text-align: right;
    width: 100vw;
    height: 100vh;
  }
}
.background-container {
  min-height: 100vh;
  // overflow: hidden;

  // width: 100vw;
  // height: 100vh;
  // position: relative;
}
.background-img {
  background-image: url(~/assets/images/default-background-image.webp);
  background-size: cover;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: -100;
  position: absolute;
  margin: 0;
}
</style>
