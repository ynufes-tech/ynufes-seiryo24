<script lang="ts" setup>
import { ref } from "vue";

const showMenu = ref(false);
const toggle = () => {
  showMenu.value = !showMenu.value;
};
</script>

<template>
  <div class="navi-menu">
    <a
      id="button-title"
      :class="{
        'under-hover-button': showMenu,
      }"
      @click="toggle"
      >mmmmm
    </a>
    <div v-show="showMenu">
      <nav class="nav-list-wrapper">
        <ul class="nav-list">
          <!-- <li>
            <NuxtLink to="/" @click="toggle">トップ</NuxtLink>
          </li> -->
          <li>
            <NuxtLink to="/about" @click="toggle">ABOUT</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/event" @click="toggle">EVENT</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/events" @click="toggle">EVENTS</NuxtLink>
          </li>

          <li>
            <NuxtLink to="/pamphlet" @click="toggle">MAP&amp;PAMPHLET</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/time-schedule" @click="toggle"
              >TIME-SCHEDULE</NuxtLink
            >
          </li>
          <li>
            <NuxtLink to="/access" @click="toggle">ACCESS</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/sponsor" @click="toggle">SPONSOR</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/faq" @click="toggle">FAQ</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/staff" @click="toggle">STAFF</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/connection" @click="toggle">CONNECTION</NuxtLink>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "@/assets/scss/_breakpoint.scss" as *;
.navi-menu {
  position: relative;
  z-index: 10000;
  display: none;
  @include md {
    display: block;
  }
}

#button-title {
  display: inline-block;
  margin-right: 1rem;
  margin-top: 1rem;
  width: fit-content;
  line-height: 3.6rem;
  background: url(~/assets/images/NaviMenu-OpenButton.webp) no-repeat;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
  color: rgba(255, 255, 255, 0);
  cursor: pointer;
  user-select: none;

  &.under-hover-button {
    background: url(~/assets/images/NaviMenu-CloseButton.webp) no-repeat;
  }
}

.nav-list-wrapper {
  background: linear-gradient(90deg, #ec9da8, #fddadf);
  background-size: cover;
  position: absolute;
  top: calc(100% + 0.5em);
  right: 0;
  margin-top: 1vw;
  display: inline-block;
  width: max(32vw, 10.5rem);
  padding: 1rem;
  text-align: left;
  list-style-type: none;
  text-decoration: none;
  line-height: 30px;
  outline: none;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
  border-radius: 5px;
  z-index: 10000;
  font-size: 1.2rem;
  @include sm {
    font-size: 1rem;
  }
  font-weight: 400;
}

.nav-list {
  list-style: none;
  letter-spacing: 0.135em;
  padding: 0;

  margin-left: 0;

  > li > a {
    text-decoration: none;
    color: inherit;

    &.router-link-active {
      font-size: 1rem;
      font-weight: bold;
      text-decoration: underline;
    }
  }
}
</style>
