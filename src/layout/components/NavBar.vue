<template>
  <div style="text-align: left; padding-top: 10px">
    <el-button @click="toggleSidebar" align="left">
      <i class="el-icon-s-fold"></i
    ></el-button>
    <span style="margin-left: 10px">首页</span>
    <el-dropdown trigger="click" :hide-on-click="false" class="userSetting">
      <span class="el-dropdown-link">
        <i
          class="el-icon-user-solid"
          style="
            color: #64d9d6;
            border-radius: 50%;
            color: rgb(100, 217, 214);
            border-radius: 50%;
            border: 1px solid rgb(100, 217, 214);
            font-size: 20px;
          "
        />用户<i class="el-icon-arrow-down el-icon--right"></i>
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
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>
<style>
.userSetting {
  float: right;
  right: 40px;
  margin-top: 5px;
}
</style>
