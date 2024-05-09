<script lang="ts" setup></script>

<template>
  <div class="header-page-icon">
    <div class="page-icon-wrapper">
      <NuxtLink class="page-icon" to="/about">
        <img src="~/assets/images/pageIcon/about.png" />
        <span class="hover-icon">about</span>
      </NuxtLink>
      <NuxtLink class="page-icon" to="/preparation">
        <img src="~/assets/images/pageIcon/event.png" />
        <span class="hover-icon">event</span>
      </NuxtLink>
      <NuxtLink class="page-icon" to="/preparation">
        <img src="~/assets/images/pageIcon/events.png" />
        <span class="hover-icon">events</span>
      </NuxtLink>
      <NuxtLink class="page-icon" to="/pamphlet">
        <img src="~/assets/images/pageIcon/pamphlet.png" />
        <span class="hover-icon">pamphlet</span>
      </NuxtLink>
      <NuxtLink class="page-icon" to="/preparation">
        <img src="~/assets/images/pageIcon/time-schedule.png" />
        <span class="hover-icon">time-schedule</span>
      </NuxtLink>
      <NuxtLink class="page-icon" to="/access">
        <img src="~/assets/images/pageIcon/access.png" />
        <span class="hover-icon">access</span>
      </NuxtLink>
      <NuxtLink class="page-icon" to="/preparation">
        <img src="~/assets/images/pageIcon/sponsors.png" />
        <span class="hover-icon">sponsors</span>
      </NuxtLink>
      <NuxtLink class="page-icon" to="/preparation">
        <img src="~/assets/images/pageIcon/faq.png" />
        <span class="hover-icon">faq</span>
      </NuxtLink>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "@/assets/scss/_breakpoint.scss" as *;
.header-page-icon {
  display: flex;
}

.page-icon-wrapper {
  display: flex;
  position: fixed;
  top: 3%;
  right: 5%;
  align-items: center;
  font-family: "Zen Old Mincho", serif;
  color: #333333;
  @include md {
    display: none;
  }
  .page-icon {
    position: relative;
    margin: 0 10px;
  }
  .page-icon:hover .hover-icon {
    display: inline;
  }
  .hover-icon {
    color: #333333;
    position: absolute;
    display: none;
    padding: 2px;
    background-color: rgba(246, 246, 246, 0.6);
    width: fit-content;
    left: 30%;
    top: 100%;
    margin-top: 12px;
    font-size: 28px;
  }
  .hover-icon:after {
    border-bottom: 12px solid rgba(246, 246, 246, 0.6);
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    top: -12px;
    left: 5%;
    content: "";
    position: absolute;
  }
}
</style>
