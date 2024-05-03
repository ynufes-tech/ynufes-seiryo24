<script setup lang="ts">
import BackToHome from "../components/BackToHome.vue";
useHead({
  title: "preparation-page",
});
</script>

<template>
  <NuxtLayout>
    <div class="preparation">
      <HeaderComponent />
      <HeaderPageIcon />
      <PageTitle title="PREPARATION" sub-title="このページは準備中です" />
      <div class="inner-preparation-page">
        <p class="main">このページは準備中です。</p>
        <p class="main">更新をお待ちください。</p>
        <BackToHome />
      </div>
    </div>
  </NuxtLayout>
</template>

<style lang="scss" scoped>
@use "@/assets/scss/_breakpoint.scss" as *;
.inner-preparation-page {
  position: relative;
  top: 500px;
  left: 20%;
  width: 60%;
  @include md {
    top: 350px;
  }
  @include sm {
    top: 250px;
  }
}
.main {
  font-size: 32px;
  color: #333333;
  text-align: center;
  margin: 0 auto 5%;
  @include md {
    font-size: 20px;
  }
  @include sm {
    font-size: 12px;
  }
}
</style>
