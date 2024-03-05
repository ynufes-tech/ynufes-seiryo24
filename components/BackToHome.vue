<script lang="ts" setup></script>

<template>
  <div class="back-to-home">
    <NuxtLink to="/" class="button"> HOME </NuxtLink>
  </div>
</template>

<style lang="scss" scoped>
.back-to-home {
  text-align: center;
  display: block;
  margin: 0 auto;
  position: relative;
  bottom: 20%;
}
.button {
  font-size: 24px;
  font-family: "Zen Old Mincho", serif;
  text-decoration: none;
  padding: 0.3em 1.2em;
  color: #333333;
  background-color: rgba($color: #f6f6f6, $alpha: 0.8);
  border-radius: 10px;
}
</style>
