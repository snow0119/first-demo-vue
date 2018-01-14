import {mock} from 'mockjs'

mock(/get-all-memo/, () => {
  return mock({
    'memoList|1-10': [{
      memoId: '@id',
      memoName: '@cword(0, 10)',
      demand: '@cword(0, 100)',
      'completed|1-5': ['@cword(0, 30)', '@cword(0, 30)'],
      'unfinished|1-5': ['@cword(0, 30)', '@cword(0, 30)'],
      createTime: '@date'
    }]
  })
})

mock(/init-memo-detail\/\d+$/, () => {
  return mock({
    memoId: '@id',
    memoName: '@cword(0, 10)',
    demand: '@cword(0, 100)',
    'items|1-5': [{
      selected: '@boolean',
      detail: '@cword(0,50)'
    }],
    createTime: '@date'
  })
})

mock(/get-memo-detail\/\d+$/, () => {
  return mock({
    memoId: '@id',
    memoName: '@cword(0, 10)',
    demand: '@cword(0, 100)',
    'completed|1-5': [{
      selected: '@boolean',
      detail: '@cword(0,50)'
    }],
    'undone|1-5': [{
      selected: '@boolean',
      detail: '@cword(0,50)'
    }],
    createTime: '@date'
  })
})

mock(/save-memo/, () => {
  var isSuccess = '@boolean'
  return mock({
    code: isSuccess ? '0' : '1',
    desc: isSuccess ? '添加成功' : '添加失败',
    data: isSuccess ? '@id' : ''
  })
})

mock(/update-memo/, () => {
  var isSuccess = '@boolean'
  return mock({
    code: isSuccess ? '0' : '1',
    desc: isSuccess ? '修改成功' : '修改失败',
    data: isSuccess ? '@id' : ''
  })
})
