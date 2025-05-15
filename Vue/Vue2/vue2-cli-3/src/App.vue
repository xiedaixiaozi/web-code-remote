<template>
  <div id="app">
    <h1>Hello Vue-Router</h1>
    <p>Current route path: {{ $route.fullPath }}</p>
    <hr>
    <!-- 路由链接 -->
    <router-link to="/viewA">To ViewA</router-link>
    <hr>
    <!-- 查询参数传参 -->
    <router-link :to="`/viewB?keywords=${b}`">To ViewB</router-link>
    <hr>
    <!-- 动态路由传参 -->
    <router-link to="/viewC">To ViewC</router-link>
    <!-- <router-link :to="`/viewC/${c}`">To ViewC</router-link> -->
    <hr>
    <button @click="toB()">Click To ViewB</button>
    <hr>
    <button @click="toC()">Click To ViewC</button>
    <hr>
    <router-link to="/viewC/childrenViewC">To ChildrenViewC</router-link>
    <hr>
    <!-- 路由视图 -->
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      b: "XDXZ",
      c: "Hello World"
    }
  },
  methods: {
    // 路由路径跳转
    toB() {
      this.$router.push({
        path: "/viewB",
        query: {
          keywords: "toB"
        }
      });
    },
    // 路由名称跳转
    toC() {
      this.$router.push({
        name: "ViewC",
        params: {
          keywords: "toC"
        }
      })
    }
  }
}
</script>

<style>
/* 模糊匹配 */
.router-link-active {
  background-color: pink;
}
/* 精确匹配 */
.router-link-exact-active {
  background-color: skyblue;
}
</style>
