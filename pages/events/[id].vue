<script lang="ts" setup>
// import { Swiper, SwiperSlide } from "swiper/vue"; // 以下swiperの設定
// import type { Event } from "~/model/event";
// import { Area } from "~/model/area";
// // Import Swiper styles
// import "swiper/css";

// import "swiper/css/pagination";

// const route = useRoute();
// const id = route.params.id; // idが数値でない場合はトップページにリダイレクト
// if (Number.isNaN(id)) {
//   useRouter().push("/");
// }
// // fetch data from /api/events/:id
// const event = await useFetch(`/api/event/${id}`)
//   .then((res) => {
//     return res.data.value as Event;
//   })
//   .catch(() => null);
// if (!event) {
//   useRouter().push("/events");
// }
// useHead({
//   title: `${event?.event_name ?? ""} | 24清陵祭公式HP~花瑞希~`,
//   meta: [
//     {
//       name: "description",
//       content: `${event?.event_name ?? ""}の詳細ページです`,
//     },
//   ],
// });

// const urls: string[] = []; // swiperの複数の画像のURLを格納する配列

// for (let i = 1; i <= event?.activity_images; i++) {
//   urls.push("" + event?.id + "-" + i);
// }
// const area_id = event?.area ?? 0;

// const { gtag } = useGtag();
// gtag("event", "screen_view", {
//   app_name: useRuntimeConfig().public.app_name,
//   screen_name:
//     "EventDetail - " + event?.id ?? "" + " - " + event?.event_name ?? "",
// });
</script>

<template>
  <div class="id-page">
    <HeaderPageIcon />
    <PageTitle title="EVENTS" sub-title="events?.event_name ??''" />
    <div class="inner-id-page">
      <div class="event-tag">
        <!-- <EventTag :event-type="event?.event_genre ?? 0" class="EventTag" /> -->
        <p class="EventTag">gohann syokuji</p>
      </div>
      <
      <!-- <h1 class="org-name">{{ event?.org_name }}</h1> -->
      <h1 class="org-name">あいうえおあいうえおあいうえおあいうえお</h1>
      <!-- <p
        class="place"
        v-text="'企画場所: ' + placeToString(area_id) + event?.place_name ?? ''"
      /> -->
      <p class="place" v-text="'あいうえおあいうえお'" />
      <img :src="`https://placehold.jp/300x300.png`" class="event-image" />
      <p class="section-title">・企画説明</p>
      <p
        class="event-description"
        v-text="
          'あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお'
        "
      />
      <!-- <p class="event-description" v-text="event?.event_description" /> -->
      <!-- <div v-if="event?.org_description" class="org-description-sec"> -->
      <div class="org-description-sec">
        <p class="section-title">・企画団体説明</p>
        <!-- <div
          v-if="event?.activity_images && event?.activity_images > 0"
          class="activity-images"
        >         -->
        <div class="activity-images">
          <!-- <swiper
            v-if="event?.activity_images > 1"
            :autoplay="{
              delay: 8000,
              disableOnInteraction: false,
            }"
            :modules="[Pagination, Autoplay]"
            :pagination="{
              dynamicBullets: true,
            }"
            class="activity-images-swiper"
          >
            <swiper-slide v-for="url in urls"><img :src="url" /></swiper-slide>
          </swiper>
          <img
            v-if="event?.activity_images == 1"
            :src="urls[0]"
            alt=""
            class="group-image"
          /> -->
          <img
            src="https://placehold.jp/600x600.png"
            alt=""
            class="group-image"
          />
        </div>
        <p>・企画団体名</p>
        <!-- <h1 class="org-name">{{ event?.org_name }}</h1>
        <p class="org-description" v-text="event?.org_description" /> -->
        <h1 class="org-name">あいうえおあいうえおあいうえおあいうえお</h1>
        <p
          class="org-description"
          v-text="
            'あいうえおあいうえおあいうえおあいうえあいうえおあいうえおあいうえおあいうえあいうえおあいうえおあいうえおあいうえあいうえおあいうえおあいうえおあいうえあいうえおあいうえおあいうえおあいうえあいうえおあいうえおあいうえおあいうえあいうえおあいうえおあいうえおあいうえ'
          "
        />
        <!-- <p v-if="event?.x_id || event?.instagram_id || event?.facebook_id">
          ・各種リンク
        </p> -->
        <p>・各種リンク</p>
        <div class="link-icons">
          <!-- <a
            v-if="event?.x_id"
            :href="`https://x.com/${event.x_id}`"
            class="link-icon"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img alt="X" src="~/assets/images/SNSicon/x-white.webp" />
          </a> -->
          <a class="link-icon" rel="noopener noreferrer" target="_blank">
            <img alt="X" src="~/assets/images/SNSicon/x-white.webp" />
          </a>
          <!-- <a
            v-if="event?.instagram_id"
            :href="`https://instagram.com/${event.instagram_id}`"
            class="link-icon"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img
              alt="instagram"
              src="~/assets/images/SNSicon/instagram-logo.webp"
            />
          </a> -->
          <a class="link-icon" rel="noopener noreferrer" target="_blank">
            <img
              alt="instagram"
              src="~/assets/images/SNSicon/instagram-logo.webp"
            />
          </a>
          <!-- <a
            v-if="event?.facebook_id"
            :href="`https://instagram.com/${event.facebook_id}`"
            class="link-icon"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img
              alt="facebook"
              src="~/assets/images/SNSicon/facebook-logo.webp"
            />
          </a> -->
          <a class="link-icon" rel="noopener noreferrer" target="_blank">
            <img
              alt="facebook"
              src="~/assets/images/SNSicon/facebook-logo.webp"
            />
          </a>
        </div>
      </div>
      <div class="website-section">
        <!-- <div v-if="event?.website" class="website-section"></div> -->
        <p>・団体ホームページ</p>
        <!-- <a
          :href="event?.website"
          class="website-link"
          rel="noopener noreferrer"
          target="_blank"
        >
          {{ event?.website }}
        </a> -->
        <a class="website-link" rel="noopener noreferrer" target="_blank">
          https://ynu-fes.yokohama/24/seiryo/about
        </a>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "@/assets/scss/_breakpoint.scss" as *;

