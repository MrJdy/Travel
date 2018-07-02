<template>
  <div>
    <div class="letter" v-show="removeLetter">{{letter}}</div>
    <div class="list" ref="wrapper">
      <div>
        <div class="area">
          <div class="title border-topbottom">您的位置</div>
          <div class="button-list">
            <div class="button-wrapper">
              <div class="button">{{this.city}}</div>
            </div>
          </div>
        </div>
        <div class="area">
          <div class="title border-topbottom">热门城市</div>
          <div class="button-list">
            <div class="button-wrapper needsclick" v-for="item of hotCities" :key="item.id" @click="handleCityClick(item.name)">
              <div class="button">{{item.name}}</div>
            </div>
          </div>
        </div>
        <div class="area" v-for="(item,key) of cities" :key="key" :ref="key">
          <div class="title border-topbottom">{{key}}</div>
          <div class="item-list">
            <div
              class="item border-bottom needsclick"
              v-for="innerItem of item"
              :key="innerItem.id"
              @click="handleCityClick(innerItem.name)"
            >
              {{innerItem.name}}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Bscroll from 'better-scroll'
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'CityList',
  props: {
    hotCities: Array,
    cities: Object,
    letter: String,
    removeLetter: Boolean
  },
  computed: {
    ...mapState(['city'])
  },
  methods: {
    handleCityClick (city) {
      this.changeCity(city)
      this.$router.push('/')
    },
    ...mapMutations(['changeCity'])
  },
  watch: {
    letter () {
      if (this.letter) {
        const element = this.$refs[this.letter][0]
        this.scroll.scrollToElement(element)
      }
    }
  },
  mounted () {
    const option = {
      click: true
    }
    this.scroll = new Bscroll(this.$refs.wrapper, option)
  }
}
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.letter
  z-index 100
  position fixed
  width 1.5rem
  line-height 1.5rem
  left 50%
  top 50%
  border-radius .1rem
  transform translate(-50%, -44%)
  color $bgColor
  font-size .8rem
  background rgba(0, 0, 0, .1)
  text-align center
.border-topbottom
  &:before
    border-color #cccccc
  &:after
    border-color #cccccc
.border-bottom
  &:before
    border-color #cccccc
.list
  overflow hidden
  position absolute
  top 1.78rem
  left 0
  right 0
  bottom 0
  .letter
    z-index 100
    position fixed
    width 1rem
    line-height 1rem
    left 45%
    top 50%
    transform translate(-50%, -50%)
    color $bgColor
    font-size .5rem
    background rgba(0, 0, 0, .1)
    text-align center
  .title
    line-height 0.54rem
    background #eeeeee
    padding-left 0.2rem
    color #666666
    font-size 0.26rem
  .button-list
    overflow hidden
    padding 0.1rem 0.6rem 0.1rem 0.1rem
    .button-wrapper
      float left
      width 33.33%
      .button
        margin 0.1rem 0.1rem
        padding 0.1rem
        text-align center
        border 0.02rem solid #cccccc
        border-radius 0.06rem
  .item-list
    .item
      line-height 0.76rem
      padding-left 0.2rem
</style>
