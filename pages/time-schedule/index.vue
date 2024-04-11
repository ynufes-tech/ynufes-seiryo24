<script lang="ts" setup>
useHead({
  title: "清陵祭 - タイムスケジュール",
  meta: [
    {
      name: "description",
      content:
        "野外音楽堂や中央図書館など、特別な場所で行われる企画のスケジュールはこちらからご確認いただけます。",
    },
  ],
});
const placeId = ref(1);
const route = useRoute();
const place = Number(route.query.place);
if (place) {
  placeId.value = place;
}
const changePlace = (id: number) => {
  useRouter().push({
    path: "/time-schedule",
    query: { place: String(id) },
  });
  placeId.value = id;
};

const { gtag } = useGtag();

gtag("event", "screen_view", {
  app_name: useRuntimeConfig().public.app_name,
  screen_name: "TimeSchedule",
});
</script>

<template>
  <div class="time-schedule-page">
    <HeaderPageIcon />
    <PageTitle title="TIME-SCHEDULE" sub-title="タイムスケジュール" />
    <p class="select-button-description">
      タイムスケジュールを表示する場所を選択してください
    </p>
    <!-- 表示する場所を変更するボタンのラッパー -->
    <div class="button-wrapper">
      <SelectButton
        :selected="placeId == 1"
        class="select-button"
        value="野外音楽堂"
        @click="changePlace(1)"
      />
      <SelectButton
        :selected="placeId == 2"
        class="select-button"
        value="中央図書館1階メディアホール"
        @click="changePlace(2)"
      />
      <SelectButton
        :selected="placeId == 3"
        class="select-button"
        value="経営学部2号館109教室"
        @click="changePlace(3)"
      />
      <SelectButton
        :selected="placeId == 4"
        class="select-button"
        value="教育6号館と7号館の間"
        @click="changePlace(4)"
      />
      <SelectButton
        :selected="placeId == 5"
        class="select-button"
        value="学生センター前ウッドデッキ"
        @click="changePlace(5)"
      />
      <SelectButton
        :selected="placeId == 6"
        class="select-button"
        value="多目的グラウンド"
        @click="changePlace(6)"
      />
      <SelectButton
        :selected="placeId == 7"
        class="select-button"
        value="大学会館4階 ホール"
        @click="changePlace(7)"
      />
    </div>

    <div class="time-table-wrapper">
      <!-- 1. 野外音楽堂 -->
      <div v-show="placeId == 1" class="time-table">
        <hi class="place-title">野外音楽堂</hi>
        <h2 class="day-1">5/18 Sat.</h2>

        <div class="duration-box"></div>
        <div class="time-table-item">
          <span class="item-start-time"></span>
          <div class="item-text">
            <h2 class="item-title">
              <span class="item-subtitle"></span>
            </h2>
            <p class="item-description"></p>
            <p class="item-warning"></p>
          </div>

          <span class="item-end-time"></span>
        </div>

        <div class="duration-box"></div>
        <h2 class="day-2">5/19 Sun.</h2>
        <div class="duration-box"></div>
        <div class="time-table-item">
          <span class="item-start-time"></span>
          <div class="item-text">
            <h2 class="item-title"></h2>
            <p class="item-description"></p>
            <p class="item-warning"></p>
          </div>

          <span class="item-end-time"></span>
        </div>
        <div class="duration-box"></div>
      </div>

      <!-- 2. 中央図書館1階メディアホール -->
      <div v-show="placeId == 2" class="time-table">
        <hi class="place-title">中央図書館1階メディアホール</hi>
        <h2 class="day-1">5/18 Sat.</h2>

        <div class="duration-box"></div>

        <h2 class="day-2">5/19 Sun.</h2>

        <div class="duration-box"></div>
        <div class="time-table-item">
          <span class="item-start-time"></span>
          <div class="item-text">
            <h2 class="item-title"></h2>
            <p class="item-description"></p>
            <p class="item-warning"></p>
          </div>

          <span class="item-end-time"></span>
        </div>
        <div class="duration-box"></div>
      </div>

      <!-- 3. 経営学部2号館109教室 -->
      <div v-show="placeId == 3" class="time-table">
        <hi class="place-title">経営学部2号館109教室</hi>
        <h2 class="day-1">5/18 Sat.</h2>
        <div class="duration-box"></div>
        <div class="time-table-item">
          <span class="item-start-time"></span>
          <div class="item-text">
            <h2 class="item-title"></h2>
            <p class="item-description"></p>
            <p class="item-warning"></p>
          </div>

          <span class="item-end-time"></span>
        </div>
        <div class="duration-box"></div>
        <h2 class="day-2">5/19 Sun.</h2>
        <div class="duration-box"></div>
        <div class="time-table-item">
          <span class="item-start-time"></span>
          <div class="item-text">
            <h2 class="item-title"></h2>
            <p class="item-description"></p>
            <p class="item-warning"></p>
            <p class="item-warning"></p>
          </div>

          <span class="item-end-time"></span>
        </div>
        <div class="duration-box"></div>
      </div>

      <!-- 4. 教育6号館と7号館の間 -->
      <div v-show="placeId == 4" class="time-table">
        <hi class="place-title">教育6号館と7号館の間</hi>
        <h2 class="day-1">5/18 Sat.</h2>

        <div class="duration-box"></div>
        <div class="time-table-item">
          <span class="item-start-time"></span>
          <div class="item-text">
            <h2 class="item-title"></h2>
            <p class="item-description"></p>
            <p class="item-warning"></p>
          </div>

          <span class="item-end-time"></span>
        </div>
        <div class="duration-box"></div>

        <h2 class="day-2">5/19 Sun.</h2>
        <div class="duration-box"></div>
        <div class="time-table-item">
          <span class="item-start-time"></span>
          <div class="item-text">
            <h2 class="item-title"></h2>
            <p class="item-description"></p>
            <p class="item-warning"></p>
          </div>

          <span class="item-end-time"></span>
        </div>
        <div class="duration-box"></div>
        <div class="time-table-item">
          <span class="item-start-time"></span>
          <div class="item-text">
            <h2 class="item-title"></h2>
            <p class="item-description"></p>
            <p class="item-warning"></p>
          </div>

          <span class="item-end-time"></span>
        </div>
        <div class="duration-box"></div>
        <div class="time-table-item">
          <span class="item-start-time"></span>
          <div class="item-text">
            <h2 class="item-title"></h2>
            <p class="item-description"></p>
            <p class="item-warning"></p>
          </div>

          <span class="item-end-time"></span>
        </div>
        <div class="duration-box"></div>
      </div>

      <!-- 5. 学生センター前のウッドデッキ -->
      <div v-show="placeId == 5" class="time-table">
        <hi class="place-title">学生センター前ウッドデッキ</hi>
        <h2 class="day-1">5/18 Sat.</h2>
        <div class="duration-box"></div>
        <h2 class="day-2">5/19 Sun.</h2>
        <div class="duration-box"></div>
        <div class="time-table-item">
          <span class="item-start-time"></span>
          <div class="item-text">
            <h2 class="item-title">
              <span class="item-subtitle"></span>
            </h2>
            <p class="item-description"></p>
            <p class="item-warning"></p>
          </div>

          <span class="item-end-time"></span>
        </div>
        <div class="duration-box"></div>
      </div>

      <!-- 6. 多目的グラウンド -->
      <div v-show="placeId == 6" class="time-table">
        <hi class="place-title">多目的グラウンド</hi>
        <h2 class="day-1">5/18 Sat.</h2>

        <div class="duration-box"></div>
        <div class="time-table-item">
          <span class="item-start-time"></span>
          <div class="item-text">
            <h2 class="item-title">
              <span class="item-subtitle"></span>
            </h2>
            <p class="item-description"></p>
          </div>

          <span class="item-end-time"></span>
        </div>
        <div class="duration-box"></div>
        <h2 class="day-2">5/19 Sun.</h2>
        <div class="duration-box"></div>
        <div class="time-table-item">
          <span class="item-start-time"></span>
          <div class="item-text">
            <h2 class="item-title">
              <span class="item-subtitle"></span>
            </h2>
            <p class="item-description"></p>
            <p class="item-warning"></p>
          </div>

          <span class="item-end-time"></span>
        </div>
        <div class="duration-box"></div>
      </div>

      <!-- 7. 大学会館4階ホール -->
      <div v-show="placeId == 7" class="time-table">
        <hi class="place-title">大学会館4階 ホール</hi>
        <h2 class="day-1">5/18 Sat.</h2>
        <div class="duration-box"></div>
        <div class="time-table-item">
          <span class="item-start-time"></span>
          <div class="item-text">
            <h2 class="item-title"></h2>
            <p class="item-description"></p>
          </div>
          <span class="item-end-time"></span>
        </div>
        <div class="duration-box"></div>
        <h2 class="day-2">5/19 Sun.</h2>
        <div class="duration-box"></div>
        <div class="time-table-item">
          <span class="item-start-time"></span>
          <div class="item-text">
            <h2 class="item-title">
              <span class="item-subtitle"></span>
            </h2>
            <p class="item-description"></p>
            <p class="item-warning"></p>
          </div>
          <span class="item-end-time"></span>
        </div>
        <div class="duration-box"></div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "@/assets/scss/_breakpoint.scss" as *;
