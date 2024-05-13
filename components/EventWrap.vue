<script lang="ts" setup>
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  mainscript: {
    type: String,
    required: true,
  },
  place: {
    type: String,
    required: true,
  },
  day: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="event-wrap">
    <h1>{{ props.title }}</h1>
    <p>{{ props.mainscript }}</p>
    <p>{{ props.place }}</p>
    <p>{{ props.day }}</p>
  </div>
</template>

<style lang="scss" scoped>
@use "@/assets/scss/_breakpoint.scss" as *;
.event-wrap {
  height: 460px;
  width: 460px;
  border-radius: 50%;
  background-color: rgba(#f6f6f6, 0.8);
  text-align: center;
  @include md {
    height: 380px;
    width: 380px;
  }
  @include sm {
    height: 300px;
    width: 300px;
  }
  > h1 {
    margin: 20px auto;
    font-size: 20px;
    padding-top: 70px;
    width: 460px;
    @include md {
      font-size: 16px;
      width: 380px;
      padding-top: 60px;
      margin: 15px auto;
    }
    @include sm {
      width: 300px;
      font-size: 12px;
      padding-top: 50px;
      margin: 12px auto;
    }
  }
  > p {
    margin: 15px auto;
    font-size: 16px;
    width: 380px;
    padding: 0 30px;
    white-space: pre-wrap;
    @include md {
      font-size: 14px;
      width: 340px;
      padding: 0 20px;
    }
    @include sm {
      width: 270px;
      font-size: 10px;
      padding: 0 15px;
    }
  }
}
</style>
