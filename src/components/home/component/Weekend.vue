<template>
  <div>
    <div class="titer">周末去哪儿</div>
    <div class="content">
      <ul>
        <li v-for="(item,index) in weekend" :key="index">
          <div><img class="con-img" :src="item.imgUrl"  alt=""></div>
          <h3>{{item.title}}</h3>
          <p>{{item.desc}}</p></li>
      </ul>
    </div>
  </div>
</template>

<script>
    export default {
      name: "homeWeekend",
      props:{
        weekend:Array
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
    div{
      overflow: hidden;
      height: 0;
      padding-bottom: 37.09%;
      img{
        width: 100%;
      }
    }
    h3{
      margin: 15/@rem 0;
      text-indent: .3rem;
      font-size: 30/@rem;
      font-weight: bold;
    }
    p{
      overflow: hidden;
      text-indent: .3rem;
      font-size: 20/@rem;
      margin-bottom: 30/@rem;
      white-space: nowrap;
      text-overflow: ellipsis;
      color: #555;
    }
  }


</style>
