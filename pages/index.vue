<script setup lang="ts">
definePageMeta({
  layout: "home",
});
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
      <SponsorBanner />
      <div class="table-units">
        <TableOfContents
          :title="'ABOUT'"
          :sub-title="'大学祭について'"
          :page-link="'/about'"
        />
        <TableOfContents
          :title="'EVENT'"
          :sub-title="'本部企画紹介'"
          :page-link="'/event'"
        />
        <TableOfContents
          :title="'EVENTS'"
          :sub-title="'企画団体一覧'"
          :page-link="'/events'"
        />
        <TableOfContents
          :title="'PAMPHLET'"
          :sub-title="'大学祭のパンフレット'"
          :page-link="'/pamphlet'"
        />
        <TableOfContents
          :title="'ACCESS'"
          :sub-title="'大学までのアクセス'"
          :page-link="'/access'"
        />
        <TableOfContents
          :title="'SPONSORS'"
          :sub-title="'協賛企業一覧'"
          :page-link="'/sponsor'"
        />
        <TableOfContents
          :title="'FAQ'"
          :sub-title="'よくある質問'"
          :page-link="'/faq'"
        />
        <TableOfContents
          :title="'STAFF'"
          :sub-title="'お問い合わせ'"
          :page-link="'/staff'"
        />
        <TableOfContents
          :title="'CONNECTION'"
          :sub-title="'他大学の大学祭情報'"
          :page-link="'/connection'"
        />
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@use "@/assets/scss/_breakpoint.scss" as *;

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
  margin-top: 4rem;
  margin-bottom: 4rem;
  justify-content: center;
  @include lg {
    display: flex;
    flex-direction: column;
    height: auto;
  }
}

.countdown-wrapper {
  transform: translateY(30%);
  @include lg {
    align-items: center;
    margin: auto;
    margin-bottom: 0;
    transform: translateY(5%);
  }
}

.sns-area {
  object-fit: cover;
  margin-left: 5rem;
  @include lg {
    margin: auto;
    transform: translateX(-30%);
    @include md {
      transform: scale(0.8, 0.8) translateX(-20%);
    }
  }
}

.table-units {
  margin: 0 15vw;
}
</style>
