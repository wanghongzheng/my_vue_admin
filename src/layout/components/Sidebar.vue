<template>
  <el-menu
    default-active="1-4-1"
    :class="
      toggleStatus
        ? 'el-menu-vertical-demo collapseNavBar'
        : 'el-menu-vertical-demo expendNavBar'
    "
    @open="handleOpen"
    @close="handleClose"
    :collapse="toggleStatus"
    background-color="#112F5E"
    text-color="#fff"
    active-text-color="#ffd04b"
  >
    <span v-for="(item, index) in menus" :key="index">
      <el-submenu
        v-if="item.children && item.children.length > 0"
        :index="index"
      >
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">{{ item.title }}</span>
        </template>
        <el-menu-item-group
          v-for="(itemChild, index) in item.children"
          :key="index"
        >
          <el-menu-item index="1-1">{{ itemChild.title }}</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-menu-item :index="index" v-else>
        <i class="el-icon-menu"></i>
        <span slot="title">{{ item.title }}</span>
      </el-menu-item>
    </span>
  </el-menu>
</template>
<script>
export default {
  name: "rightHeader",
  data() {
    return {
      menus: [
        {
          name: "produceMange",
          title: "产品管理",
          children: [],
        },
        {
          name: "solutionMange",
          title: "解决方案",
          children: [],
        },
        {
          name: "newsMange",
          title: "新闻管理",
          children: [
            {
              name: "news",
              title: "企业新闻",
              meta: { title: "Dashboard", icon: "dashboard", affix: true },
            },
            {
              name: "policy",
              title: "行业新闻",
              meta: { title: "Dashboard", icon: "dashboard", affix: true },
            },
          ],
        },
      ],
    };
  },
  computed: {
    toggleStatus: function () {
      console.info(this.$store);
      return this.$store.state.isCollapse;
    },
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>
<style lang="scss">
.el-aside {
  width: auto !important;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  height: 100%;
  background: #112f5e;
}
.el-menu-vertical-demo {
  background: #112f5e;
  height: 100%;
}
.expendNavBar {
  width: 230px;
}
.collapseNavBar {
  width: 70px;
}
.el-menu--collapse .el-submenu__title span {
  display: none;
}
.el-menu--collapse .el-submenu__icon-arrow {
  display: none;
}
</style>
