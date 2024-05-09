<script lang="ts" setup></script>
<template>
  <div class="page-root">
    <div class="staff-page">
      <PageTitle :title="'STAFF'" :sub-title="'お問い合わせ'" />
      <HeaderPageIcon />
      <div class="inner-staff-page">
        <div class="staff-about">
          <p>当ホームページに興味を持っていただきありがとうございます。</p>
          <p>お問い合わせに関しましては、メールにてお願いします。</p>
        </div>
        <div class="mail-announce">
          <h1 class="child-title">メールでのお問い合わせ</h1>
          <p>メールアドレス：24seiryo.soumu@gmail.com</p>
          <p>
            お問い合わせいただく場合は、本文にお名前とお問い合わせ内容の記入を忘れずにお願いします。
          </p>
          <p>お問い合わせ内容を確認後、担当者より連絡させていただきます。</p>
        </div>
        <BackToHome />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "@/assets/scss/_breakpoint.scss" as *;

.inner-staff-page {
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

.mail-announce {
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
</style>
