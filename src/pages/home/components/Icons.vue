<template>
  <div class="icons">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(page, index) of pages" :key="index">
        <div
          class="icon"
          v-for="item of page"
          :key="item.id"
        >
          <div class="icon-img">
            <img class="icon-img-content" :src="item.imgURL">
          </div>
          <p class="icon-desc" v-text="item.title"></p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeIcons',
  data () {
    return {
      swiperOption: {
        autoplay: false
      },
      iconList: [
        {
          id: '001',
          imgURL:
            'http://gw.alicdn.com/tfs/TB1lw9HfgoQMeJjy0FpXXcTxpXa-225-183.png',
          title: '机票'
        },
        {
          id: '002',
          imgURL:
            'http://gw.alicdn.com/tfs/TB1KsxcbjihSKJjy0FiXXcuiFXa-225-183.png',
          title: '酒店客栈'
        },
        {
          id: '003',
          imgURL:
            'http://gw.alicdn.com/tfs/TB1YxNfbjihSKJjy0FlXXadEXXa-225-183.png',
          title: '火车票'
        },
        {
          id: '004',
          imgURL:
            'http://gw.alicdn.com/tfs/TB1A0hdbaagSKJjy0FhXXcrbFXa-225-183.png',
          title: '汽车票'
        },
        {
          id: '005',
          imgURL:
            'http://gw.alicdn.com/tfs/TB1G_E.a6ihSKJjy0FeXXbJtpXa-227-183.png',
          title: '用车'
        },
        {
          id: '006',
          imgURL:
            'http://gw.alicdn.com/tfs/TB1YhCPfgMPMeJjy1XcXXXpppXa-225-183.png',
          title: '旅游线路'
        },
        {
          id: '007',
          imgURL:
            'http://gw.alicdn.com/tfs/TB1NBJibaagSKJjy0FcXXcZeVXa-225-183.png',
          title: '周边游'
        },
        {
          id: '008',
          imgURL:
            'http://gw.alicdn.com/tfs/TB1wtlcbjihSKJjy0FfXXbGzFXa-225-183.png',
          title: '门票'
        },
        {
          id: '009',
          imgURL:
            'http://gw.alicdn.com/tfs/TB13_9IfgoQMeJjy0FpXXcTxpXa-225-183.png',
          title: '签到'
        }
      ]
    }
  },
  computed: {
    pages () {
      const pages = []
      this.iconList.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
@import '~styles/mixins.styl'
.icons >>> .swiper-container
  height 0
  padding-bottom 50%
  .icon
    position relative
    overflow hidden
    float left
    width 25%
    height 0
    padding-bottom 25%
    .icon-img
      position absolute
      top 0
      left 0
      right 0
      bottom 0rem
      box-sizing border-box
      padding 0.2rem
      .icon-img-content
        display block
        margin 0 auto
        height 100%
    .icon-desc
      position absolute
      left 0
      right 0
      bottom 0
      height 0.44rem
      line-height 0.44rem
      color $darkTextColor
      text-align center
      ellipsis()
</style>
