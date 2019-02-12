<template>
  <div class="hello">
    <home-header></home-header>
    <home-swiper :swiper="swiperList"></home-swiper>
    <home-icons :icons="iconList"></home-icons>
    <home-recommend :recommend="recommendList"></home-recommend>
    <home-weekend :weekend="weekendList"></home-weekend>
  </div>
</template>

<script>
  import homeHeader from './component/Header'
  import homeSwiper from './component/Swiper'
  import homeIcons from './component/Icons'
  import homeRecommend from './component/Recommend'
  import homeWeekend from './component/Weekend'
  import Index from '../../../static/mock/indexData'
  import {mapState} from 'vuex'
export default {
  name: 'home',
  data () {
    return {
      listCity:'',
      swiperList:[],
      iconList:[],
      recommendList:[],
      weekendList:[],
    }
  },
  components:{
    homeHeader,
    homeSwiper,
    homeIcons,
    homeRecommend,
    homeWeekend
  },
  computed:{
    ...mapState(['city'])
  },
  mounted(){
    this.getHomeInfo();
    this.listCity = this.city;
  },
  activated(){
    if (this.listCity !== this.city){
      this.listCity = this.city;
      this.getHomeInfo();
    }
  },
  methods:{
    getHomeInfo(){
      // const url= 'static/mock/' ;
      // this.$ajax(url+'index.json?city='+ this.city).then(
      //   res=>{
      //     const data = res.data.data;
      //     this.iconList = data.iconList;
      //     this.recommendList = data.recommendList;
      //     this.swiperList = data.swiperList;
      //     this.weekendList = data.weekendList;
      //   }
      // );
      const data = Index.index.data;
        this.iconList = data.iconList;
        this.recommendList = data.recommendList;
        this.swiperList = data.swiperList;
        this.weekendList = data.weekendList;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
