import {mock} from 'mockjs'

mock(/get-all-memo/, () => {
  return mock({
    'memoList|1-10': [{
      memoId: '@id',
      memoName: '@cword(0, 10)',
      demand: '@cword(0, 100)',
      'completed|1-5': ['@cword(0, 30)', '@cword(0, 30)'],
      'unfinished|1-5': ['@cword(0, 30)', '@cword(0, 30)']
    }]
  })
})
