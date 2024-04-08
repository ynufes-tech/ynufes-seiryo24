<script lang="ts" setup>
const props = defineProps<{
  eventData: {
    id: number;
    e_name: string;
    e_genre: Genre;
    o_name: string;
    area: Area;
    p_name: string;
  };
}>();
const showNoImage = function (e: any) {
  e.target.src =
    "https://storage.googleapis.com/tokiwa24-assets/icons/no-image";
  e.target.onerror = null;
};
const iconURL = `https://storage.googleapis.com/tokiwa24-assets/icons/${props.eventData.id}`;
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
        <p>
          {{ genreToString(props.eventData.e_genre) }}
        </p>
        <p>
          {{ placeToString(props.eventData.area) + props.eventData.p_name }}
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "@/assets/scss/_breakpoint.scss" as *;
.project-icon {
  width: 250px;
  height: 180px;
  object-fit: cover;
  position: absolute;
  border-radius: 20px;
}
.card-script {
  position: relative;
  width: 250px;
  height: 200px;
  text-align: center;
  background-color: rgba(#f6f6f6, 0.8);

  p {
    font-size: 20px;
    margin: 12px 0;
  }

  .event-name {
    font-size: 24px;
    border-bottom: #333;
  }
}
</style>
