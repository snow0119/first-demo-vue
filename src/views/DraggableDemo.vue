<template lang="pug">
  div(class="container")
    ul
      li(v-for="{musicId, musicName, singer} in musicList", :key="musicId") 
        span {{musicName}} {{singer}}
        img(src="./sort.png")
        
</template>
<script>
export default {
  name: 'draggable-name',
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
      }]
    }
  }
}
</script>
<style lang="stylus">
.container
  margin 0 auto
  
</style>