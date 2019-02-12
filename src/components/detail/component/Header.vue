<template>
    <div class="header">
      <div class="header-abs" v-show="showabs">
        <router-link :to="{name:'home'}">
          <div class="iconfont header-abs-icon">&#xe624;</div>
        </router-link>
      </div>
      <div class="header-fixed" v-show="!showabs" :style="{opacity,zIndex}" style="transition-duration:.5s">
        <router-link :to="{name:'home'}">
          <div class="header-left">
            <div class="iconfont header-fixed-icon">&#xe624;</div>
          </div>
        </router-link>
        景点详情
      </div>
    </div>
</template>

<script>
    export default {
      name: "detailheader",
      data(){
        return{
          showabs:true,
          opacity:0,
          zIndex:0
        }
      },
      methods:{
        handleScroll(){
          let top = document.documentElement.scrollTop;
          let opacitys = top /200 > 1? 1:top /200;
          if (top >70){
            this.opacity =opacitys;
            this.showabs = false;
          }else {
            this.showabs = true;
          }
        }
      },
      activated(){
        window.addEventListener("scroll",this.handleScroll)
      },
      deactivated(){
        window.removeEventListener("scroll",this.handleScroll);
      }
    }
</script>

<style scoped lang="less">
  @rem:750/10rem;
  .header{
    position: fixed;
    top: 0;
    font-size: 37.5/@rem;
    .header-abs{
      width: 80/@rem;
      height: 80/@rem;
      margin-left: 30/@rem;
      margin-top: 20/@rem;
      border-radius: 50%;
      background-color: #000;
      color: #fff;
      font-size: 30/@rem;
      line-height: 80/@rem;
      .header-abs-icon{
        text-align: center;
        color: #fff;
      }
    }
    .header-fixed{
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      width: 750/@rem;
      height: 80/@rem;
      background-color: #00bcd4;
      text-align: center;
      line-height: 80/@rem;
      color: #fff;
      .header-left{
        position: absolute;
        top: 0;
        left: 0;
        width: 64/@rem;
        float: left;
        .header-fixed-icon{
          text-align: center;
          font-size: 37.5/@rem;
          color: #fff;
        }
      }
    }
  }
</style>
