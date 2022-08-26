<template>
  <el-container>
    <el-aside><sidebar></sidebar></el-aside>
    <el-container>
      <el-header class="header"><NavBar></NavBar> </el-header>
      <el-main class="main"> <router-view></router-view></el-main>
      <el-footer class="footer">天津津普利环保科技股份有限公司</el-footer>
    </el-container>
  </el-container>
</template>
<script>
import NavBar from "./components/NavBar";
import sidebar from "./components/Sidebar";
export default {
  name: "layout",
  components: { sidebar, NavBar },
  created() {
    // 刷新页面时（F11)
    // 因为<router-view>的<keep-alive>，会保留刷新时所在的router
    // 因此需要将router回到index
    // this.$router.push("/main");
  },
};
</script>
<style>
.el-aside {
  width: auto !important;
}
</style>
<style scoped lang="scss">
.el-container {
  height: 100%;
  width: 100%;
  padding: 0px;
  margin: 0;
  .sidebar {
    height: 100%;
    width: 200px !important;
    background: #112f5e;
    overflow: hidden;
  }
  .header {
    height: 50px;
    width: 100%;
  }
  .main {
    height: calc(100vh - 60px);
    width: 100%;
    background: #f0f2f5;
  }
  .footer {
    height: 40px !important;
    padding-top: 10px;
    background: #263445;
    color: #fff;
  }
}
</style>
