import Vue from "vue";
import App from "./App.vue";
import axios from "axios";
import ElementUi from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import "./../mock/index.js";
import router from "./router";
Vue.config.productionTip = false;

Vue.use(ElementUi);
Vue.prototype.$http = axios;
new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
