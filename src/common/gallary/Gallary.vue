<template>
  <div class="gallary" @click="handlaClick" >
    <div class="warpper">
      <swiper :options="swiperOption" >
        <swiper-slide v-for="(item,index) in gallaryImgs" :key="index">
          <img class="gallary-img" :src="item" alt="">
        </swiper-slide>
        <div class="swiper-pagination"  slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
    export default {
      name: "gallary",
      props:{
        gallaryImgs:Array
      },
      data(){
        return{
          swiperOption:{
            pagination : '.swiper-pagination',
            paginationType : 'fraction',
            observeParents:true,
            observer:true
          },
          show:true
        }
      },
      methods:{
        handlaClick(){
          this.$emit('close')
        }
      }
    }
</script>

<style scoped lang="less">
  @rem:750/10rem;
  .gallary{
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #000;
    z-index: 99;
    .warpper{
      width: 100%;
      background-color: #fff;
      .gallary-img{
        width: 100%;
      }
      .swiper-pagination{
        bottom: -75/@rem;
        font-size: 30/@rem;
        color: #fff;
      }
      .swiper-container{
        overflow: inherit;
      }
    }

  }
</style>
