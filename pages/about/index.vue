<script lang="ts" setup></script>

<template>
  <div class="about-page">
    <HeaderPageIcon />
    <PageTitle :title="'ABOUT'" :sub-title="'大学祭について'" />
    <div class="inner-about-page">
      <div class="tokiwa-about">
        <h1 class="child-title">・常盤祭とは</h1>
        <p>
          常盤祭は横浜国立大学の年2回の大学祭のうち、春に開催される大学祭です。
        </p>
        <p>ぜひお気軽に足を運んでみてください！</p>

        <h1 class="child-title">・開催日時</h1>
        <p>1日目：5月18日(金) 13時〜20時</p>
        <p>2日目：5月19日(土) 9時〜15時</p>
      </div>
      <div class="theme-about">
        <h1 class="child-title">・テーマについて</h1>
        <p>24清陵祭のテーマは「花瑞希」。</p>
      </div>
      <div class="committee-about">
        <h1 class="child-title">・大学祭実行委員会とは</h1>
        <p>
          年２回開催される横浜国立大学の大学祭を企画・運営しています。大学祭を楽しく安全に開催するために「年間を通して100人規模」で活動を行っています。
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
  </div>
</template>

<style lang="scss" scoped>
@use "@/assets/scss/_breakpoint.scss" as *;
// html {
//   scroll-behavior: smooth;
// }

.inner-about-page {
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
.child-title {
  font-size: 40px;
  @include md {
    font-size: 24px;
  }
  @include sm {
    font-size: 16px;
  }
}
*p {
  font-size: 32px;

  @include md {
    font-size: 20px;
  }
  @include sm {
    font-size: 12px;
  }
}
</style>
