/*
 * @Author: your name
 * @Date: 2020-04-11 21:21:53
 * @LastEditTime: 2021-01-18 21:44:13
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \PE-project-demo\vueDemo\vueSrouceCode\src\router\index.js
 */
import Vue from 'vue';
import Router from 'vue-router';
import demo from '@/components/demo';
import list from '@/components/list';
import detail from '@/components/detail';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'demo',
      component: demo,
      meta: {
        keepAlive: true
      }
    },
    {
      path: '/list',
      name: 'list',
      component: list,
      meta: {
        keepAlive: true
      }
    },
    {
      path: '/detail',
      name: 'detail',
      component: detail,
      meta: {
        keepAlive: true
      }
    }
  ]
});
