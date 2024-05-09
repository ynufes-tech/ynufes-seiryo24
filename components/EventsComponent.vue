<script lang="ts" setup>
const props = defineProps<{
  eventData: {
    id: number;
    e_name: string;
    // e_genre: Genre;
    o_name: string;
    // area: Area;
    // p_name: string;
  };
}>();
const showNoImage = function (e: any) {
  e.target.src = "./assts/images/noimage.webp";
  e.target.onerror = null;
};
const iconURL = `https://storage.googleapis.com/seiryo24-assets/icons/${props.eventData.id}.webp`;
</script>

<template>
  <div class="events-component">
    <div class="project-card">
      <div class="card-photo">
        <img
          :src="iconURL"
          alt="project-icon"
          class="project-icon"
          @error="showNoImage"
        />
      </div>
      <div class="card-script">
        <p class="event-name">{{ props.eventData.e_name }}</p>
        <p>{{ props.eventData.o_name }}</p>
        <!--        <p>-->
        <!--          {{ genreToString(props.eventData.e_genre) }}-->
        <!--        </p>-->
        <!--        <p>-->
        <!--          {{ placeToString(props.eventData.area) + props.eventData.p_name }}-->
        <!--        </p>-->
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "@/assets/scss/_breakpoint.scss" as *;

.project-card {
  position: absolute;
  background-color: rgba(#f6f6f6, 0.5);
  width: 25svw;
  min-width: 300px;
  max-width: 400px;
  height: 35svh;
  min-height: 275px;
  max-height: 300px;
  border: 2px solid #f6f6f6;
  @include md {
    min-width: 180px;
    max-width: 300px;
    max-height: 256px;
    min-height: 160px;
  }
}

.card-photo {
  width: 150px;
  height: 120px;
  object-fit: cover;
  position: absolute;
  top: 50%;
  right: 50%;
  transform: translateY(-100%) translateX(85%);
  border-radius: 20px;
  @include md {
    width: 90px;
    height: 75px;
  }
}
.card-script {
  position: absolute;
  width: 160px;
  height: 120px;
  padding: 10px 15px;
  top: 50%;
  left: 50%;
  transform: translateY(-25%) translateX(-75%);
  background-color: rgba(#f6f6f6, 0.8);
  @include md {
    width: 90px;
    height: 75px;
    padding: 2px 4px;
  }

  > p {
    font-size: 16px;
    margin: 4px 0;
    @include md {
      font-size: 10px;
      margin: 1px 0;
    }
  }

  .event-name {
    width: fit-content;
    font-size: 20px;
    border-bottom: 0.6px solid #333;
    @include md {
      font-size: 12px;
    }
  }
}
.project-icon {
  width: 150px;
  height: 120px;
  object-fit: cover;
  border-radius: 20px;
  @include md {
    width: 90px;
    height: 75px;
  }
}
</style>
