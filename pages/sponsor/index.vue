<script lang="ts" setup></script>
<template>
  <div class="page-root">
    <div class="sponsors-title">
      <PageTitle :title="'SPONSOR'" :sub-title="'協賛企業一覧'" />
    </div>
    <div class="inner-sponsors-page">
      <div class="sponsors-about-contents">
        <p class="text">
          「24清陵祭」を開催するにあたり、多くの企業の皆様より多大なご協力を賜りました。この場をお借りいたしまして、心より感謝申し上げます。
        </p>
        <p class="text">
          ご協賛いただきました企業を以下に掲載させていただきます。
        </p>
      </div>
      <div class="sponsors-list">
        <div class="sponsor-group"><h1>・広告協賛</h1></div>
        <div class="sponsor-group"><h1>・物品協賛</h1></div>
        <div class="sponsor-group"><h1>・個人協賛</h1></div>
        <div class="sponsor-group"><h1>・寄付</h1></div>
        <div class="sponsor-group"><h1>・ミスコン協賛</h1></div>
        <div class="sponsor-group"><h1>・その他のご協賛</h1></div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.page-title {
  transform: translateY(-70%);
  float: left;
}
.inner-sponsors-page {
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1024px;
  margin: 0 auto;
  padding-top: calc(3rem + max(4rem, 16vw));
}
.sponsors-about-contents {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 4em;

  .text {
    width: min(90vw, 35em);
    color: var(--thick-font-color);
    line-height: 1.5em;
    font-size: calc(1vw + 0.8rem);
  }
}
.sponsors-list {
  *h1 {
    margin-left: 5%;
  }
}
</style>
