<script lang="ts" setup>
useHead({
  title: "Access | 24清陵祭公式HP~花瑞希~",
  meta: [
    {
      name: "description",
      content: "大学までのアクセスについてご案内しています。",
    },
  ],
});
</script>

<template>
  <div class="access-page">
    <HeaderPageIcon />
    <PageTitle title="ACCESS" sub-title="大学までのアクセス" />
    <div class="inner-access-page">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3249.2531241828697!2d139.58826227605002!3d35.473280572655035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601859679ea21c77%3A0x28d72ba15dae9e6c!2sYokohama%20National%20University!5e0!3m2!1sen!2sjp!4v1710676695264!5m2!1sen!2sjp"
        width="600"
        height="450"
        style="border: 0"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        class="university-map"
      ></iframe>
      <p class="station-title">・羽沢横浜国大駅からお越しの方</p>
      <img src="~/assets/images/map/hazawa-station.png" class="station-map" />
      <a
        href="https://www.ynu.ac.jp/access/train_hazawa.html"
        class="ynu-page-link"
        >羽沢横浜国大駅からのルート</a
      >
      <p class="station-title">・和田町駅からお越しの方</p>
      <img
        src="~/assets/images/map/wada-station.png"
        class="wada-station-map"
      />
      <a
        href="https://www.ynu.ac.jp/access/train_south.html"
        class="ynu-page-link"
        >和田町駅からのルート</a
      >
      <p class="station-title">・三ツ沢上町駅からお越しの方</p>
      <img src="~/assets/images/map/mitukami-station.png" class="station-map" />
      <a
        href="https://www.ynu.ac.jp/access/train_front.html"
        class="ynu-page-link"
        >三ツ沢上町駅からのルート</a
      >
      <BackToHome />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "@/assets/scss/_breakpoint.scss" as *;

.inner-access-page {
  position: relative;
  top: 500px;
  left: 20%;
  width: 60%;
  display: flex;
  flex-direction: column;
  @include md {
    top: 300px;
  }
  @include sm {
    top: 200px;
  }
}
.university-map {
  width: 60%;
  min-width: 600px;
  margin: 60px 0;
  min-height: 450px;
  @include md {
    min-width: 300px;
    min-height: 300px;
    height: 300px;
    margin: 30px 0;
  }
}
.station-title {
  font-size: 30px;
  margin: 40px 0;
  @include md {
    font-size: 12px;
  }
}
.ynu-page-link {
  width: fit-content;
  font-size: 30px;
  padding: 15px 30px;
  background-color: rgba(#f6f6f6, 0.6);
  border-radius: 10px;
  text-decoration: none;
  color: #333333;
  margin: 50px 0;
  @include md {
    font-size: 12px;
    padding: 6px 12px;
    border-radius: 5px;
    margin: 30px 0;
  }
}
.ynu-page-link:last-child {
  margin-bottom: 150px;
  @include md {
    margin-bottom: 70px;
  }
}
.wada-station-map {
  width: 20%;
  min-width: 300px;
  @include md {
    min-width: 150px;
  }
}
.station-map {
  width: 60%;
  min-width: 600px;
  @include md {
    min-width: 300px;
  }
}
</style>
