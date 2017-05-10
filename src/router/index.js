import Vue from 'vue'
import Router from 'vue-router'

import layout from '@/components/layout/main' // 界面框架
import main from '@/components/main' // 主页

// 账号
import login from '@/components/account/login/main'

// 日志管理
import loginlog from '@/components/modules/log/loginlog/main' // 登录日志
import optlog from '@/components/modules/log/optlog/main' // 操作日志

// 系统管理
import opt from '@/components/modules/sys/opt/main' // 权限管理
import user from '@/components/modules/sys/user/main' // 角色管理

//组件
import button from '@/components/modules/component/button/main'//按钮
import upload from '@/components/modules/component/upload/main'//上传图片
import editor from '@/components/modules/component/editor/main'//富文本编辑器

//错误处理
import notFound from '@/components/error/notFound' //找不到页面
import serverError from '@/components/error/serverError' //服务器错误

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/login',
    component: login
  }, {
    path: '/serverError',
    component: serverError
  }, {
    path: '/',
    component: login,
    name: '',
    children: []
  }, {
    path: '/index',
    component: layout,
    name: '',
    children: [
      { path: '/index', component: main }
    ]
  }, {
    path: '/log',
    component: layout,
    name: '日志管理',
    perm_code: 'log',
    children: [
      { path: '/log/optlog', component: optlog, perm_code: 'log:optlog', name: '操作日志' },
      { path: '/log/loginlog', component: loginlog, perm_code: 'log:loginlog', name: '登录日志' }
    ]
  }, {
    path: '/sys',
    component: layout,
    name: '系统管理',
    perm_code: 'sys',
    children: [
      { path: '/sys/user', component: user, perm_code: 'sys:user', name: '用户管理' },
      { path: '/sys/opt', component: opt, perm_code: 'sys:opt', name: '权限管理' },
    ]
  }, {
    path: '/component',
    component: layout,
    name: '组件',
    perm_code: 'component',
    children: [
      { path: '/component/button', component: button, perm_code: 'component:button', name: '按钮' },
      { path: '/component/upload', component: upload, perm_code: 'component:upload', name: '图片上传' },
      { path: '/component/editor', component: editor, perm_code: 'component:editor', name: '富文本编辑器' }
    ]
  }, {
    path: '*',
    component: notFound
  }]
})