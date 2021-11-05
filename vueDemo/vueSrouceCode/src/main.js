/*
 * @Author: your name
 * @Date: 2020-04-11 21:21:53
 * @LastEditTime: 2021-01-18 21:26:40
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \PE-project-demo\vueDemo\vueSrouceCode\src\main.js
 */
// import Vue from 'vue';

// var app = new Vue({
//   el: '#app',
//   data: {
//     message: 'hello world'
//   }
// });

// console.log(app);
import Vue from 'vue';
import App from './App';
import router from './router/index';
Vue.config.productionTip = false;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
});
