<script lang="ts" setup>
import events from "assets/data/events.json";
definePageMeta({
  layout: "event-layout",
});
useHead({
  title: "events | 24清陵祭公式HP~花瑞希~",
  meta: [
    {
      name: "description",
      content: "5/18,19に開催される24清陵祭の企画一覧です",
    },
  ],
});
</script>
<template>
  <div class="page-root">
    <HeaderPageIcon />
    <HeaderComponent />
    <div class="events-page">
      <PageTitle :title="'EVENTS'" :sub-title="'企画一覧'" />
      <div class="inner-events-page">
        <div class="events-list">
          <NuxtLink
            v-for="event in events"
            :key="event.id"
            :to="`/events/${event.id}`"
            class="events-elements"
          >
            <EventsComponent :event-data="event" />
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "@/assets/scss/_breakpoint.scss" as *;

.inner-events-page {
  position: relative;
  top: 500px;
  left: 20%;
  width: 60%;
  @include md {
    top: 350px;
  }
  @include sm {
    top: 250px;
  }
}
.events-list {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  width: 75svw;

  .events-elements {
    width: 25svw;
    min-width: 300px;
    max-width: 400px;
    height: 35svh;
    min-height: 275px;
    max-height: 300px;
    text-decoration: none;
    color: #333333;
    @include md {
      min-width: 180px;
      max-width: 300px;
      max-height: 256px;
      min-height: 160px;
    }
  }
}
</style>
