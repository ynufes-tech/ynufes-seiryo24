<script lang="ts" setup>
useHead({
  title: "Special | 24清陵祭公式HP~花瑞希~",
  meta: [
    { name: "description", content: "24清陵祭エコ企画のアンケート結果を発表！" },
  ],
});
</script>
<template>
  <div class="page-root">
    <HeaderPageIcon />
    <div class="eco-page">
      <PageTitle :title="'SPECIAL'" :sub-title="'エコ企画結果発表'" />
      <div class="inner-eco-page">
        <h2>【キャップでANSWER!! 集計結果発表】</h2>
        <div class="eco-image">
          <img src="~/assets/images/eco1.jpg">
          <img src="~/assets/images/eco2.jpg">
        </div>
        <p>24清陵祭ではエコステーション（来場者向けのゴミ箱）にて、ペットボトルキャップを使用して2択のアンケートを行いました！！</p>
        <p>それぞれの選択肢の得票数を画像にて発表しております！<br>ぜひご確認ください！！</p>
        <p>多くの方のご参加ありがとうございました！！</p>    
        <BackToHome />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "@/assets/scss/_breakpoint.scss" as *;

.inner-eco-page {
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
.eco-image{
  display: flex;
  gap: 50px;
  transform: translateX(-4%);

  width: 60%;
  min-width: 600px;
  @include md {
    flex-direction: column;
    gap: 10px;
    min-width: 300px;
  }
}
.eco-image img{
  width: 30vw;
  @include md {
    flex-direction: column;
    width: 55vw;
    min-width: 300px;
  }
}
*h2{
  text-align: center;
  font-size: calc(1.5vw + 0.6rem);
  @include md {
    font-size: 3.2vw
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

* p {
  font-size: 32px;

  @include md {
    font-size: 20px;
  }
  @include sm {
    font-size: 15px;
  }
}
</style>
