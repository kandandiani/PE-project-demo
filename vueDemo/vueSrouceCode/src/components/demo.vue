<!--
 * @Author: your name
 * @Date: 2020-09-08 18:00:52
 * @LastEditTime: 2021-01-18 21:45:46
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \PE-project-demo\vueDemo\vueSrouceCode\src\components\demo.vue
-->
<template>
  <div class="demo">
    <div v-for="(item, index) in info" :key='index'>
      <li>{{item.name}}</li>
      <div v-for="(item, index) in info" :key='index'>
        {{item}}
      </div>
      <button @click="showIndex(index)">点击</button>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data () {
    return {
      info: [
        { name: 1 },
        { name: 2 },
        { name: 3 },
        { name: 4 },
        { name: 5 },
        { name: 6 }
      ]
    };
  },
  // 方法集合
  methods: {
    showIndex (v) {
      console.log(v);
      this.$router.push({
        name: 'list'
      });
    }
  },
  created () {},
  mounted () {},
  activated () {
    console.log('123');
  }
};
</script>
<style>
/* // @import url(); 引入公共css类 */
</style>
