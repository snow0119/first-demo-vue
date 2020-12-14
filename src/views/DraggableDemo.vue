<template lang="pug">
  div(class="container")
    vuedraggable(class="music-list", v-model="musicList")
      transition-group
        div(v-for="{musicId, musicName, singer}, index in musicList", :key="musicId") 
          span(class="circle") {{index+1}}
          span {{musicName}} - {{singer}}
          img(src="./sort.png")
</template>
<script>
import vuedraggable from 'vuedraggable'
export default {
  name: 'draggable-demo',
  components: {vuedraggable},
  data () {
    return {
      musicList: [{
        musicId: '1',
        musicName: '喜欢你',
        singer: 'Beyound'
      }, {
        musicId: '2',
        musicName: '太傻',
        singer: '巫启贤'
      }, {
        musicId: '3',
        musicName: '富士山下',
        singer: '陈奕迅'
      }]
    }
  }
}
</script>
<style lang="stylus">
.container
  margin 0 auto

  .music-list
    margin 0
    padding 10px
    list-style none

    div
      position relative
      color #333
      padding 10px 10px
      text-align left 
      margin-bottom 5px
      border-radius 5px
      border 1px solid #ccc
      background-color #fff

    img 
      position absolute
      right 10px
      top 50%
      width 25px
      transform translateY(-50%)

  .circle
    display inline-block
    width 21px
    height 21px
    color #01bad4
    text-align center
    margin-right 10px
    border-radius 30px
    border 2px solid #01bad4
  
</style>