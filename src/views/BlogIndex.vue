<template lang="pug">
  div(class="blog")
    header Branding
    section(class="left")
      ul
        li 推荐
        li 资讯
        li 人工智能
        li 云计算/大数据
        li 区块链
        li 数据库
        li 程序人生
        li 游戏开发
        li 研发管理
        li 前端
        li 移动开发
        li 物联网
        li 运维
        li 更多
    section(class="center")
      div
        h1 更好的科技，更智能的奥运
        p 2017 年 1 月 19 日，国际奥林匹克委员会与阿里巴巴集团在瑞士达沃斯联合宣布，双方达成期限直至 2028 年的长期合作。阿里巴巴将加入奥林匹克全球合作伙伴（The Olympic Partner、「TOP」）赞助计划，成为「云服务」及「电子商务平台服务」的官方合作伙伴，以及奥林匹克频道的创始合作伙伴。
      div
        h1 微信之父张小龙：跳一跳只是试水 微信赞赏功能将恢复
        p 1月15日，微信创始人、腾讯高级副总裁张小龙现身广州微信公开课Pro版，屏幕右侧是他现场打“跳一跳”，打到900多分，他说自己在现场太紧张，平时打到过6000多分。现场打“跳一跳”背后，是张小龙对于微信小程序寄予厚望，并以此撬动线下生活。此前腾讯入股永辉，而新零售当然也是线下生活的重要场景。张小龙同时宣布了下一步微信对于内容创作者的两大重要战略，即将上线公众号的APP，以及恢复赞赏功能，并倾向于赞赏作者。
    section(class="right")
      h1 今日推荐

      p 人才稀缺的区块链，程序员转型入门必看这四项技能
      p 1分钟链圈 | 福布斯发布数字货币领域富豪榜
      p 书单 | 计算机视觉的修炼秘笈
      p 资源 | 8 张思维导图帮你梳理深度学习&机器学习
      p 史上最大源码泄露事件：iOS 关键源代码被匿名公布
      p 苹果全线支持支付宝，放不下的中国战场
      p 送给前线码农的话 - 大牛们的经典语录
      p 干货 | 程序员必须知道的十大基础实用算法及其讲解
      p 如何一步一步仿写出微信“跳一
    footer Footer

</template>

<script>
  export default {
    name: 'blog-index'
  }
</script>

<style lang="stylus">
  .blog
    text-align left
    padding 30px 100px

    header
      height 80px
      background-color rgba(197, 192, 192, 0.8)

    section
      display inline-block

    footer
      height 60px
      background-color rgba(197, 192, 192, 0.8)
</style>
