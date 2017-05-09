import request from '@/assets/js/request.js'

export default {
  updateServiceType(context) {
    return request.getList('/sys/basicdata/dict/service-type', {}, (res) => {
      context.commit('modifyState', {
      	 key: 'serviceType',
      	 value: res.data
      })
    })
  },
  updateBusinessType(context) {
  	return request.getList('/shop/businesstype/all', {}, (res) => {
      context.commit('modifyState', {
      	 key: 'businessType',
      	 value: res.data
      })
    })
  },
  updateGlobalConfig(context) {
     return request.getList('/sys/basicdata/config/all', {}, (res) => {
        context.commit('modifyState', {
          key: 'globalConfig',
          value: res.data
        })
     })
  }
}