import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import request from '@/assets/js/request.js'
import bus from '@/assets/js/bus.js'
import layer from '@/assets/js/layer.js'

export default (row, operateApi, column, callBack, failCallBack, config) => {

  let _column = column || "roleName"
  let info = ''

  if(typeof _column === 'string') {
    info = row[_column]
  }else if(_column instanceof Array) {
    info = row[_column[0]] + ' 的 ' + row[_column[1]]
  }

  let message = '是否删除 ' + info + '？'
  let recId = row.recId

  if (!info || !recId) {
    message = config.message
    recId = config.recId
  }


  ElementUI.MessageBox({
    title: '删除',
    message: message,
    showCancelButton: true,
    cancelButtonText: '取消',
    beforeClose: (action, instance, done) => {
      if (action === 'confirm') {
        instance.confirmButtonLoading = true
        layer.success('删除成功')
        bus.$emit('reloadTable')
        if (typeof callBack === 'function') {
          callBack()
        }
        instance.confirmButtonLoading = false
        done()
      } else {
        done()
      }
    }
  })
}