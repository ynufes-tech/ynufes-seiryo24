<script setup lang="ts"></script>
<template>
  <div class="layout-root">
    <slot />
    <FloatingButton />
  </div>
</template>
<style scoped lang="scss">
.layout-root {
  background-image: url(~/assets/images/default-background-image.webp);
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  min-height: 100svh;
  overflow: hidden;
  z-index: -100;
  background-size: cover;
  font-family: "Zen Old Mincho", sans-serif;
}
</style>
