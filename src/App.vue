<template>
<div id="app" >
  <HeaderComponent />
  <GalleryComponent/>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
</div>
</template>
 

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import Header from './components/Header.vue'
import HeaderComponent from './components/HeaderComponent.vue'
// import GalleryVue from './components/Gallery.vue'
// import Gallery from './components/Gallery.vue'
import GalleryComponent from './components/GalleryComponent.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld,
    // Header,
    HeaderComponent,
    // GalleryVue,
    // Gallery,
    GalleryComponent
}
}
</script>

<style lang ="css">
#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px; */
}
</style>
