<script setup lang="ts">
import BackToHome from "./components/BackToHome.vue";
useHead({
  title: "error-page",
});
</script>

<template>
  <NuxtLayout>
    <div class="error">
      <HeaderComponent />
      <HeaderPageIcon />
      <PageTitle title="ERROR" sub-title="エラーコード：404" />
      <div class="inner-error-page">
        <p class="main">お探しのページは見つかりませんでした</p>
        <BackToHome />
      </div>
    </div>
  </NuxtLayout>
</template>

<style lang="scss" scoped>
@use "@/assets/scss/_breakpoint.scss" as *;
.inner-error-page {
  position: relative;
  top: 200px;
  @include md {
    top: 180px;
  }
  @include sm {
    top: 120px;
  }
}
.main {
  width: 70%;
  font-size: 32px;
  color: #333333;
  text-align: center;
  margin: 30% auto 5%;
  @include md {
    font-size: 20px;
  }
  @include sm {
    font-size: 12px;
  }
}
</style>
