<template>
  <div>
    <div class="title">热销推荐</div>
    <ul>
      <li class="item border-bottom" v-for="item of list" :key="item.id">
        <img class="item-img" :src="item.imgURL">
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'HomeRecommend',
  data () {
    return {
      list: [
        {
          id: '001',
          imgURL: 'http://img1.qunarzz.com/sight/p0/1611/60/601067b5faa1a1bba3.water.jpg_200x200_b72f6d5f.jpg',
          title: '桐柏山淮源',
          desc: '来呀，一起看风景呀'
        },
        {
          id: '002',
          imgURL: 'http://img1.qunarzz.com/sight/p0/1611/60/601067b5faa1a1bba3.water.jpg_200x200_b72f6d5f.jpg',
          title: '桐柏山淮源',
          desc: '来呀，一起看风景呀'
        },
        {
          id: '003',
          imgURL: 'http://img1.qunarzz.com/sight/p0/1611/60/601067b5faa1a1bba3.water.jpg_200x200_b72f6d5f.jpg',
          title: '桐柏山淮源',
          desc: '来呀，一起看风景呀'
        },
        {
          id: '004',
          imgURL: 'http://img1.qunarzz.com/sight/p0/1611/60/601067b5faa1a1bba3.water.jpg_200x200_b72f6d5f.jpg',
          title: '桐柏山淮源',
          desc: '来呀，一起看风景呀'
        },
        {
          id: '005',
          imgURL: 'http://img1.qunarzz.com/sight/p0/1611/60/601067b5faa1a1bba3.water.jpg_200x200_b72f6d5f.jpg',
          title: '桐柏山淮源',
          desc: '来呀，一起看风景呀'
        }
      ]
    }
  }
}
</script>
<style lang="stylus" scoped>
  @import '~styles/mixins.styl'
  .title
    margin-top .2rem
    line-height .8rem
    background #eeeeee
    text-indent .2rem
  .item
    overflow hidden
    display flex
    height 1.9rem
    .item-img
      width 1.7rem
      height 1.7rem
      padding .1rem
    .item-info
      flex 1
      padding .1rem
      min-width 0
      .item-title
        line-height .54rem
        font-size .32rem
        ellipsis()
      .item-desc
        line-height .4rem
        color #cccccc
        ellipsis()
      .item-button
        line-height .44rem
        margin-top .16rem
        background #ff9300
        padding 0 .2rem
        border-radius .06rem
        color #fff
</style>
