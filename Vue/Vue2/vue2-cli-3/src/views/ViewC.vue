<template>
  <div>
    <!-- 动态路由传参接收 -->
    ViewC:{{ $route.params.keywords }}
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'ViewC',
}
</script>

<style>

</style>