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
  pageLink: {
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
      <NuxtLink to="{{ props.pageLink }}" @click="toggle"
        >View More <img class="Arrow2" src="~/assets/images/Arrow-2.webp"
      /></NuxtLink>
      
    </div>
  </div>
  <hr size="1px" color="#333333" />
</template>
<style lang="scss" scoped>
.view-more{
  text-align: right;
  text-decoration-line: none;
}
</style>
