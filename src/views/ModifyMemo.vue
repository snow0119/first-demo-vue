<template lang="pug">
  div(class="container-modify")
    h2 修改备忘录
    ul
      li
        span 模块名：
        input(v-model="memoName", placeholder="请输入模块名")
      li
        span 需求描述：
        input(v-model="demand", placeholder="请输入需求的相关描述")
      li
        span 需完成项:
        template(v-for="(item, index) in items")
          input(type="checkbox", @click="itemFinished(item.detail)", :checked="item.selected")
          span {{item.detail}}
      button(class="update-memo", @click="updateMemo") 修改
</template>
<script>
  export default {
    name: 'update-memo',
    data () {
      return {
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
        const {memoName, demand, items} = this
        const result = (await this.$http.post('update-memo', {
          memoName, demand, items
        })).data

        alert(result.desc)
        if (result.code === '0') this.$router.push(`/memo-detail/${result.data}`)
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

  .container-modify li input {
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
    margin-top: 20px;
    vertical-align: top;
  }

  .container-modify .update-memo {
    width: 100px;
    font-size: 16px;
    margin-top: 20px;
  }
</style>
