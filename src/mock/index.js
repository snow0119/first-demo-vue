import {mock} from 'mockjs'

mock(/get-all-memo/, () => {
  return mock({
    'list|1-10': [{
      'id|+1': 1
    }]
  })
})
