<template>
    <div class="list">
      <div class="list-title" v-for="(item,index) in list" :key="index">
        <div class="title">
          <span class="title-icon"></span>{{item.title}}
        </div>
        <div class="children" v-if="item.children">
          <list :list="item.children"></list>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "list",
      props:{
          list:Array
      }
    }
</script>

<style scoped lang="less">
@rem:750/10rem;
  .title{
    border-bottom: 2/@rem solid #ccc;
    line-height: 56/@rem;
    font-size: 28/@rem;
    font-weight: bold;
    text-indent: .2rem;
    .title-icon{
      position: relative;
      left: .06rem;
      top: .1rem;
      display: inline-block;
      width: .40rem;
      height: .40rem;
      background: url(http://s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -.45rem no-repeat;
      margin-right: .2rem;
      background-size: .5rem 3rem;
    }
  }
  .children{
    padding:0 .2rem;
  }
</style>
