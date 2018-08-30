import Vue from 'vue';
import App from './App.vue';
import router from './router';
import './registerServiceWorker';

// CSS
import 'bootstrap/scss/bootstrap.scss';

// JS
import 'bootstrap/dist/js/bootstrap.min.js';

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
