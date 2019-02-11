import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {CHECK_AUTH} from "./store/actions";
import ApiService from "./common/api.service";
import VeeValidate from 'vee-validate';
import VueFilterDateFormat from 'vue-filter-date-format'
import Buefy from 'buefy'

Vue.use(VeeValidate);
Vue.use(Buefy);
Vue.use(VueFilterDateFormat);

Vue.config.productionTip = false;

import hmsFilter from "./filters/hmsFilter";
import cueFilter from "./filters/cueFilter";

Vue.filter('cue', cueFilter)
Vue.filter('hms', hmsFilter)

// use axios
ApiService.init();

router.beforeEach((to, from, next) => {
  store.dispatch(CHECK_AUTH).then(() => {
    if (to.matched.some(record => record.meta.requiresAuth) && !store.getters.isAuthenticated) {
      next('/');
    } else {
      next();
    }
  }).catch(() => {
    next();
  })
});

new Vue({
  router,
  store,
  template: '<App />',
  components: {App},
  el: '#app'
});
