<script lang="ts" setup>
import { register } from "swiper/element/bundle";

register();
</script>

<template>
  <div class="sponsor-banner">
    <swiper-container
      loop="true"
      css-mode="true"
      :autoplay="{ delay: 3000, disableOnInteraction: false }"
    >
      <swiper-slide>
        <img alt="" src="../assets/images/banner-images/banner-image1.webp" />
      </swiper-slide>
      <swiper-slide>
        <img alt="" src="../assets/images/banner-images/banner-image2.webp" />
      </swiper-slide>
    </swiper-container>
  </div>
</template>

<style lang="scss" scoped>
.sponsor-banner {
  display: flex;
  justify-content: center;
  width: 100%;

  swiper-container {
    width: 50svw;
    height: 100%;
    padding-top: 4svw;

    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
