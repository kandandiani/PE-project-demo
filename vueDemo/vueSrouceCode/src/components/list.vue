<!--
 * @Author: your name
 * @Date: 2021-01-18 21:37:38
 * @LastEditTime: 2021-01-18 22:07:22
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vueSrouceCode\src\components\home.vue
-->
<template>
  <div class="list">
    list
    <button @click="handleClick">点击</button>
  </div>
</template>

<script>
export default {
  methods: {
    handleClick () {
      this.$router.push({
        name: 'detail'
      });
    }
  },
  activated () {
    console.log('123');
  }
};
</script>

<style>

</style>
