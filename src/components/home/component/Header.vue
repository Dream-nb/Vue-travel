<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe624;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>
      输入城市/景点/游玩主题
    </div>
    <router-link :to="{name:'city'}">
      <div class="header-right">
        {{this.city}}
        <span class="iconfont arrow-icon">&#xe64a;</span>
      </div>
    </router-link>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
    export default {
      name: "homeHeader",
      computed:{
        ...mapState(['city'])
      }
    }
</script>

<style scoped lang="less">
  @rem: 750/10rem;
  .header{
    display: flex;
    line-height: 86/@rem;
    background: #00bcd4;
    color: #fff;
    .header-left{
      width: 64/@rem;
      float: left;
      .back-icon{
        text-align: center;
        font-size: 37.5/@rem;
      }
    }
    .header-input{
      flex: 1;
      height: 64/@rem;
      line-height: 64/@rem;
      margin-top: 12/@rem;
      margin-left: 10/@rem;
      padding-left: 10/@rem;
      background: #fff;
      font-size: 28/@rem;
      border-radius: 10/@rem;
      color: #ccc;
    }
    .header-right{
      float: right;
      min-width: 128/@rem;
      padding:0 5/@rem;
      font-size: 26/@rem;
      text-align: center;
      color: #FFF;
      .arrow-icon{
        font-size: 26/@rem;
      }
    }
  }
</style>
