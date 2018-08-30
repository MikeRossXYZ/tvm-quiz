<template>
  <div id="app">
    <navbar></navbar>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import navbar from '@/components/navbar.vue';
  
  @Component({
    components: { navbar },
  })
  export default class App extends Vue {}
</script>
