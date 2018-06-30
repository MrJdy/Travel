<template>
  <div>
    <detail-banner></detail-banner>
    <detail-header></detail-header>
    <detail-list :list="list"></detail-list>
    <div class="content"></div>
  </div>
</template>
<script>
import DetailBanner from './components/Banner.vue'
import DetailHeader from './components/Header.vue'
import DetailList from './components/List.vue'

export default {
  name: 'Detail',
  components: {
    DetailBanner,
    DetailHeader,
    DetailList
  },
  data () {
    return {
      list: [{
        id: '001',
        title: '成人票',
        children: [{
          id: '001',
          title: '三馆联票',
          children: [{
            title: '去哪连锁'
          }]
        }, {
          id: '002',
          title: '五馆联票'
        }]
      }, {
        id: '002',
        title: '儿童票'
      }, {
        id: '003',
        title: '学生票'
      }, {
        id: '004',
        title: '特惠票'
      }]
    }
  }
}
</script>
<style lang="stylus" scoped>
.content
  height 50rem
</style>
