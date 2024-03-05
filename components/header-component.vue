<script lang="ts" setup>
</script>

<template>
<div class="header">
  <div class="ynu-icon-wrapper">
   <NuxtLink class="header-icon" to="/">
      <img src="~/assets/images/YNUFES-icon.png">
      <div class="title">
        <a class="header-title">清陵祭</a>
        <a class="header-sub-title">2024</a>
      </div>
   </NuxtLink>
  </div>

</div>

</template>

<style lang="scss" scoped>
@use "@/assets/scss/_breakpoint.scss" as *;
.header{
  display: flex;
}
.ynu-icon-wrapper{
  width: fit-content;
  align-items: center;
  position: fixed;
  top: 3%;
  left: 5%;
  .header-icon{
    display: flex;
    text-decoration: none;
    >img{
      margin-right: 20px;
      @include md {
        width: 50px;
        height: 50px;
      }

      @include sm {
        width: 40px;
        height: 40px;
      }
    }
  }
  .title{
    font-family: 'Zen Old Mincho', serif;
    color: #333333;
    width: fit-content;
    margin: 0 auto;
    text-align: center;
    display: flex;
    flex-direction: column;
    .header-title{
      font-size: 24px;
      margin: 0 auto;
      @include md{
        font-size: 20px;
      }

      @include sm{
        font-size: 16px;
      }
    }
    .header-sub-title{
      font-size: 16px;
      margin: 0 auto;
      @include md{
        font-size: 12px;
      }

      @include sm{
        font-size: 8px;
      }
    }
  }
}


</style>
