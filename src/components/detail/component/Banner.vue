<template>
    <div>
      <div class="banner" @click="handlaClick">
        <img :src="bannerImg" alt="">
        <div class="banner-content">
          <div class="banner-title">
            {{this.sightName}}
          </div>
          <div class="banner-number">
            <span class="iconfont banner-icon">&#xe692;</span>&nbsp;
            {{this.gallaryImgs.length}}
          </div>
        </div>
      </div>
      <fade-animation>
        <common-gallary v-show="show" @close="handlaClicks" :gallaryImgs="this.gallaryImgs"></common-gallary>
      </fade-animation>
    </div>
</template>

<script>
  import commonGallary from '../../../common/gallary/Gallary'
  import FadeAnimation from '../../../common/gallary/FadeAnimation'
    export default {
      name: "banner",
      props:{
        sightName:String,
        bannerImg:String,
        gallaryImgs:Array
      },
      data(){
        return{
          show:false,
        }
      },
      methods:{
        handlaClick(){
          this.show =true;
        },
        handlaClicks(){
          this.show=false;
        }
      },
      components:{
        commonGallary,
        FadeAnimation
      }
    }
</script>

<style scoped lang="less">
  @rem:750/10rem;
  .banner{
    position: relative;
    overflow: hidden;
    height: 0;
    padding-bottom: 55%;
    img{
      width: 100%;
    }
    .banner-content{
      display: flex;
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      padding:10/@rem 20/@rem;
      background:linear-gradient(to top, rgba(0,0,0,.8) , rgba(0,0,0,.3));
      background:-moz-linear-gradient(top,rgba(0,0,0,.8) , rgba(0,0,0,.3));
      background: -ms-linear-gradient(top,rgba(0,0,0,.8) , rgba(0,0,0,.3));
      background: -o-linear-gradient(top,rgba(0,0,0,.8) , rgba(0,0,0,.3));
      .banner-title{
        flex: 1;
        font-size: 30/@rem;
        color: #fff;
      }
      .banner-number{
        width: 20%;
        padding-right: 20/@rem;
        background-color: #000;
        color: #fff;
        font-size: 30/@rem;
        text-align: center;
        border-radius: 20/@rem;
      }
    }
  }
</style>
