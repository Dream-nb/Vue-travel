<template>
    <div class="recommend">
      <div class="titer">热销推荐</div>
      <div class="content">
        <ul>
          <router-link tag="li" :to="{name:'detail',query:{id:item.id}}" v-for="(item,index) in recommend" :key="index">
            <img :src="item.imgUrl" alt="">
            <div class="right">
            <h3 >{{item.title}}</h3>
            <p>{{item.desc}}</p>
            <p class="price"><i style="color: #dc7e28;">&yen;{{item.price}}</i>&nbsp;起</p>
            </div>
          </router-link>
        </ul>
      </div>
    </div>
</template>

<script>
    export default {
      name: "homeRecommend",
      props:{
        recommend:Array
      },
      data(){
        return{

        }
      }
    }
</script>

<style scoped lang="less">
  @rem:750/10rem;
  .titer{
    height: 66/@rem;
    background-color: #eee;
    font-size: 28/@rem;
    line-height: 66/@rem;
    text-indent: .2rem;
  }
  .content{
    li {
      display: flex;
      height: 128/@rem;
      padding: 20/@rem;
      border-bottom: 1px solid #aaa;
      img {
        width: 22%;
      }
      .right{
        flex: 1;
        min-width: 0;
        font-size: 28/@rem;
        text-indent: .3rem;
        h3 {
          padding-top: 10/@rem;
          font-size: 32/@rem;
          font-weight: bold;
        }
        p{
          overflow: hidden;
          padding-top: 10/@rem;
          color: #aaa;
          white-space: nowrap;
          text-overflow: ellipsis;
        }
        .price{
          margin-top: 10/@rem;
          i{
            font-weight: bold;
            font-size: 32/@rem;
          }
        }
      }
    }
  }
</style>
