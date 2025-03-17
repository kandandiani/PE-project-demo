/*
 * @Author: your name
 * @Date: 2020-09-20 20:24:10
 * @LastEditTime: 2021-07-16 14:55:09
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \PE-project-demo\vue3.0项目搭建\my-vue3\src\main.ts
 */
import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import router from './router/index'
import store from './store/index'
import JSEncrypt from 'jsencrypt'
const app = createApp(App)
app.config.globalProperties.$getRsaCode = function (str) { // 注册方法
  let pubKey = `-----BEGIN PUBLIC KEY-----
 rqerewrrrweqrwqewrwqrerwqrsfsafafsafsafqrewqrwqrqwreqer
  -----END PUBLIC KEY-----`;// ES6 模板字符串 引用 rsa 公钥
  let encryptStr = new JSEncrypt();
  encryptStr.setPublicKey(pubKey); // 设置 加密公钥
  let data = encryptStr.encrypt(str.toString());  // 进行加密
  return data;
}
// 通过use 将 路由插件安装到 app 中
app.use(router)
app.use(store)

app.mount('#app')
