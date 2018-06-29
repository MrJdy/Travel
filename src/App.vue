<template>
  <div id="app">
    <!-- 路由页面执行过后就放在内存中，再次加载重复页面是直接从内存拿取，优化ajax请求次数 -->
    <keep-alive>
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

</style>
