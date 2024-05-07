<script lang="ts" setup>
useHead({
  title: "Sponsor | 24清陵祭公式HP~花瑞希~",
  meta: [
    { name: "description", content: "24清陵祭のご協賛団体、個人の一覧です" },
  ],
});
</script>
<template>
  <div class="sponsors-page">
    <HeaderPageIcon />
    <PageTitle :title="'SPONSOR'" :sub-title="'協賛企業一覧'" />
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
        <div class="sponsor-group">
          <h1 class="list-title">・広告協賛</h1>
          <ul>
            <li>JOINUS</li>
            <li>オーラルプラン歯科クリニック</li>
            <li>株式会社安藤スポーツ</li>
            <li>株式会社カレッジヤード</li>
            <li>株式会社ジェイ・ブロード</li>
            <li>株式会社ソフィアアカデミー</li>
            <li>株式会社ねぎしフードサービス</li>
            <li>株式会社ロフトシステムズ</li>
            <li>珈琲の店MA</li>
            <li>小林内科・循環器クリニック</li>
            <li>昭和建設株式会社</li>
            <li>食品館あおば</li>
            <li>ときた内科クリニック</li>
            <li>常盤台地区連合町内会</li>
            <li>トラベルクリニック新横浜</li>
            <li>ネクストギアーズ株式会社</li>
            <li>羽沢くぼた眼科</li>
            <li>ファミーユデンタルクリニック</li>
            <li>ユニゾン英語学院</li>
            <li>横浜モアーズ</li>
          </ul>
        </div>
        <div class="sponsor-group">
          <h1 class="list-title">・物品協賛</h1>
          <ul>
            <li>HARIO株式会社</li>
            <li>TAC株式会社</li>
            <li>アンカー・ジャパン株式会社</li>
            <li>イオンシネマみなとみらい</li>
            <li>春日井製菓株式会社</li>
            <li>株式会社ウイッシュボン</li>
            <li>株式会社ウエニ貿易</li>
            <li>株式会社デルタインターナショナル</li>
            <li>株式会社ニュートン（パセラリゾーツ）</li>
            <li>株式会社ミツヱ</li>
            <li>鎌倉まめや</li>
            <li>カラオケの鉄人</li>
            <li>記念艦「三笠」</li>
            <li>公益財団法人 戸栗美術館</li>
            <li>コヤマドライビングスクール横浜校</li>
            <li>シーラン株式会社</li>
            <li>箱根ガラスの森美術館</li>
            <li>宮田製菓株式会社</li>
            <li>明治神宮外苑 聖徳記念絵画館</li>
            <li>横須賀美術館</li>
            <li>横浜国立大学生活協同組合</li>
          </ul>
        </div>
        <div class="sponsor-group">
          <h1 class="list-title">・ブース協賛</h1>
          <ul>
            <li>MONOVATE株式会社</li>
            <li>医療法人社団 伊純会 介護老人保健施設スカイ</li>
            <li>株式会社アットヨコハマ</li>
            <li>株式会社ミニミニ神奈川 横浜西口店</li>
            <li>株式会社LOOP</li>
          </ul>
        </div>
        <div class="sponsor-group">
          <h1 class="list-title">・寄付</h1>
          <ul>
            <li>経済・経営学部、社会科学系大学院 同窓会 富丘会</li>
            <li>有限会社現代不動産</li>
            <li>横浜銀行和田町支店</li>
          </ul>
        </div>
        <p class="end-text">※五十音順、敬称略</p>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@use "@/assets/scss/_breakpoint.scss" as *;

.sponsor-page {
  position: relative;
  align-items: center;
  display: flex;
  flex-direction: column;
}

.inner-sponsors-page {
  position: relative;
  top: 500px;
  left: 20%;
  width: 60%;
  display: flex;
  flex-direction: column;
  height: fit-content;
  padding-bottom: 20%;
  @include md {
    top: 300px;
  }
  @include sm {
    top: 200px;
  }

  .text {
    font-size: 28px;
    @include md {
      font-size: 20px;
    }
    @include sm {
      font-size: 12px;
    }
  }
}

.sponsor-group {
  margin: 20px 0;

  > ul {
    list-style-type: none;

    > li {
      width: fit-content;
      font-size: 28px;
      @include md {
        font-size: 20px;
      }
      @include sm {
        font-size: 12px;
      }
    }
  }
}

.list-title {
  font-size: 36px;
  @include md {
    font-size: 28px;
  }
  @include sm {
    font-size: 20px;
  }
}

.end-text {
  font-size: 28px;
  text-align: right;
  @include md {
    font-size: 20px;
  }
  @include sm {
    font-size: 12px;
  }
}
</style>
