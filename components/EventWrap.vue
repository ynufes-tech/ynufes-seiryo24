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
  height: 420px;
  width: 420px;
  border-radius: 50%;
  background-color: rgba(#f6f6f6, 0.8);
  text-align: center;
  > h1 {
    margin: 20px auto;
    font-size: 24px;
    padding-top: 65px;
    width: 320px;
    @include md {
      font-size: 20px;
    }
  }
  > p {
    margin: 15px auto;
    font-size: 16px;
    width: 320px;
    @include md {
      font-size: 12px;
    }
  }
}
</style>
