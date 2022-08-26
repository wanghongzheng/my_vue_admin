<template>
  <div class="contain">
    <Header></Header>
    <router-view></router-view>
  </div>
</template>
<script>
import Header from "./Header";
export default {
  name: "layout",
  components: { Header },
  created() {
    // 刷新页面时（F11)
    // 因为<router-view>的<keep-alive>，会保留刷新时所在的router
    // 因此需要将router回到index
    this.$router.push("/layout/main");
  },
};
</script>
<style>
.contain {
  height: 100%;
  width: 100%;
  background: #091220;
}
</style>
