import Mock from "mockjs";
import userData from "./userData.json";
//返回一个函数，开发环境下使用
if (process.env.VUE_APP_MOCK) {
  Mock.mock("/api/userinfo", { data: userData });
}
//注意：如果配置了axios的baseURL,在暴露mock的接口时需要加上配置的axios的baseURL
/*Mock.mock("/api/test", {
  id: "@id()",
  username: "@cname()",
  date: "@date(yyyy-MM-dd)",
  description: "@paragraph()",
  email: "@email()",
  "age|18-40": 0,
});*/
