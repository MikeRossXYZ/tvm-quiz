<template>
    <div class="container">
      <nav>
        <div class="nav-brand">
          Time Value of Money Quiz
        </div>
        <ul class="nav-list">
          <li v-for="route in routes" :key="route.name" class="nav-item" v-if="route.inNavbar">
            <router-link class="nav-link" :to="route.path">{{ route.name }}</router-link>
          </li>
        </ul>
      </nav>
    </div><!-- end .container -->
</template>

<style lang="scss" scoped="true">
@import "../styles/index";

nav {
  align-items: center;
  background: $brand-purple;
  border-radius: 0.18rem;
  color: #fff;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0 0 1rem 0;
  padding: 0.75rem;

  @media screen and (max-width: 650px) {
    flex-direction: column;
  }

  .nav-brand {
    font-size: 1.5rem;
    font-weight: bold;
    height: 1.5rem;
    padding: 0.5rem 0 0.5rem 0.5rem;
    text-align: center;

    @media screen and (max-width: 650px) {
      height: auto;
      padding-bottom: 0 0 0.75rem 0;
    }
  }

  ul.nav-list {
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 2rem;
    margin: 0;
    padding: 0;

    @media screen and (max-width: 650px) {
      width: 100%;
    }
  }

  .nav-item {
    border-radius: 0.18rem;
    flex-grow: 1;
    list-style: none;
    text-align: center;

    a {
      color: #fff;
      display: block;
      padding: 0.5rem 0.75rem;
      text-decoration: none;

      &:hover {
        background: $brand-gold;
        color: #222;
      }
    }
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