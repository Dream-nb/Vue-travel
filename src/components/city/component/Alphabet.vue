<template>
    <div class="alphabet">
      <ul>
        <li class="item" v-for="(item) in letters" :key="item" :ref="item"
        @click="handleClick" @touchstart="handleStart" @touchmove="handlemove"
        @touchend="handleend"
        >{{item}}</li>
      </ul>
    </div>
</template>

<script>
    export default {
      name: "alphabet",
      props:{
        cities:Object
      },
      data(){
        return{
          touchStatus:false,
          startY:0,
          timer:null
        }
      },
      updated(){
        this.startY = this.$refs['A'][0].offsetTop;
      },
      computed:{
        letters(){
          const letters = [];
          for(let i in this.cities){
            letters.push(i);
          }
          return letters;
        }
      },
      methods:{
        handleClick(e){
          this.$emit("change",e.target.innerText);
        },
        handleStart(){
          this.touchStatus = true
        },
        handlemove(e){
          if (this.touchStatus){
            if (this.timer){
              clearTimeout(this.timer);
            }
            this.timer= setTimeout(()=>{
              const touchY = e.touches[0].clientY - 78;
              const index = Math.floor((touchY -this.startY)/20);
              if (index >= 0 && index < this.letters.length)
                this.$emit('change',this.letters[index]);
            },16);

          }
        },
        handleend(){
          this.touchStatus =false
        }
      }
    }
</script>

<style scoped lang="less">
  @rem:750/10rem;
  .alphabet{
    ul{
      overflow: hidden;
      display: flex;
      flex-direction: column;
      justify-content: center;
      position: fixed;
      top:158/@rem;
      right:0;
      bottom:0;
      height: 1176/@rem;
      .item{
        font-size: 30/@rem;
        text-align: center;
        line-height: 40/@rem;
        color: #25a4bb;
      }
    }
  }
</style>
