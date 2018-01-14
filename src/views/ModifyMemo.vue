<template lang="pug">
  div(class="container-modify")
    h2 修改备忘录
    ul
      li
        span 模块名：
        input(class="memoName", v-model="memoName", placeholder="请输入模块名", readonly)
      li
        span 需求描述：
        input(class="demand", v-model="demand", placeholder="请输入需求的相关描述", readonly)
      li
        span 需完成项:
        div(class="items")
          div(class="item", v-for="(item, index) in items")
            input(type="checkbox", @click="itemFinished(item.detail)", :checked="item.selected")
            div {{item.detail}}
      button(class="update-memo", @click="updateMemo") 修改
</template>
<script>
  export default {
    name: 'update-memo',
    data () {
      return {
        memoId: this.$route.params.memoId,
        memoName: '',
        demand: '',
        items: []
      }
    },
    created () {
      const $this = this
      this.$http.get(`/init-memo-detail/${this.$route.params.memoId}`).then(({data}) => {
        $this.memoName = data.memoName
        $this.demand = data.demand
        $this.items = data.items
      })
    },
    methods: {
      itemFinished (itemDetail) {
        this.items.forEach(item => {
          if (item.detail === itemDetail) item.selected = true
        })
      },
      async updateMemo () {
        const {memoName, demand, items, memoId} = this
        if (!memoName || !demand || !items) return alert('请将相关内容填写完整')
        const result = (await this.$http.post('/update-memo', {
          memoName, demand, items
        })).data

        alert(result.desc)
        if (result.code === '0') this.$router.push(`/memo-detail/${memoId}`)
      }
    }
  }
</script>
<style>
  .container-modify ul {
    padding: 20px;
    list-style: none;
    margin: 0 200px 20px;
    background-color: rgba(255, 255, 255, 0.6);
  }

  .container-modify li .memoName, .container-modify li .demand {
    position: relative;
    width: 50%;
    margin-top: 10px;
    padding: 10px 20px;
    border-radius: 20px;
    display: inline-block;
    border: 1px solid #f1f1f1;
  }

  .container-modify li span {
    width: 80px;
    text-align: left;
    display: inline-block;
    vertical-align: middle;
  }

  .container-modify li:nth-child(3) {
    position: relative;
  }

  .container-modify li:nth-child(3) span {
    margin-top: 10px;
    vertical-align: top;
  }

  .container-modify .items, .container-modify .item div {
    display: inline-block;
  }

  .container-modify .items {
    margin-top: 10px;
  }

  .container-modify .item:nth-of-type(odd) {
    background-color: #c3e6e8;
  }

  .container-modify .item:nth-of-type(even) {
    background-color: #d8e8cb;
  }

  .container-modify .item {
    position: relative;
    padding: 0 6px;
    background-color: white;
  }

  .container-modify .item input {
    position: absolute;
    top: 50%;
    transform: translate3d(0, -50%, 0);
  }

  .container-modify .item div {
    width: 420px;
    padding: 5px;
    font-size: 12px;
    text-align: left;
    margin-left: 20px;
  }

  .container-modify .update-memo {
    width: 100px;
    font-size: 16px;
    margin-top: 20px;
  }
</style>
