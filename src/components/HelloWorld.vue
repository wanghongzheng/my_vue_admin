<template>
  <el-table :data="tableData" :height="height">
    <el-table-column prop="name" label="姓名" min-width="180">
    </el-table-column>
    <el-table-column prop="age" label="年龄" min-width="180"> </el-table-column>
    <el-table-column prop="grade" label="年级" min-width="180">
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      tableData: [],
      height: "300",
    };
  },
  created() {
    this.$http.get("/api/userinfo").then((res) => {
      const { data } = res.data;
      console.info(data);
      this.tableData = data;
    });
  },
};
</script>
