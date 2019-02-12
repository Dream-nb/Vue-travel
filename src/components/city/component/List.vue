<template>
    <div class="list" ref="wrapper">
      <div>
        <div class="list-title" >
          <div class="titer">当前城市</div>
          <div class="list-button">
            <div class="button-tip">
              <div class="button">{{this.currentCity}}</div>
            </div>
          </div>
        </div>
        <div class="list-title">
          <div class="titer">热门城市</div>
          <div class="list-button">
            <div class="button-tip"  v-for="(item,index) in hot" :key="index" @click="handleCityclick(item.name)">
              <div class="button" >{{item.name}}</div>
            </div>
          </div>
        </div>
        <div class="list-title" v-for="(value,key,index) in cities" :ref="key" :key="key">
          <div class="titer">{{key}}</div>
          <div class="item-list">
            <ul>
              <li v-for="item in value" @click="handleCityclick(item.name)" :key="item.id">{{item.name}}</li>
            </ul>
          </div>
      </div>
      </div>
    </div>
</template>

<script>
  import BScroll from 'better-scroll';
  import { mapState, mapMutations } from 'vuex'
    export default {
      name: "cityList",
      props:{
        cities:Object,
        hot:Array,
        letter:String
      },
      data(){
        return{
          scroll:''
        }
      },
      methods:{
        handleCityclick(city){
          //this.$store.commit('changeCity',city)
          this.changeCity(city);
          this.$router.push('/');
        },
        ...mapMutations(['changeCity'])
      },
      computed:{
        ...mapState({
          currentCity:'city'
        })
      },
      watch:{
        letter(){
          if (this.letter){
            const element = this.$refs[this.letter][0];
            this.scroll.scrollToElement(element);
          }
        }
      },
      mounted(){
        this.$nextTick(function () {
          setTimeout(() => {
            const options = {
              scrollY: true, // 因为scrollY默认为true，其实可以省略
              mouseWheel: true,
              click: true,
              taps: true
            };
            this.scroll = new BScroll(this.$refs.wrapper, options)
          }, 20)
        });

      }
    }
</script>

<style scoped lang="less">
  @rem:750/10rem;
  .list {
    overflow: hidden;
    position: absolute;
    top:154/@rem;
    left:0;
    right: 0;
    bottom: 0;
    .titer {
      height: 66/@rem;
      border-top: 1/@rem solid #ccc;
      border-bottom: 1/@rem solid #ccc;
      background-color: #eee;
      color: #666;
      font-size: 28/@rem;
      line-height: 66/@rem;
      text-indent: .2rem;
    }
    .list-button {
      overflow: hidden;
      padding: 10/@rem 60/@rem 10/@rem 10/@rem;
      .button-tip {
        float: left;
        width: 33.33%;
        .button {
          margin: 10/@rem;
          padding: 10/@rem 0;
          border: 2/@rem solid #555;
          text-align: center;
          font-size: 30/@rem;
          font-weight: bold;
          border-radius: 8/@rem;
        }
      }
    }
    .item-list {
      ul {
        li {
          border-bottom: 2/@rem solid #ccc;
          color: #666;
          text-indent: .2rem;
          font-size: 34/@rem;
          line-height: 74/@rem;
        }
      }
    }
  }
</style>
