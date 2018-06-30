<template>
  <div>
    <div v-show="showBack">
      <router-link tag="div" to="/" class="header-abs" v-show="showAbs">
        <div class="iconfont header-back">&#xe624;</div>
      </router-link>
    </div>
    <div
      class="header-fixed"
      v-show="!showAbs"
      :style="opacityStyle"
    >
      <router-link to="/">
        <div class="iconfont header-fixed-back">&#xe624;</div>
      </router-link>
      景点详情
    </div>
  </div>
</template>
<script>
export default {
  name: 'DetailHeader',
  data () {
    return {
      showAbs: true,
      showBack: true,
      opacityStyle: {
        opacity: 0
      }
    }
  },
  methods: {
    handleScroll () {
      const top = document.documentElement.scrollTop
      if (top > 5) {
        this.showBack = false
      } else {
        this.showBack = true
      }
      if (top > 40) {
        let opacity = top / 120
        opacity = opacity > 1 ? 1 : opacity
        this.opacityStyle = { opacity }
        this.showAbs = false
      } else {
        this.showAbs = true
      }
    }
  },
  activated () {
    window.addEventListener('scroll', this.handleScroll)
  },
  // 解绑全局事件
  deactivated () {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>
<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .header-abs
    position absolute
    left .1rem
    top .1rem
    width .7rem
    height .7rem
    line-height .7rem
    border-radius 50%
    background rgba(0, 0, 0, .5)
    text-align center
    display flex
    flex-direction column
    justify-content center
    .header-back
      font-size .35rem
      color #ffffff
      font-weight bold
  .header-fixed
    z-index 2
    position fixed
    top 0
    left 0
    right 0
    height $headerHeight
    line-height $headerHeight
    text-align center
    color #ffffff
    background $bgColor
    font-size .32rem
    .header-fixed-back
      position absolute
      width .64rem
      top 0
      left 0
      text-align center
      color #ffffff
      font-size .4rem
</style>
