<template lang="pug">
  div(class="container")
    ul
      li(v-for="{musicId, musicName, singer} in musicList", :key="musicId") 
        span {{musicName}} - {{singer}}
        img(src="./sort.png")
        
</template>
<script>
export default {
  name: 'draggable-demo',
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

  ul
    margin 0
    padding 10px
    list-style none

    li
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
  
</style>