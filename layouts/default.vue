<script setup lang="ts"></script>
<template>
  <div class="layout-root">
    <header-component />
    <slot />
    <img
      id="background-img"
      alt=""
      src="~/assets/images/default-background-image.webp"
    />
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
  top: 0;
  left: 0;
}

#background-img {
  object-fit: cover;
  width: 100vw;
  height: 100vh;
  z-index: -100;
  top: 0;
  position: fixed;
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
