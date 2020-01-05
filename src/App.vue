<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import storage from "./storage/index";
export default {
  name: "app",
  components: {},
  mounted() {
    //Storage测试
    //mall   对应的value   {"user":{"abc":{"a":1},"abcd":{"aa":2}}}
    // storage.setItem('b',1)
    // storage.setItem("user", { aa: 1 });
    // storage.setItem('abcd', { aa: 2 }, 'user');
    // storage.clear('b');
    storage.clear('aa','user');
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
