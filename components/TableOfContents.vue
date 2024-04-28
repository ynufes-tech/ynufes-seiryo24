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
    <NuxtLink :to="props.pageLink" @click="toggle"
      ><h1>{{ props.title }}</h1>
      <h2>{{ props.subTitle }}</h2>
      <div class="view-more">
        View More <img class="arrow2" src="~/assets/images/Arrow-2.webp" /></div
    ></NuxtLink>
  </div>
  <hr size="1px" color="#333333" />
</template>
<style lang="scss" scoped>
@use "@/assets/scss/_breakpoint.scss" as *;
.table-of-contents {
  display: flex;
  flex-direction: column;
  line-height: 2.5rem;
  > a {
    text-decoration: none;
    color: inherit;
  }
  @include md {
    line-height: 1.5rem;
  }
  @include sm {
    line-height: 1rem;
  }
}
*h1 {
  font-size: 3rem;
  letter-spacing: 0.135em;
  transform: translateY(150%);
  @include md {
    font-size: 2rem;
  }
  @include sm {
    font-size: 1.5rem;
  }
}
*h2 {
  transform: translateY(130%);
  font-size: 1.6rem;
  letter-spacing: 0.06em;
  @include md {
    font-size: 1.2rem;
  }
  @include sm {
    font-size: 0.8rem;
  }
}
.view-more {
  text-align: right;
  margin-right: 3rem;
  transform: translateY(-60%);
  font-size: 2rem;
  letter-spacing: 0.05em;
  @include lg {
    color: rgba(255, 255, 255, 0);
    .arrow2 {
      width: 2.5rem;
      transform: translateY(60%);
    }
  }
}
</style>
