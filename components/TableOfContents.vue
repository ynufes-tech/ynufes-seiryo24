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
  <div class="table-of-contents">
    <h1>{{ props.title }}</h1>
    <h2>{{ props.subTitle }}</h2>
    <div class="view-more">
      <a>View More <img class="Arrow2" src="~/assets/images/Arrow-2.webp" /></a>
    </div>
  </div>
  <hr />
</template>
<style lang="scss" scoped></style>
