<template>
  <mt-swipe :auto="4000" class="banner">
    <mt-swipe-item v-for="(item,index) in swiper" :key="index">
      <img :src="item.imgUrl" height="100%" width="100%" alt="">
    </mt-swipe-item>
  </mt-swipe>
</template>

<script>
    export default {
      name: "swiper",
      props:['swiper']
    }
</script>

<style scoped lang="less">
  @rem:750/10rem;
  .banner{
    height: 240/@rem;
  }
</style>
