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
      <p>2024.05.18 Sat</p>
      <p><img class="arrow1" src="~/assets/images/Arrow-1.webp" />05.19 Sun</p>
    </div>
    <div class="top-contents">
      <div class="circle-units">
        <CountdownComponent />
        <HomeSNS />
      </div>
      <div class="table-units">
        <TableOfContents
          :title="'ABOUT'"
          :sub-title="'大学祭について'"
          :page-link="'/about'"
        />
        <TableOfContents
          :title="'EVENT'"
          :sub-title="'本部企画紹介'"
          :page-link="'/events'"
        />
        <TableOfContents
          :title="'EVENTS'"
          :sub-title="'企画団体一覧'"
          :page-link="''"
        />
        <TableOfContents
          :title="'MAP&amp;PAMPHLET'"
          :sub-title="'大学祭のマップ&amp;パンフレット'"
          :page-link="'/pamphlet'"
        />
        <TableOfContents
          :title="'TIME-SCHEDULE'"
          :sub-title="'企画タイムスケジュール'"
          :page-link="'/time-schedule'"
        />
        <TableOfContents
          :title="'ACCESS'"
          :sub-title="'大学までのアクセス'"
          :page-link="'/access'"
        />
        <TableOfContents
          :title="'SPONSORS'"
          :sub-title="'協賛企業一覧'"
          :page-link="'/sponsors'"
        />
        <TableOfContents
          :title="'FAQ'"
          :sub-title="'よくある質問'"
          :page-link="'/faq'"
        />
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@use "@/assets/scss/_breakpoint.scss" as *;
.page-root {
  box-sizing: border-box;
  // padding: 0 15vw;
  // @include md {
  //   padding: 0 5vw;
  // }
  // @include sm {
  //   padding: 0 2vw;
  // }
}

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
.arrow1 {
  width: 2.8em;
  padding: 0;
  margin: 0 0.3em 0.1em 0.25em;
}
.circle-units {
  display: flex;
  // height: auto;
  // margin-top: 4rem;
  justify-content: center;
  @include lg {
    display: flex;
    flex-direction: column;
    height: auto;
    // justify-content: center;
    // margin: auto;
  }
}
.countdown-wrapper {
  transform: translateY(30%);
  // transform: scale(80%);
  @include lg {
    // justify-content: center;
    align-items: center;
    // height: auto;
    // box-sizing: border-box;
    margin: auto;
    transform: translateY(5%);
  }
  
}
.sns-area {
  // transform: translateX(10%);
  object-fit: cover;
  margin-left: 5rem;
  @include lg{
    // padding: 3rem;
    margin: auto;
    transform: translateX(-30%);
    @include md{
      transform: scale(0.8,0.8) translateX(-20%);
      // transform: translateX(-30%);
    }
  }
}
.top-contents {
  margin-bottom: 10rem;
}
.table-units {
  margin: 0 15vw;
}
</style>
