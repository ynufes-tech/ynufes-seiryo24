<script lang="ts" setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import type { Event } from "~/model/event";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
// eslint-disable-next-line import/order
import { Autoplay, Pagination } from "swiper/modules";
// import { Area } from "~/model/area";
// Import Swiper styles

const route = useRoute();
const id = route.params.id; // idが数値でない場合はトップページにリダイレクト
if (Number.isNaN(id)) {
  useRouter().push("/");
}
// fetch data from /api/events/:id
const event = await useFetch(`/api/event/${id}`)
  .then((res) => {
    return res.data.value as Event;
  })
  .catch(() => null);
// if (!event) {
//   useRouter().push("/events");
// }
useHead({
  title: `${event?.event_name ?? ""} | 24清陵祭公式HP~花瑞希~`,
  meta: [
    {
      name: "description",
      content: `${event?.event_name ?? ""}の詳細ページです`,
    },
  ],
});

const urls: string[] = []; // swiperの複数の画像のURLを格納する配列

for (let i = 1; i <= event?.activity_images; i++) {
  urls.push("" + event?.id + "-" + i);
}
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
    <PageTitle title="EVENTS" :sub-title="event?.event_name ?? ''" />
    <div class="inner-id-page">
      <div class="event-tag">
        <EventTag :event-type="event?.event_genre ?? 0" class="EventTag" />
      </div>
      <h1 class="org-name">{{ event?.org_name }}</h1>
      <!-- <p
                                                                                                        class="place"
                                                                                                        v-text="'企画場所: ' + placeToString(area_id) + event?.place_name ?? ''"
                                                                                                      /> -->
      <img
        :src="`https://storage.googleapis.com/seiryo24-assets/icons/${id}.webp`"
        class="event-image"
      />
      <p class="section-title">・企画説明</p>
      <p class="event-description" v-text="event?.event_description" />
      <div v-if="event?.org_description" class="org-description-sec">
        <p class="section-title">・企画団体説明</p>
        <div
          v-if="event?.activity_images && event?.activity_images > 0"
          class="activity-images"
        >
          <swiper
            v-if="event?.activity_images > 1"
            :autoplay="{
              delay: 4000,
              disableOnInteraction: false,
            }"
            :modules="[Pagination, Autoplay]"
            :pagination="{
              dynamicBullets: true,
            }"
            class="activity-images-swiper"
          >
            <swiper-slide v-for="url in urls"
              ><img
                :src="`https://storage.googleapis.com/seiryo24-assets/icons/${url}.webp`"
            /></swiper-slide>
          </swiper>
          <img
            v-if="event?.activity_images == 1"
            :src="urls[0]"
            alt=""
            class="group-image"
          />
        </div>
        <p class="section-sub-title">・企画団体名</p>
        <h1 class="org-name">{{ event?.org_name }}</h1>
        <p class="org-description" v-text="event?.org_description" />
        <p v-if="event?.x_id || event?.instagram_id || event?.facebook_id">
          ・各種リンク
        </p>
        <div class="link-icons">
          <a
            v-if="event?.x_id"
            :href="`https://x.com/${event.x_id}`"
            class="link-icon"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img alt="X" src="~/assets/images/SNSicon/x-white.webp" />
          </a>
          <a
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
          </a>
          <a
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
          </a>
        </div>
      </div>
      <div v-if="event?.website" class="website-section">
        <p class="section-sub-title">・団体ホームページ</p>
        <a
          :href="event?.website"
          class="website-link"
          rel="noopener noreferrer"
          target="_blank"
        >
          {{ event?.website }}
        </a>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "@/assets/scss/_breakpoint.scss" as *;

.id-page {
  position: relative;
  align-items: center;
  display: flex;
  flex-direction: column;
}

.inner-id-page {
  position: relative;
  top: 500px;
  width: 60%;
  height: fit-content;
  padding-bottom: 20%;
  @include md {
    top: 350px;
  }
  @include sm {
    top: 250px;
  }
}

.section-title {
  font-size: 32px;
  @include md {
    font-size: 24px;
  }
  @include sm {
    font-size: 16px;
  }
}

.event-tag {
  width: fit-content;
  margin-top: 25px;
  margin-left: 45px;
  align-self: start;
  font-size: 28px;
  @include md {
    font-size: 20px;
    margin-left: 30px;
  }
  @include sm {
    font-size: 12px;
    margin-left: 15px;
  }
}

.event-image {
  display: block;
  aspect-ratio: 1;
  width: min(50svw, 250px);
  margin: 0 auto;
  margin-top: 25px;
}

.org-name,
.place {
  text-align: center;
  margin: 20px 0 15px;
  font-size: 28px;
  justify-content: center;
  @include md {
    font-size: 20px;
    margin: 10px 0;
  }
  @include sm {
    font-size: 12px;
  }
}

.event-description,
.org-description {
  padding: 1em 0;
  line-height: 1.5em;
  white-space: pre-wrap;
  font-size: 24px;
  @include md {
    font-size: 16px;
    padding: 1em;
  }
  @include sm {
    font-size: 8px;
  }
}

.section-sub-title {
  text-align: start;
  font-size: 28px;
  @include md {
    font-size: 22px;
  }
  @include sm {
    font-size: 18px;
  }
}

.activity-images {
  max-width: 600px;
  margin: 0 auto;
  aspect-ratio: 16 / 9;
  margin-top: 25px;
  display: flex;
  flex-direction: column;

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
  > a {
    display: flex;
    justify-content: center;
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
