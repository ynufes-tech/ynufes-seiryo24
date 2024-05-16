<script setup lang="ts"></script>
<template>
  <div class="layout-root">
    <header-component />
    <NaviMenu />
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
  margin: 0;
  padding: 0;
  .navi-menu {
    text-align: right;
  }
}
.background-container {
  overflow: hidden;

  width: 98vw;
  height: 100vh;
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
  overflow: hidden;
  margin: 0;
}
</style>
<style lang="scss">
body {
  margin: 0;
  padding: 0;
}
</style>
