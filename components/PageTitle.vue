<script lang="ts" setup>
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  subTitle: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="page-title">
    <h1>{{ props.title }}</h1>
    <h2>{{ props.subTitle }}</h2>
  </div>
</template>

<style lang="scss" scoped>
@use "@/assets/scss/_breakpoint.scss" as *;
.page-title {
  font-family: "Zen Old Mincho", serif;
  margin: 0 auto;
  position: absolute;
  top: 225px;
  left: 15%;
  @include md {
    top: 175px;
  }
  @include sm {
    top: 125px;
  }
  > h1 {
    margin: 0 auto;
    font-size: 150px;
    font-weight: 700;
    width: fit-content;
    color: #f6f6f6;
    opacity: 0.4;
    @include md {
      font-size: 94px;
    }
    @include sm {
      font-size: 64px;
    }
  }
  > h2 {
    margin: 0 auto;
    font-size: 40px;
    color: #333333;
    position: absolute;
    top: 50%;
    left: 10%;
    width: fit-content;
    @include md {
      font-size: 28px;
    }
    @include sm {
      font-size: 18px;
    }
  }
}
</style>
