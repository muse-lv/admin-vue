import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

// Message 从上到下出现的提示
// Notification 从右到左出现的提示
let type = 'Notification'
let time = 2000
let layer = {
  // 错误信息
  error: (msg) => {
    ElementUI[type]({
      message: msg,
      type: 'error',
      showClose: true,
      duration: time
    })
  },
  // 消息
  message: (msg) => {
    ElementUI[type].info({
      message: msg,
      showClose: true,
      duration: time
    })
  },
  // 成功信息
  success: (msg) => {
    ElementUI[type]({
      message: msg,
      type: 'success',
      showClose: true,
      duration: time
    })
  },
  // 警告信息
  warning: (msg) => {
    ElementUI[type]({
      message: msg,
      type: 'warning',
      showClose: true,
      duration: time
    })
  },
  // alert
  alert: (title, msg, callback) => {

    ElementUI.MessageBox.alert(msg, title, {
      confirmButtonText: '确定',
      callback: action => {
        if (typeof callback === 'function') {
          callback()
        }
      }
    })
  },
  // confirm
  confirm: (title, msg, success, cancel) => {
    ElementUI.MessageBox.confirm(msg, title).then(() => {
      if (typeof success === 'function') {
        success()
      }
    }).catch(() => {
      if (typeof cancel === 'function') {
        cancel()
      }
    })
  },
  // 关闭消息框
  messageBoxclose: () => {
    try {
      ElementUI.MessageBox.close()
    } catch (e) {}
  },
  close: () => {
    try {
      ElementUI[type].close()
    } catch (e) {}
  }
}

export default layer