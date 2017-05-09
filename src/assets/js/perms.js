import request from '@/assets/js/request'

function hasPrem(perm, perms, datas) {
  let dataArray = [],
    index = 0,
    text = ''
  for (let i = datas.length - 1; i >= 0; i--) {
    dataArray = datas[i].split(':')
    index = dataArray.length - 1
    text = dataArray[index]
    if (text === perm) {
      perms[perm] = true
    }
  }
}

export default (url, perms) => {
  request.getDetail(url, '', (res) => {
    for (let perm in perms) {
      hasPrem(perm, perms, res.data)
    }
  })
}