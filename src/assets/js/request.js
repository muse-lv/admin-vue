import layer from '@/assets/js/layer'
import ajax from '@/assets/js/ajax'

let request = {
  //增加数据
  addRecord: (url, data, success, fail) => {
    return ajax.request({
      type: 'post',
      url: url,
      data: data,
      success: success,
      fail: fail
    })
  },

  // 删除数据
  deleteRecord: (url, id, success, fail) => {
    let requestUrl = url + id
    return ajax.request({
      type: 'delete',
      url: requestUrl,
      success: success,
      fail: fail
    })
  },

  // 删除列表
  deleteList: (url, id) => {},

  // 获取列表 (分页)
  getList: (url, data, success, fail, noLogin) => {
    let requestUrl = url
    return ajax.request({
      type: 'post',
      url: requestUrl,
      data: data,
      success: success,
      fail: fail,
      noLogin: noLogin
    })
  },
  // 获取详细
  getDetail: (url, id, success, fail) => {
    let requestUrl = url + id
    return ajax.request({
      type: 'get',
      url: requestUrl,
      success: success,
      fail: fail
    })
  },

  // 更新数据
  updateRecord: (url, id, data, success, fail) => {
    let requestUrl = url + id
    let sendData = data
    sendData['_method'] = 'put'

    return ajax.request({
      type: 'post',
      url: requestUrl,
      data: sendData,
      success: success,
      fail: fail
    })
  },

  // 获取字典 
  getDict: (type, success, fail) => {
    const url = '/sys/basicdata/dict/' + type

    return this.a.getList(url, {}, success, fail)
  },

  // 提交表单 
  submit: (url, data, success, fail) => {
    return ajax.request({
      type: 'post',
      url: url,
      data: data,
      success: success,
      fail: fail
    })
  },

  // post 请求
  post: (url, data, success, fail) => {
    return ajax.request({
      type: 'post',
      url: url,
      data: data,
      success: success,
      fail: fail
    })
  },

  // get 请求
  get: (url, data, success, fail) => {
    return ajax.request({
      type: 'get',
      url: url,
      data: data,
      success: success,
      fail: fail
    })
  },

}

export default request