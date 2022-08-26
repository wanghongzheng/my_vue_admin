import Vuex from "vuex";
import Vue from "vue";
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    isCollapse: false,
  },
  mutations: {
    toggleSidebarStatus(state, isCollapse) {
      state.isCollapse = isCollapse;
    },
  },
  actions: {
    toggleSidebarStatus(context, value) {
      context.commit("toggleSidebarStatus", value);
    },
  },
});
export default store;
