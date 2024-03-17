<script lang="ts" setup>
// 当日までの時間を取得
const eventTime = new Date(`May 18 2024 13:00:00`).getTime();
const finishTime = new Date(`May 19 2024 15:00:00`).getTime();
onMounted(() => {
  const days = document.getElementById("days")!;
  const hours = document.getElementById("hours")!;
  const minutes = document.getElementById("minutes")!;

  updateCountdown({
    days,
    hours,
    minutes,
  });

  // 1秒ごとに関数を実行
  setInterval(updateCountdown, 1000, {
    days,
    hours,
    minutes,
  });
});

// 要素を取得

const diff = ref(0);
const currentTime = ref(0);
// カウントダウンの関数
function updateCountdown(elements: {
  days: HTMLElement;
  hours: HTMLElement;
  minutes: HTMLElement;
}) {
  // 現在の時刻情報を取得する
  currentTime.value = new Date().getTime();
  // 現在の時間と当日との時間の差を計算する（ミリ秒単位）
  diff.value = eventTime - currentTime.value;

  // 現在から当日までの日数を計算
  const d = Math.floor(diff.value / 1000 / 60 / 60 / 24);
  // 時間を計算
  const h = Math.floor(diff.value / 1000 / 60 / 60) % 24;
  // 分を計算
  const m = Math.floor(diff.value / 1000 / 60) % 60;

  // 取得した時間をDOMに追加
  elements.days.innerText = String(d);
  elements.hours.innerText = String(h < 10 ? "0" + h : h);
  elements.minutes.innerText = String(m < 10 ? "0" + m : m);
}
</script>

<template>
  <div class="countdown-wrapper">
    <div class="title">
      <hi class="countdown-title"> Countdown </hi>
      <h2 class="countdown-fes-title">
        24清陵祭
        <span v-if="diff >= 0" class="countdown-sub-title">まで...</span>
      </h2>
    </div>
    <div class="content">
      <div v-if="diff >= 0" class="time-container">
        <div>
          <p><span id="days">--</span>days</p>
        </div>
        <div>
          <p><span id="hours">--</span>hours</p>
        </div>
        <div>
          <p><span id="minutes">--</span>minutes</p>
        </div>
      </div>
      <div v-if="diff < 0 && finishTime - currentTime >= 0" class="in-session">
        <h1>開催中</h1>
      </div>
      <div v-if="finishTime - currentTime < 0" class="finished">
        <h1>終了しました</h1>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "@/assets/scss/_breakpoint.scss" as *;
.countdown-wrapper {
  background-image: url(~/assets/images/Union.png);
  background-repeat: no-repeat;
  position: relative;
  width: 545px;
  height: 405px;
  @include md {
    background-size: 100%;
    width: 375px;
    height: 280px;
  }
}
.title {
  width: 300px;
  align-items: center;
  position: relative;
  top: 80px;
  left: 20px;
  text-align: center;
  @include md {
    width: 195px;
    top: 70px;
    left: 12px;
  }
  .countdown-title {
    font-size: 35px;
    @include md{
      font-size: 20px;
    }
  }
  .countdown-fes-title {
    font-size: 30px;
    padding: 25px 0;
    margin: 0;
    @include md{
      font-size: 18px;
      padding: 10px 0;
    }
  }
  .countdown-sub-title {
    font-size: 30px;
    text-align: center;
    position: relative;
    @include md{
      font-size: 18px;
    }
  }
}

.in-session {
  font-size: 15px;
  position: relative;
  text-align: center;
  top: 10px;
  @include md{
    font-size: 9px;
    top: 6px;
  }
}

.finished {
  font-size: 15px;
  text-align: center;
  position: relative;
  top: 10px;
  @include md{
    font-size: 9px;
    top: 6px;
  }
}

/* タイマー部分を囲うコンテナー */
.content {
  width: 280px;
  align-items: center;
  position: relative;
  top: 50px;
  left: 260px;
  @include md{
    width: 180px;
    top: 70px;
    left: 185px;
  }
}
.time-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
  margin: 0 auto;

  > div {
    display: flex;
    justify-content: center;

    /* hours, minutesの共通スタイル */
    > p {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      font-size: 16px;
      @include md{
        font-size: 10px;
      }

      > span {
        font-size: 24px;
        line-height: 1;
        margin: 15px 20px;
        @include md{
          font-size: 16px;
          margin: 9.5px 13px;
        }
      }
    }
  }
}
</style>
