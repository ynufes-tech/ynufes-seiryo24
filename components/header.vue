<script lang="ts" setup>
</script>

<template>
<div class="header">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" >
<link href="https://fonts.googleapis.com/css2?family=Zen+Old+Mincho&display=swap" rel="stylesheet">

  <div class="ynu-icon-wrapper">
   <NuxtLink class="header-icon" to="/">
      <img src="/public/images/YNUFES-icon.png">
      <div class="title">
        <a class="header-title">清陵祭</a>
        <a class="header-sub-title">2024</a>
      </div>
   </NuxtLink>
  </div>

</div>

</template>

<style scoped>
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
    >img{
      margin-right: 20px;
      @media screen and (max-width: 768px){
        width: 50px;
        height: 50px;
      }

      @media screen and (max-width: 400px){
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
      text-decoration: none;
      @media screen and (max-width: 768px){
        font-size: 20px;
      }

      @media screen and (max-width: 400px){
        font-size: 16px;
      }
    }
    .header-sub-title{
      font-size: 16px;
      margin: 0 auto;
      text-decoration: none;
      @media screen and (max-width: 768px){
        font-size: 12px;
      }

      @media screen and (max-width: 400px){
        font-size: 8px;
      }
    }
  }
}


</style>
