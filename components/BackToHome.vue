<script lang="ts" setup></script>

<template>
  <div class="back-to-home">
    <NuxtLink to="/" class="button-script"> HOME </NuxtLink>
  </div>
</template>

<style lang="scss" scoped>
@use "@/assets/scss/_breakpoint.scss" as *;

.back-to-home {
  text-align: center;
  margin: 20px auto;
  position: relative;
  bottom: 20%;
  .button-script {
    font-size: 14px;
    text-decoration: none;
    color: #333;
    padding: 0.3em 1.2em;
    background-color: rgba(#f6f6f6, 0.8);
    border-radius: 10px;
  }
}
</style>