.place-title {
  font-size: 24px;
}
.select-button-description {
  font-size: 20px;
  position: relative;
  left: 20%;
  text-align: center;
  margin-top: 2em;
}
.button-wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: min(1024px, 80%);
  margin: 10px auto;
  padding: 16px 0;

  .select-button {
    color: #333333;
    font-size: 20px;
    background-color: rgba(#f6f6f6, 0.8);
    text-decoration: none;
    margin: 4px;
    width: fit-content;
    padding: 6px 16px;
    border-radius: 16px;
  }
}
.time-table-wrapper {
  position: relative;
  left: 20%;
  width: min(1024px, 65vw);
  @include md {
    width: 70vw;
  }
  @include sm {
    width: 75vw;
  }
}
.time-table {
  max-width: min(1024px, 80%);
  margin: 0 auto;

  .frame-section {
    margin: 40px 0;
    width: 100%;
    font-size: 20px;
    text-align: center;
    font-weight: bold;
  }

  .day-1,
  .day-2 {
    font-size: 24px;
  }

  .time-table-item {
    margin: 0 0 0 20px;
    padding: 20px;
    border-left: 1px solid #3b3b3b;
    position: relative;

    .item-text {
      margin: 20px 0;

      .item-title {
        font-size: 20px;
        font-weight: bold;

        .item-subtitle {
          font-size: 16px;
        }
      }

      .item-description {
        margin: 0;
        font-size: 16px;
        line-height: 1.2rem;
      }

      .item-warning {
        margin: 0;
        font-size: 12px;
        line-height: 1rem;
        color: red;
      }
    }

    .item-start-time {
      position: absolute;
      top: 0;
      left: 20px;
      font-size: 1.2rem;
    }

    .item-end-time {
      position: absolute;
      bottom: 0;
      left: 20px;
      font-size: 20px;
    }

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: -10px;
      width: 20px;
      height: 20px;
      background-color: rgba(#f6f6f6, 0.8);
      border-radius: 100%;
    }

    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: -10px;
      width: 20px;
      height: 20px;
      background-color: rgba(#f6f6f6, 0.8);
      border-radius: 100%;
    }
  }

  .duration-box {
    margin: 0 0 0 19px;
    height: 40px;
    border-left: 2px dashed #333;
  }
}

.back-to-home {
  margin: 40px auto;
}
</style>
