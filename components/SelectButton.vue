<script lang="ts" setup>
const props = defineProps({
  value: {
    type: String,
    required: true,
  },
  selected: {
    type: Boolean,
    required: true,
  },
});
</script>

<template>
  <button class="select-button" :class="{ selected: props.selected }">
    {{ props.value }}
  </button>
</template>

<style scoped></style>
