<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-lg-8">
        <h1>Scoreboard</h1>
        <p>Yet to be implemented.</p>
      </div><!-- end .col-lg-8 -->
    </div><!-- end .row -->
  </div><!-- end .container -->
</template>

<style lang="scss" scoped="true">
@import "../styles/index";

.navbar-brand {
  margin-right: 2rem;
}

nav {
  margin-bottom: 1.5rem;

  .nav-link.router-link-active {
    color: white;
    font-weight: bold;
  }
}
</style>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';

  @Component
  export default class Scoreboard extends Vue {
  }
</script>