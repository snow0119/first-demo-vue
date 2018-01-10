import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [{
    path: '/',
    name: 'Hello',
    component: () => import('../components/HelloWorld')
  }, {
    path: '/hi',
    name: 'test',
    component: () => import('../views/Test')
  }, {
    path: '/memo-list',
    name: 'memoList',
    component: () => import('../views/MemoList')
  }, {
    path: '/add-memo',
    name: 'addMemo',
    component: () => import('../views/AddMemo')
  }, {
    path: '/modify-memo/:memoId',
    name: 'modifyMemo',
    component: () => import('../views/ModifyMemo')
  }, {
    path: '/memo-detail/:memoId',
    name: 'memoDetail',
    component: () => import('../views/MemoDetail')
  }]
})
