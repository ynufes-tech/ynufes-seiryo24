<script lang="ts" setup>
import { ref } from "vue";

const showMenu = ref(false);
const toggle = () => {
  showMenu.value = !showMenu.value;
};
</script>

<template>
  <div class="navigation-menu">
    <a
      :class="{
        'under-hover-button': showMenu,
      }"
      id="button-title"
      @click="toggle"
    >
      MENU
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
            <NuxtLink to="/events" @click="toggle">EVENTS</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/map" @click="toggle">MAP</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/pamphlet" @click="toggle">PAMPHLET</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/time-schedule" @click="toggle">TIME-SCHDULE</NuxtLink
            >
          </li>
          <li>
            <NuxtLink to="/sponsors" @click="toggle">SPONSORS </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/faq" @click="toggle">FAQ</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/access" @click="toggle">ACCESS</NuxtLink>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.navigation-menu {
  position: relative;
  z-index: 10000;
}

#button-title {
  display: inline-block;
  width: 6rem;
  text-align: center;
  color: #ffffff;
  line-height: 2.5rem;
  background: #da8080;
  outline: none;
  border: 2px solid #da8080;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
  border-radius: 10px;
  font-weight: bold;
  text-decoration: underline;
  cursor: pointer;
  user-select: none;

  &.under-hover-button {
    color: #da8080;
    background-color: #fcf9ef;
  }
}

.nav-list-wrapper {
  background-image: url(~/assets/images/NaviMenuRectangle.webp);
  background-size: cover;
  position: absolute;
  top: calc(100% + 0.5em);
  right: 0;
  margin-top: 1vw;
  display: inline-block;
  width: 200px;
  padding: 1rem;
  text-align: left;
  list-style-type: none;
  text-decoration: none;
  line-height: 50px;
  outline: none;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
  border-radius: 5px;
  z-index: 10000;
  font-size: 1rem;
  font-weight: regular;
}

.nav-list {
  list-style: none;
  letter-spacing: 0.135em;
  
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
