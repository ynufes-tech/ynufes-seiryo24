<script lang="ts" setup></script>

<template>
  <div class="back-to-home">
    <NuxtLink to="/"> HOME </NuxtLink>
  </div>
</template>

<style lang="scss" scoped>
.back-to-home {
  text-align: center;
  display: block;
  margin: 0 auto;
  position: relative;
  bottom: 20%;
  > a {
    font-size: 24px;
    font-family: "Zen Old Mincho", serif;
    text-decoration: none;
    padding: 0.3em 1.2em;
    color: #333333;
    background-color: rgba(#f6f6f6, 0.8);
    border-radius: 10px;
  }
}
</style>
