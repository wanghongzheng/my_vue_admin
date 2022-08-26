<template>
  <div class="NavBarContain">
    <el-button @click="toggleSidebar" align="left">
      <i class="el-icon-s-fold"></i>
    </el-button>
    <span class="currentPage">首页</span>
    <el-dropdown trigger="click" :hide-on-click="false" class="userSetting">
      <span class="el-dropdown-link">
        <i class="el-icon-user-solid" />
        用户
        <i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item icon="el-icon-plus">修改密码</el-dropdown-item>
        <el-dropdown-item icon="el-icon-circle-plus">退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>
<script>
export default {
  name: "navBar",
  data() {
    return {
      isCollapse: false,
    };
  },
  methods: {
    toggleSidebar() {
      if (this.isCollapse) {
        this.isCollapse = false;
      } else {
        this.isCollapse = true;
      }
      this.$store.dispatch("toggleSidebarStatus", this.isCollapse);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>
<style lang="scss" scoped>
.NavBarContain {
  text-align: left;
  padding-top: 10px;
  .currentPage {
    margin-left: 10px;
  }
  .el-icon-user-solid {
    color: #64d9d6;
    border-radius: 50%;
    color: rgb(100, 217, 214);
    border-radius: 50%;
    border: 1px solid rgb(100, 217, 214);
    font-size: 20px;
  }
}
.userSetting {
  float: right;
  right: 15px;
  margin-top: 5px;
}
</style>
