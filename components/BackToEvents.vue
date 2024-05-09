<script lang="ts" setup></script>

<template>
  <div class="back-to-events">
    <NuxtLink to="/events" class="button-script"> 企画一覧に戻る </NuxtLink>
  </div>
</template>

<style lang="scss" scoped>
@use "@/assets/scss/_breakpoint.scss" as *;

.back-to-events {
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
