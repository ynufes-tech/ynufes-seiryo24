<script setup lang="ts">
useHead({
  title: "Top | 24清陵祭公式HP~花瑞希~",
  meta: [
    {
      name: "description",
      content:
        "5/18,19に開催される24清陵祭 公式HPです!! 最新情報を随時更新していきます!!",
    },
  ],
});
</script>

<template>
  <div class="page-root">
    <h3 id="top-title">花瑞希</h3>
    <div class="date">
      <p>2024.05.18 Fri</p>
      <p><img class="Arrow1" src="~/assets/images/Arrow-1.webp" />05.19 Sat</p>
    </div>
    <div class="top-contents">
      <div class="shapes-units">
        <CountdownComponent/>
        <HomeSNS/>
        <SponsorBanner/>
      </div>

    </div>
  </div>
</template>

<style scoped>
#top-title {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
  width: 100%;
  font-size: min(9em, 13.5vw);
  color: var(--thick-font-color);
  transform: translateX(-10%);
  font-weight: lighter;
  letter-spacing: 0.135em;
  padding: 0;
  margin: 0;
  margin-top: min(10rem, 20vw);
}
.date {
  font-size: min(2.25em, 4.5vw);
  box-sizing: border-box;
  margin: min(5rem, 5vw) auto 0;
  width: min(45vw, 15em);
  letter-spacing: 0.1125em;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  line-height: 0.45em;
  transform: translateX(20%);
}
.Arrow1 {
  width: 2.8em;
  padding: 0;
  margin: 0 0.3em 0.1em 0.25em;
}

</style>
