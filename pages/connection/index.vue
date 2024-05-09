<script lang="ts" setup></script>
<template>
  <div class="page-root">
    <div class="connection-page">
      <PageTitle :title="'CONNECTION'" :sub-title="'他大学の大学祭'" />
      <div class="inner-connection-page">
        <div class="connection-about">
          <p>当ホームページは学生団体によって作成されています。</p>
          <p>他大学の学生団体制作の、大学祭ホームページを掲載します。</p>
        </div>
        <div class="connection-list">
          <h1 class="child-title">調布祭</h1>
          <p>電気通信大学調布祭実行委員会</p>
          <p>開催日：11月22日（金）〜24日（日）</p>
          <a href="https://www.chofusai.jp/"
            >ホームページURL：https://www.chofusai.jp/</a
          >
        </div>
        <BackToHome />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "@/assets/scss/_breakpoint.scss" as *;

.inner-connection-page {
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
  font-size: 24px;
  width: fit-content;
  border-bottom: solid 2px #333;
  @include md {
    font-size: 18px;
  }
  @include sm {
    font-size: 12px;
  }
}

.connection-list {
  background-color: rgba(#f6f6f6, 0.6);
  border-radius: 20px;
  padding: 30px 40px;
  @include md {
    padding: 20px 30px;
  }
  @include sm {
    padding: 15px 20px;
  }
}

* p {
  font-size: 24px;

  @include md {
    font-size: 18px;
  }
  @include sm {
    font-size: 12px;
  }
}

* a {
  font-size: 24px;

  @include md {
    font-size: 18px;
  }
  @include sm {
    font-size: 12px;
  }
}
</style>