.id-page {
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.inner-id-page {
  position: relative;
  top: 500px;
  left: 20%;
  width: 60%;
  display: flex;
  flex-direction: column;
  @include md {
    top: 350px;
  }
  @include sm {
    top: 250px;
  }
}
.section-title {
  font-size: 40px;
  @include md {
    font-size: 24px;
  }
  @include sm {
    font-size: 20px;
  }
}

.event-tag {
  width: fit-content;
  margin-top: 25px;
  margin-left: 45px;
  align-self: start;
  @include md {
    margin-left: 30px;
  }
  @include sm {
    margin-left: 15px;
  }
}

.event-image {
  aspect-ratio: 1;
  width: min(80svw, 250px);
  margin-top: 25px;
  align-self: center;
}

.org-name,
.place {
  text-align: center;
  margin: 20px 0 15px;
  font-size: 36px;
  justify-content: center;
  @include md {
    font-size: 24px;
    margin: 10px 0;
  }
  @include sm {
    font-size: 16px;
  }
}

.event-description,
.org-description {
  padding: 1em 0;
  font-size: 1.3em;
  line-height: 1.5em;
  white-space: pre-wrap;

  @include md {
    padding: 1em;
  }
}

.activity-images {
  margin-top: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-self: center;
  .group-image {
    width: 100%;
  }
}

.link-icons {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 25px;

  .link-icon {
    width: 40px;
    margin: 0 15px;

    > img {
      width: 100%;
    }
  }
}

.website-section {
  display: flex;
  flex-direction: column;
  align-items: center;

  > a {
    font-size: 16px;
  }
}

.swiper {
  max-width: 600px;
  aspect-ratio: 16 / 9;
  .swiper-slide {
    text-align: center;
    background: #fff;
    /* Center slide text vertically */
    display: flex;
    justify-content: center;
    align-items: center;
    aspect-ratio: 16 / 9;
    width: 100%;

    img {
      width: 100%;
      object-fit: cover;
      aspect-ratio: 16 / 9;
    }
  }
}
</style>
