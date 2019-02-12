<template>
    <div class="header">
      <router-link :to="{name:'home'}">
      <div class="header-left">
        <div class="iconfont back-icon">&#xe624;</div>
      </div>
      </router-link>
      城市选择
    </div>
</template>

<script>
    export default {
        name: "cityHeader"
    }
</script>

<style scoped lang="less">
  @rem:750/10rem;
  .header{
    position: relative;
    height: 86/@rem;
    background-color: #00bcd4;
    text-align: center;
    line-height: 86/@rem;
    font-size: 37.5/@rem;
    color: #fff;
    .header-left{
      position: absolute;
      top: 0;
      left: 0;
      width: 64/@rem;
      float: left;
      .back-icon{
        text-align: center;
        font-size: 37.5/@rem;
        color: #fff;
      }
    }
  }
</style>
