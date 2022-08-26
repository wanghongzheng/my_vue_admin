<template>
  <div>
    <el-button @click="loginIn">登录</el-button>
  </div>
</template>
<script>
export default {
  name: "login",
  methods: {
    loginIn() {
      this.$router.push({ path: "/layout" });
    },
  },
};
</script>
