<template>
    <div>
      <detail-banner :sightName="sightName" :bannerImg="bannerImg" :gallaryImgs="gallaryImgs"></detail-banner>
      <detail-header></detail-header>
      <div class="content">
        <detail-list :list="categoryList"></detail-list>
      </div>
    </div>
</template>

<script>
  import detailBanner from '../detail/component/Banner'
  import detailHeader from '../detail/component/Header'
  import detailList from '../detail/component/List'
  import Detail from '../../../static/mock/detailData'
  export default {
    name: "detail",
    data(){
      return{
        categoryList:[],
        sightName:'',
        bannerImg:'',
        gallaryImgs:[],
      }
    },
    components:{
      detailBanner,
      detailHeader,
      detailList
    },
    mounted(){
      // const url='static/mock/';
      // this.$ajax.get(url+'detail.json?id='+ this.$route.query.id).then(res=>{
      //   const data =res.data.data;
      //   this.categoryList = data.categoryList;
      //   this.sightName = data.sightName;
      //   this.bannerImg=data.bannerImg;
      //   this.gallaryImgs=data.gallaryImgs
      // })
      const data =Detail.detail.data;
      this.categoryList = data.categoryList;
      this.sightName = data.sightName;
      this.bannerImg=data.bannerImg;
      this.gallaryImgs=data.gallaryImgs
    }
  }
</script>

<style scoped lang="less">
  @rem:750/10rem;
  .content{
    height: 40rem;
  }
</style>
