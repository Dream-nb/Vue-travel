<template>
  <div class="icons">
    <mt-swipe :auto="0" :show-indicators="false">
      <mt-swipe-item v-for="(page,index) of pages" :key="index">
    <div class="icon" v-for="(item,index) in page" :key="index">
      <img :src="item.imgUrl" alt="">
      <p v-text="item.desc"></p>
    </div>
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
    export default {
      name: "homeIcons",
      props:{
        icons:Array
      },
      data(){
        return{

        }
      },
      computed:{
        pages(){
          const pages = [];
          this.icons.forEach((item,index)=>{
            const page = Math.floor(index/8);
            if( !pages[page] )pages[page]=[];
            pages[page].push(item);
          });
          return pages
        }
      }
    }
</script>

<style scoped lang="less">
  @rem:750/10rem;
 .icons{
   overflow: hidden;
   height: 300/@rem;
   .icon{
     float: left;
     width: 25%;
     margin-top: 15/@rem;
     text-align: center;
     img{
       width: 50%;
       height: 50%;
     }
     p{
       overflow: hidden;
       margin-top: 10/@rem;
       font-size: 20/@rem;
       white-space: nowrap;
       text-overflow: ellipsis;
     }
   }
 }
</style>
