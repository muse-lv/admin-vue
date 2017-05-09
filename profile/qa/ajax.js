import Vue from 'vue'
import VueResource from "vue-resource"
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import layer from '@/assets/js/layer'
import router from '@/router/index'


Vue.use(VueResource)
Vue.http.options.emulateHTTP = true;
// url前缀
let prefix = 'http://192.168.0.237:82/web-api'

// 默认配置
let defaultConfig = {
  emulateJSON: false,
  credentials: true,
}

// 把json转换成url传参
function parseJson(param, key, encode) {
  if (typeof param === 'undefined' || param === null) return ''
  let paramStr = ''
  let t = typeof(param)
  if (t === 'string' || t === 'number' || t === 'boolean') {
    paramStr += '&' + key + '=' + ((encode == null || encode) ? encodeURIComponent(param) : param)
  } else {
    for (let i in param) {
      let k = key == null ? i : key + (param instanceof Array ? '[' + i + ']' : '.' + i)
      paramStr += parseJson(param[i], k, encode)
    }
  }
  return paramStr
}


let request = (param) => {

  // 请求成功
  let requestSuccess = (res) => {
    let result = res.data
    switch (result.code) {
      // 操作成功
      case 10000:
        param.success(result)
        break;

        // 服务器错误
      case 20000:
        layer.error(result.msg)
        break

        // 无操作权限
      case 20005:
        layer.error(result.msg)
        break

        //未登录
      case 20007:
        
        if (typeof param.noLogin === 'function') {
          param.noLogin()
        } else {
           layer.messageBoxclose()
           layer.alert('警告','您尚未登录，请登录!', function() {
              router.push("/login")
           })
        }

        // session 过期
      case 20010:

        if (typeof param.noLogin === 'function') {
          param.noLogin()
        } else {
           layer.messageBoxclose()
           layer.alert('警告','登录失效，请重新登录!', function() {
              router.push("/login")
           })
        }
        
        break
        // 其他
      default:

        if (typeof param.fail === 'function') {
          layer.error(result.msg)
          param.fail(result)
        } else {
          layer.error(result.msg)
        }

    }

    return res.data;
  }

  // 请求错误
  function requestError() {
    if (typeof param.error === 'function') {
      param.error()
    } else {
      layer.error('服务器异常，请稍后重试！！')
      // router.push('/serverError')
    }
  }


  // 请求方式
  let type = param.type
  let requestUrl = prefix + param.url
  

  switch (type) {
    // get 请求
    case 'get':
      if (param.data) {
        let parseStr = parseJson(param.data,null,false)
        let urlParam = '?' + parseStr.substr(1, parseStr.length)
   		requestUrl += urlParam 
      }
      return Vue.http.get(requestUrl, defaultConfig).then(requestSuccess, requestError)
        // post 请求	
    case 'post':
      // 如果为post 请求，设置 emulateJson 为 true
      defaultConfig['emulateJSON'] = true
      return Vue.http.post(requestUrl, param.data, defaultConfig).then(requestSuccess, requestError)
        // delete 请求
    case 'delete':
      return Vue.http.delete(requestUrl, defaultConfig).then(requestSuccess, requestError)
        // put 请求
    case 'put':
      return Vue.http.put(requestUrl, param.data, defaultConfig).then(requestSuccess, requestError)
  }

}

let ajax = {
  prefix: prefix,
  request: request
}


export default ajax
