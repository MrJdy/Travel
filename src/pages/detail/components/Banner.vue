<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img
        class="banner-img"
        src="http://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_600x330_bf9c4904.jpg"
      />
      <div class="banner-info">
        <div class="banner-title">
          大连圣亚海洋世界(AAAA景区)
        </div>
        <div class="banner-number">
          <span class="iconfont banner-icon">&#xe600;</span>
          3
        </div>
      </div>
    </div>
    <common-gallery :imgs="imgs" v-show="showGallery" @close="hanleGrallaryClose"></common-gallery>
  </div>
</template>
<script>
import CommonGallery from 'common/gallery/Gallery'
export default {
  name: 'Banner',
  data () {
    return {
      showGallery: false,
      imgs: ['http://img1.qunarzz.com/sight/p0/1709/9a/9abf0a28659cc45da3.img.png_r_800x800_a02a244c.png',
        'http://img1.qunarzz.com/sight/p0/1411/1b/b79fb3c3d12db4bbcc0f46821ac00ead.water.jpg_r_800x800_c8500d83.jpg'
      ]
    }
  },
  methods: {
    handleBannerClick () {
      this.showGallery = true
    },
    hanleGrallaryClose () {
      this.showGallery = false
    }
  },
  components: {
    CommonGallery
  }
}
</script>
<style lang="stylus" scoped>
  .banner
    position relative
    overflow hidden
    height 0
    padding-bottom 55%
    .banner-img
      width 100%
    .banner-info
      display flex
      position absolute
      left 0
      right 0
      bottom 0
      line-height .6rem
      color #ffffff
      background-image linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, .8))
      .banner-title
        flex 1
        font-size .32rem
        padding 0 .2rem
      .banner-number
        height .32rem
        line-height .32rem
        margin-top .14rem
        padding 0 .4rem
        border-radius .2rem
        background rgba(0, 0, 0, .5)
        font-size .24rem
        .banner-icon
          font-size .24rem
</style>
