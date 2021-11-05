/*
 * @Author: your name
 * @Date: 2020-09-20 22:25:18
 * @LastEditTime: 2021-05-07 23:05:07
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \react-demof:\JavaScript-Charles\PE-project-demo\vue3.0项目搭建\my-vue3\src\router\index.ts
 */
import { createRouter, createWebHashHistory } from 'vue-router'
// 在 Vue-router新版本中，需要使用createRouter来创建路由
export default createRouter({
  // 指定路由的模式,此处使用的是hash模式
  history: createWebHashHistory(),
  // 路由地址
  routes: [{
    path: '/',
    // 必须添加.vue后缀
    component: () => import('../components/HelloWorld.vue')
  },{
    path: '/todolist',
    // 必须添加.vue后缀
    component: () => import('../views/todo-list.vue')
  }]
})