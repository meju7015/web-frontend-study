import Vue from 'vue'
import routes from './router';

Vue.config.productionTip = false

const app = new Vue({
  data: {
    currentRoute: window.location.pathname
  },
  computed: {
    ViewComponent () {
      return routes[this.currentRoute] || false;
    }
  },
  render (h) { return h(this.ViewComponent); }
}).$mount('#app')

window.addEventListener('popstate', () => {
  app.currentRoute = window.location.pathname;
})
