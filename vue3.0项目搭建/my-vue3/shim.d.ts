/*
 * @Author: your name
 * @Date: 2020-09-20 21:32:44
 * @LastEditTime: 2020-09-20 22:43:25
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \PE-project-demo\vue3.0项目搭建\my-vue3\shim.d.ts
 */
declare module "*.vue" {
  import { Component } from "vue";
  const component: Component;
  export default Component;
}