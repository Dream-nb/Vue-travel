<template>
    <transition>
      <slot></slot>
    </transition>
</template>

<script>
    export default {
        name: "fade-animation"
    }
</script>

<style scoped lang="less">
  .v-enter,.v-leave-to{
    opacity: 0;
  }
  .v-enter-active,.v-leave-active{
    -webkit-transition:opacity .5s;
    -moz-transition:  opacity .5s;
    -ms-transition:  opacity .5s;
    -o-transition:  opacity .5s;
    transition:  opacity .5s;
  }
</style>
