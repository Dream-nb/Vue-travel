<template>
  <div>
    <city-header></city-header>
    <city-search :cities="cities"></city-search>
    <city-list :cities="cities" :hot="hotcities" :letter="letter"></city-list>
    <city-alphabet :cities="cities" @change="handlechange"></city-alphabet>
  </div>
</template>

<script>
  import cityHeader from './component/Header'
  import citySearch from './component/Search'
  import cityList from './component/List'
  import cityAlphabet from './component/Alphabet'
  import City from '../../../static/mock/cityData'
    export default {
      name: "city",
      data(){
        return{
          cities:{},
          hotcities:[],
          letter:''
        }
      },
      mounted(){
        const data = City.Ctiy.data;
        this.cities=data.cities;
        this.hotcities = data.hotCities;
      },
      methods:{
        handlechange(letter){
          this.letter=letter;
        },
        // handleinit(){
        //   const url='static/mock/';
        //   this.$ajax.get(url+'city.json').then(res=>{
        //     const data =res.data.data;
        //     this.cities = data.cities;
        //     this.hotcities = data.hotCities;
        //   })
        // }
      },
      components:{
        cityHeader,
        citySearch,
        cityList,
        cityAlphabet
      }
    }
</script>

<style scoped lang="less">

</style>
