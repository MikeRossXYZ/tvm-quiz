<template>
    <div class="container">
      <nav class="navbar navbar-expand-lg bg-dark navbar-dark rounded">
        <a class="navbar-brand" href="#">TVM Quiz</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse"
          data-target="#navbarsExample09" aria-controls="navbarsExample09"
          aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarsExample09">
          <ul class="navbar-nav mr-auto">
            <li v-for="route in routes" :key="route.name" class="nav-item">
              <router-link class="nav-link" :to="route.path">{{ route.name }}</router-link>
            </li>
          </ul>
        </div>
      </nav>
    </div><!-- end .container -->
</template>

<style lang="scss" scoped="true">
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
  import { Component, Prop, Vue } from 'vue-property-decorator';
  import routes from '@/routes';

  @Component
  export default class Navbar extends Vue {
    private routes = routes;
  }
</script>