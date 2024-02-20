<script lang="ts" setup></script>
<template>
  <div class="floating-button">
    <a href="#" class="go-top">top</a>
  </div>
</template>

<style lang="scss" scoped>
@import "assets/scss/_breakpoint.scss";

.go-top {
  display: block;
  width: 60px;
  height: 60px;
  box-sizing: border-box;
  background: #fff;
  border: 1px solid #999;
  border-radius: 1em;
  padding-top: 30px;
  text-align: center;
  letter-spacing: -1px;
  font-size: 85%;
  text-decoration: none;
  color: #333;
  opacity: 0.5;
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 10000;
}

.go-top::before {
  content: "";
  display: block;
  border-top: 2px solid #333;
  border-right: 2px solid #333;
  width: 25%;
  height: 25%;
  top: 25%;
  left: 0;
  right: 0;
  margin: auto;
  position: absolute;
  transform: rotate(-45deg);
}

.go-top:hover {
  opacity: 1;
}

@include md {
  .go-top {
    width: 40px;
    height: 40px;
    text-indent: -9999px;
    opacity: 1;
    border: none;
    background: none;
    bottom: 10px;
    right: 10px;
  }

  .go-top::before {
    bottom: 0;
  }
}
</style>
