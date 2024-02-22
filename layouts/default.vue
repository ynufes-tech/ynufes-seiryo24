<script setup lang="ts"></script>
<template>
  <div class="layout-root">
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
    <link
      href="https://fonts.googleapis.com/css2?family=Zen+Old+Mincho&display=swap"
      rel="stylesheet"
    />

    <slot />
    <FloatingButton />
  </div>
</template>
<style scoped>
.layout-root {
  background-image: url(../assets/images/default-background-image.webp);
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  min-height: 100svh;
  overflow: hidden;
  z-index: -100;
}
</style>
