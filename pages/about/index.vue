<script lang="ts" setup></script>

<template>
  <div class="about-page">
    <div class="about-title"></div>
    <div class="inner-about-page">
      <div class="page-title">
        <PageTitle :title="'ABOUT'" :subTitle="'大学祭について'" />
      </div>
      <div class="tokiwa-about">
        <h1 class="child-title">常盤祭とは</h1>
        <p>
          常盤祭は横浜国立大学の年2回の大学祭のうち、春に開催される大学祭です。
        </p>
        <p>ぜひお気軽に足を運んでみてください！</p>

        <h1 class="child-title">開催日時</h1>
        <p>1日目：5月18日(金) 13時〜20時</p>
        <p>2日目：11月4日(土) 9時〜15時</p>
      </div>
      <div class="theme-about">
        <h1 class="child-title">テーマについて</h1>
        <p>24清陵祭のテーマは「花瑞希」。</p>
      </div>
      <div class="committee-about">
        <h1 class="child-title">大学祭実行委員会とは</h1>
        <p>
          年２回開催される横浜国立大学の大学祭を企画・運営しています。大学祭を楽しく安全に開催するために年間を通して100人規模で活動を行っています。
        </p>
        <p>
          大学祭実行委員会は、7つの部局と4つの部会で構成されています。部局は「会場・企画・技術・経理・総務・物品・編集」、部会は「協賛・広報・新歓・ミスコン」に分かれています。
        </p>
        <p>
          大学祭の開催にあたっては、数多くのサークル・団体や、協賛企業様などにご助力頂いております。
        </p>
        <p>
          実行委員会では、より良い大学祭を共に築き上げていくパートナーとして、ご協賛いただける企業様を募集しております。
        </p>
      </div>
    </div>
    <div class="spacer"></div>
  </div>
</template>

<style lang="scss" scoped>
html {
  scroll-behavior: smooth;
}
*p {
  font-size: min(1.4em, 4vw);
  margin: 0.5rem 1.3rem;
}
.inner-about-page {
  width: min(1024px, 100vw);
  margin: 0 auto;
}
.about-page {
  overflow: auto;
}
.page-title {
  transform: translateY(-70%);
  float: left;
}
.tokiwa-about {
  padding-top: max(12rem, 22vw);
}

.child-title {
  color: #575f6a;
  font-size: 2rem;
  font-weight: bold;
  margin: 0.75em 0 0.75em 5%;
}
.dashed-line {
  border: none;
  width: 90%;
  margin: 1.2rem auto;
}
.section-paragraph {
  width: 90%;
  margin: 1rem auto;
}

.spacer {
  width: 100%;
  height: 120px;
}
</style>
