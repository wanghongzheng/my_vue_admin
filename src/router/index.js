import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err);
};
export default new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "login",
      component: (resolve) => require(["../views/login/index"], resolve),
    },
    {
      path: "/layout",
      component: (resolve) => require(["../views/layout/index"], resolve),
      children: [
        {
          path: "main",
          component: (resolve) =>
            require(["../views/layout/main/index"], resolve),
        },
      ],
    },
  ],
});
