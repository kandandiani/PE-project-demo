<!--
 * @Author: your name
 * @Date: 2020-04-11 21:21:53
 * @LastEditTime: 2021-01-18 22:07:08
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \PE-project-demo\vueDemo\vueSrouceCode\src\App.vue
-->
<template>
  <div id="app">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
import demo from '../src/components/demo';
export default {
  name: 'App',
  components: { demo }
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
