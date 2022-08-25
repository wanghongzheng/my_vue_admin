module.exports = {
  // NODE_ENV：Node.js 暴露给执行脚本的系统环境变量。通常用于确定在开发环境还是生产环境
  publicPath: "/",
  outputDir: "dist",
  assetsDir: "static",
  runtimeCompiler: true,
  /*  lintOnSave: process.env.NODE_ENV === "development",*/
  productionSourceMap: false, //可以使得打包过后的文件不包含未压缩的.map文件，减少压缩后代码体积
  devServer: {
    port: 8080,
    // 配置不同的后台API地址
  },
};
