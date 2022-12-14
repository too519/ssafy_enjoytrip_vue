/*!

 =========================================================
 * Vue Now UI Kit - v1.1.0
 =========================================================

 * Product Page: https://www.creative-tim.com/product/now-ui-kit
 * Copyright 2019 Creative Tim (http://www.creative-tim.com)

 * Designed by www.invisionapp.com Coded by www.creative-tim.com

 =========================================================

 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

 */
import Vue from "vue";
import App from "./App.vue";
// You can change this import to `import router from './starterRouter'` to quickly start development from a blank layout.
import router from "./router";
import store from "./store";
import NowUiKit from "./plugins/now-ui-kit";

Vue.config.productionTip = false;

Vue.use(NowUiKit);

// EnjoyTrip
import VueMasonry from "vue-masonry-css";

import VueWeather from "vue-weather-widget";

Vue.use(VueMasonry);
Vue.use(VueWeather);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
