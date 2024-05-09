<script lang="ts" setup></script>
<template>
  <div class="page-root">
    <div class="faq-page">
      <HeaderPageIcon />
      <PageTitle :title="'FAQ'" :sub-title="'よくある質問'" />
      <div class="inner-faq-page">
        <div class="section-wrapper">
          <div class="question-wrapper">
            <p class="question-number">Q.</p>
            <p class="question-content">落とし物や迷子の相談は？</p>
          </div>
          <div class="answer-wrapper">
            <p class="answer-number">A.</p>
            <p class="answer-content">
              お近くのＳＴＡＦＦジャンパーを着た大学祭実⾏委員にお声がけいただくか、本部(経営学部1号館108教室)まお越しください。場所はキャンパスマップ(パンフレットp.3-4)をご参照ください。
            </p>
          </div>
        </div>
        <div class="section-wrapper">
          <div class="question-wrapper">
            <p class="question-number">Q.</p>
            <p class="question-content">清陵祭期間中、生協や食堂は使える？</p>
          </div>
          <div class="answer-wrapper">
            <p class="answer-number">A.</p>
            <p class="answer-content">
              第１食堂では屋内飲食が可能ですが、食堂の営業はございません。また、第２食堂・⽣協は終⽇営業しておりません。
            </p>
          </div>
        </div>
        <div class="section-wrapper">
          <div class="question-wrapper">
            <p class="question-number">Q.</p>
            <p class="question-content">雨が降ったとき企画はどうなる？</p>
          </div>
          <div class="answer-wrapper">
            <p class="answer-number">A.</p>
            <p class="answer-content">
              企画場所が変更または中⽌となる場合がございます。詳しくはタイムテーブル(パンフレットp.7-8)、イベント＆ステージ(パンフレットp.9-10)をご確認ください。
            </p>
          </div>
        </div>
        <div class="section-wrapper">
          <div class="question-wrapper">
            <p class="question-number">Q.</p>
            <p class="question-content">最寄り駅・バス停への行き方は？</p>
          </div>
          <div class="answer-wrapper">
            <p class="answer-number">A.</p>
            <p class="answer-content">
              アクセスマップ(パンフレットp.29)をご参照ください。
            </p>
          </div>
        </div>
        <div class="section-wrapper">
          <div class="question-wrapper">
            <p class="question-number">Q.</p>
            <p class="question-content">具合が悪くなったら？</p>
          </div>
          <div class="answer-wrapper">
            <p class="answer-number">A.</p>
            <p class="answer-content">
              お近くの大学祭実⾏委員にお声がけいただくか、本部までお越しください。混乱を避けるため、救急⾞の手配は実⾏委員が⾏います。
            </p>
          </div>
        </div>
        <div class="section-wrapper">
          <div class="question-wrapper">
            <p class="question-number">Q.</p>
            <p class="question-content">災害が発生した場合は？</p>
          </div>
          <div class="answer-wrapper">
            <p class="answer-number">A.</p>
            <p class="answer-content">
              大学祭実⾏委員の指⺬に従い、お近くの避難場所へ避難してください。避難場所は理⼯学系研究図書館付近、野外⾳楽堂、都市科学部棟裏です。場所はキャンパスマップ(パンフレットp.3-4)をご参照ください。
            </p>
          </div>
        </div>
        <p>
          その他お困りの際は、近くにいるＳＴＡＦＦと書かれたジャンパー・Ｔシャツを着ている大学祭実⾏委員にお聞きいただくか、本部にお越しください。
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "@/assets/scss/_breakpoint.scss" as *;

.inner-faq-page {
  position: relative;
  top: 500px;
  left: 20%;
  width: 60%;
  padding-bottom: 20%;
  @include md {
    top: 350px;
  }
  @include sm {
    top: 250px;
  }
}

.section-wrapper {
  display: flex;
  flex-direction: column;
  margin-top: 50px;
  @include md {
    margin-top: 40px;
  }
  @include sm {
    margin-top: 30px;
  }
}

.question-wrapper,
.answer-wrapper {
  display: flex;
  flex-direction: row;
  margin-bottom: 30px;
  @include md {
    flex-direction: column;
    margin-bottom: 20px;
  }
  @include sm {
    margin-bottom: 10px;
  }
}

.question-number,
.answer-number {
  margin: 0 40px;
  height: fit-content;
  width: fit-content;
  @include md {
    margin: 0 0;
  }
}

.question-content,
.answer-content {
  height: fit-content;
  width: fit-content;
  margin: 0 0;
}

* p {
  font-size: 28px;
  @include md {
    font-size: 20px;
  }
  @include sm {
    font-size: 12px;
  }
}
</style>
