import Vue from 'vue'
import Vuex from 'vuex'
import actions from '@/vuex/actions'
import getters from '@/vuex/getters'
import mutations from '@/vuex/mutations'

Vue.use(Vuex)

const state = {
  currentPathName: '', // 当前选中的模块
  currentPathNameParent: '', // 当前选中的模块的父模块
  serviceType: [], // 服务类型 
  businessType: [], // 所属行业
  globalConfig: {},  // 全局配置
  listPerms: {} // 列表权限
}


// 创建 store 实例
export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})