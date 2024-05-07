<script lang="ts" setup></script>

<template>
  <div class="sponsor-banner">
    <a>
      <img alt="ネクストギアーズ" src="~/assets/images/シーバー.jpg" />
    </a>
    <a>
      <img alt="くぼた眼科" src="~/assets/images/眼科.png" />
    </a>
  </div>
</template>

<style lang="scss" scoped>
@use "@/assets/scss/_breakpoint.scss" as *;

.sponsor-banner {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 60%;
  position: relative;
  left: 20%;
  margin-top: 150px;
  a {
    img {
      object-fit: contain;
      width: 220px;
      height: 60px;
      @include md {
        width: 140px;
        height: 45px;
      }
      @include sm {
        widows: 100px;
        height: 30px;
      }
    }
  }
}
</style>
