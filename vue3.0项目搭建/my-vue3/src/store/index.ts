/*
 * @Author: your name
 * @Date: 2020-09-20 22:29:51
 * @LastEditTime: 2021-05-09 16:16:33
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \react-demof:\JavaScript-Charles\PE-project-demo\vue3.0项目搭建\my-vue3\src\store\index.ts
 */
import { createStore } from 'vuex'


interface State {
  userName: string
}

export default createStore({
  state(): State {
    return {
      userName: "子君",
    };
  },
});