<script lang="ts" setup></script>

<template>
  <div class="sponsor-banner">
    <a href="" target="_blank">
      <img alt="" src="../assets/images/banner-images/banner-image1.webp" />
    </a>
    <a href="" target="_blank">
      <img alt="" src="../assets/images/banner-images/banner-image2.webp" />
    </a>
  </div>
</template>

<style lang="scss" scoped>
.sponsor-banner {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 70%;

  a {
    margin: 15px 25px;

    img {
      object-fit: contain;
    }
  }
}
</style>
