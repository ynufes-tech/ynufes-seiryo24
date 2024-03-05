<script setup lang="ts">
import BackToHome from "./components/BackToHome.vue";

definePageMeta({
  layout: "default",
});

defineProps({
  error: Object,
});
</script>

<template>
  <div class="error">
    <Header />
    <HeaderPageIcon />
    <PageTitle title="ERROR" subTitle="{{ error?.statusCode }}" />
    <p class="main">お探しのページは見つかりませんでした。</p>
    <BackToHome />
  </div>
</template>

<style lang="scss">
@use "@/assets/scss/_breakpoint.scss" as *;
.main {
  width: 80%;
  margin: 40px auto;
  font-family: "Zen Old Mincho", serif;
  font-size: 32px;
  color: #333333;
  margin: 20px auto;
  text-align: center;
  @include md {
    font-size: 24px;
  }
  @include sm {
    font-size: 12px;
  }
}
</style>
