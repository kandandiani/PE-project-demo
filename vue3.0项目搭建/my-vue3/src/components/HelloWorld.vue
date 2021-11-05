<!--
 * @Author: your name
 * @Date: 2020-09-20 20:24:10
 * @LastEditTime: 2021-05-09 15:41:41
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \react-demof:\JavaScript-Charles\PE-project-demo\vue3.0项目搭建\my-vue3\src\components\HelloWorld.vue
-->
<template>
  <div>
    <h1>{{ msg }}</h1>
    <button @click="count++">count is: {{ count }}</button>
    <p>
      Edit <code>components/HelloWorld.vue</code> to test hot module
      replacement.
    </p>
    <todo-list>
      {{'添加'}}
      <template #btn>{{count}}</template>
    </todo-list>
  </div>
</template>

<script lang="ts">
import todoList from '../views/todo-list.vue'
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  components: {
    todoList
  },
  data() {
    return {
      count: 0,
      todos: {
        text: '123'
      }
    };
  },
  mounted() {
    console.log(this);
  }
};
</script>
