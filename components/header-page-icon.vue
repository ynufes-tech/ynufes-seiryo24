<script lang="ts" setup>
</script>

<template>
<div class="header-page-icon">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" >
<link href="https://fonts.googleapis.com/css2?family=Zen+Old+Mincho&display=swap" rel="stylesheet">

  <div class="page-icon-wrapper">
  <NuxtLink class="page-icon" to="/about">
    <img src="/public/images/pageIcon/about.png">
    <span class="hover-icon">about</span>
  </NuxtLink>
  <NuxtLink class="page-icon" to="/event">
    <img src="/public/images/pageIcon/event.png">
    <span class="hover-icon">event</span>
  </NuxtLink>
  <NuxtLink class="page-icon" to="/events">
    <img src="/public/images/pageIcon/events.png">
    <span class="hover-icon">events</span>
  </NuxtLink>
  <NuxtLink class="page-icon" to="/pamphlet">
    <img src="/public/images/pageIcon/pamphlet.png">
    <span class="hover-icon">pamphlet</span>
  </NuxtLink>
  <NuxtLink class="page-icon" to="/map">
    <img src="/public/images/pageIcon/map.png">
    <span class="hover-icon">map</span>
  </NuxtLink>
  <NuxtLink class="page-icon" to="/time-schedule">
    <img src="/public/images/pageIcon/time-schedule.png">
    <span class="hover-icon">time-schedule</span>
  </NuxtLink>
  <NuxtLink class="page-icon" to="/access">
    <img src="/public/images/pageIcon/access.png">
    <span class="hover-icon">access</span>
  </NuxtLink>
  <NuxtLink class="page-icon" to="/sponsor">
    <img src="/public/images/pageIcon/sponsors.png">
    <span class="hover-icon">sponsors</span>
  </NuxtLink>
  <NuxtLink class="page-icon" to="/faq">
    <img src="/public/images/pageIcon/faq.png">
    <span class="hover-icon">faq</span>
  </NuxtLink>
  </div>

</div>

</template>

<style scoped>
.header-page-icon{
  display: flex;
}

.page-icon-wrapper{
  display: flex;
  position: fixed;
  top: 3%;
  right: 5%;
  align-items: center;
  font-family: 'Zen Old Mincho', serif;
  color: #333333;
  @media screen and (max-width: 768px){
    display: none;
  }
  .page-icon{
    position: relative;
    margin: 0 8px;
  }
  .page-icon:hover .hover-icon{
    display: inline; 
  }
  .hover-icon{
  position: absolute;              
  display: none;                      
  padding: 2px;                        
  background-color: rgba(246, 246, 246, 0.60);   
  width:14em;                         
  left : 30%;                          
  top : 100%;
  margin-top : 12px;                    
  font-size: 18px;
  }
  .hover-icon:after{
  border-bottom: 12px solid rgba(246, 246, 246, 0.60); 
  border-left: 10px solid transparent;    
  border-right: 10px solid transparent;   
  top: -12px;                           
  left : 5%;                            
  content: "";                    
  position: absolute;         
  }
}

</style>
