<template>
    <div class="search">
      <div>
      <input v-model="keyword" class="search-input" type="text" placeholder="输入城市名或拼音">
      </div>
      <div class="search-content" ref="sear" v-show="keyword">
        <ul>
          <li v-for="item of list" v-show="keyword" :key="item.id" @click="handleCity(item.name)">{{item.name}}</li>
          <li v-show="hasNodata">没有匹配到数据，请检查内容</li>
        </ul>
      </div>
    </div>
</template>

<script>
  import BSroll from 'better-scroll'
  import {mapMutations} from 'vuex'
    export default {
      name: "search",
      props:{
        cities:Object
      },
      data(){
        return{
          keyword:'',
          list:[],
          timer:null,
          show:false
        }
      },
      methods:{
        handleCity(city){
          console.log(1);
          this.changeCity(city);
          this.$router.push('/');
          this.keyword='';
        },
        ...mapMutations(['changeCity'])
      },
      mounted(){
        this.scroll = new BSroll(this.$refs.sear)
      },
      computed:{
        hasNodata(){
          return !this.list.length;
        },
      },
      watch:{
        keyword(){
          if (this.timer){
            clearTimeout(this.timer);
          }
          this.timer=setTimeout(()=>{
            const result = [];
            for(let i in this.cities){
              this.cities[i].forEach(value=>{
                if(value.spell.indexOf(this.keyword) > -1 || value.name.indexOf(this.keyword) > -1){
                  result.push(value);
                }
              });
            this.list = result;

            }
          },100);
          if (this.list.length === 0)this.show=true;
        }
      }
    }
</script>

<style scoped lang="less">
  @rem:750/10rem;
  .search{
    height: 70/@rem;
    padding: 0 10/@rem;
    background-color: #00bcd4;
    .search-input{
      box-sizing: border-box;
      display: block;
      width: 100%;
      padding: 0 10/@rem;
      color: #666;
      font-size: 30/@rem;
      text-align: center;
      line-height: 60/@rem;
      border-radius: 10/@rem;
    }
    .search-content{
      overflow:hidden;
      position: absolute;
      top: 154/@rem;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: #f8f8f8;
      z-index: 3;
      ul{
        li{
          border-bottom: 2/@rem solid #ccc;
          font-size: 32/@rem;
          line-height: 64/@rem;
          text-indent: .2rem;
          color: #666;
        }
      }
    }
  }
</style>
