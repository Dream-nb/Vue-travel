<template>
  <div id="app">
    <keep-alive >
    <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App',
  created(){
    function remChange() {
      let html = document.getElementsByTagName('html')[0];
      let witdh = html.getBoundingClientRect().width;
      if(witdh >= 750)witdh=750;
      html.style.fontSize = witdh / 10 + 'px';
    }
    remChange();
    window.addEventListener('resize',remChange);
  }
}
</script>

<style scoped>

</style>
