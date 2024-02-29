<script setup lang="ts">
useHead({
  title: "Top | 24清陵祭公式HP~花瑞希~",
  meta: [
    {
      name: "description",
      content: "5/18,19に開催される24清陵祭 公式HPです!! 最新情報を随時更新していきます!!",
    },
  ],
});
</script>

<template>
  <div class="page-root">
    <h3 id="top-title">花瑞希</h3>
    <div class="date">
      <p>2024.05.18 Fri</p>
      <p><img class="Arrow1" src="~assets/images/Arrow-1.webp" />05.19 Sat</p>
    </div>
    <div class="preannounce-info">
      <p>ページは随時更新していきます。</p>
      <p>少々お待ちください。</p>
    </div>
  </div>
</template>

<style scoped>
#top-title {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: min(32vw, 70vh);
  margin-top: 0;
  font-size: min(12em, 18vw);
  color: var(--thick-font-color);
  transform: translateX(-10%);
  font-weight: lighter;
  letter-spacing: 0.18em;
  margin: 0;
}
.date {
  font-size: min(2.5em, 6vw);
  box-sizing: border-box;
  margin: 0 auto;
  width: min(60vw, 20em);
  letter-spacing: 0.1em;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  line-height: 0.6em;
}
.Arrow1 {
  width: 2.5em;
  padding: 0;
  margin: 0 0.5em 0.1em 0.3em;
}
.preannounce-info {
  font-size: min(3em, 5vw);
  box-sizing: border-box;
  margin: auto;
  margin-top: max(3em, 10vh);
  width: min(80vw, 20em);
  justify-content: center;
  flex-direction: column;
  text-align: center;
  line-height: 0.3em;
}
</style>
