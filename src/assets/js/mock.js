import Mock from 'mockjs'
import ajax from '@/assets/js/ajax'

//url前缀
let prefix = ajax.prefix
//Mock封装
function dataMock(url, data) {
	return Mock.mock(prefix + url, data)
}

let mock = {
	login:  dataMock('/login', {
		'code': 10000,
		'data': {
			'name': '@name'
		},
		'message': '操作成功'
	}),
	usermenutree: dataMock('/sys/user/menutree', {
	"code": 10000,
	"data": [{
		"children": [{
			"ext": "sys:user",
			"icon": "icon-user",
			"nodeName": "用户管理",
			"pid": 1,
			"recId": 2
		}, {
			"ext": "sys:opt",
			"icon": "icon-check",
			"nodeName": "权限管理",
			"pid": 1,
			"recId": 4
		}],
		"ext": "sys",
		"icon": "icon-laptop",
		"nodeName": "系统管理",
		"pid": -1,
		"recId": 1
	}, {
		"children": [{
			"ext": "log:optlog",
			"icon": "icon-wrench",
			"nodeName": "操作日志",
			"pid": 7,
			"recId": 8
		}, {
			"ext": "log:loginlog",
			"icon": "icon-signin",
			"nodeName": "登录日志",
			"pid": 7,
			"recId": 9
		}],
		"ext": "log",
		"icon": "icon-table",
		"nodeName": "日志管理",
		"pid": -1,
		"recId": 7
	},{
		"children": [{
			"ext": "component:button",
			"icon": "icon-ok-sign",
			"nodeName": "按钮",
			"pid": 1,
			"recId": 11
		}, {
			"ext": "component:upload",
			"icon": "icon-cloud-upload",
			"nodeName": "图片上传",
			"pid": 1,
			"recId": 12
		}, {
			"ext": "component:editor",
			"icon": "icon-file-alt",
			"nodeName": "富文本编辑器",
			"pid": 1,
			"recId": 12
		}],
		"ext": "component",
		"icon": "icon-th-large",
		"nodeName": "组件",
		"pid": -1,
		"recId": 10
	}],
	"msg": "操作成功"
}),
	optlogList: dataMock('/log/optlog/list', {"code":10000,"data":{"asc":true,"current":1,"limit":2147483647,"offset":0,"offsetCurrent":0,"optimizeCount":false,"pages":23,"records":[{"actorId":1,"actorName":"admin","app":"PC后台","appId":0,"content":"{}","createDateTime":"2017-05-07 20:59:11","createTime":1494161951,"ip":"223.74.65.199","moduleName":"排单套餐","optName":"删除排单套餐","recId":5953,"requestUrl":"/sys/schedulingpackage/1"},{"actorId":1,"actorName":"admin","app":"PC后台","appId":0,"content":"{\"recId\":[\"\"],\"name\":[\"12\"],\"money\":[\"12\"],\"days\":[\"12\"],\"principal\":[\"12\"],\"fromStar\":[\"12\"],\"toStar\":[\"12\"],\"dataStatus\":[\"1\"],\"isValid\":[\"true\"],\"note\":[\"\"]}","createDateTime":"2017-05-07 19:50:37","createTime":1494157837,"ip":"223.74.65.199","moduleName":"排单套餐","optName":"新增排单套餐","recId":5952,"requestUrl":"/sys/schedulingpackage"},{"actorId":1,"actorName":"admin","app":"PC后台","appId":0,"content":"{\"name\":[\"省道\"],\"recommend\":[\"1\"],\"team\":[\"2\"],\"jihuobiPrice\":[\"33\"],\"yuyuebiPrice\":[\"44\"],\"level\":[\"12\"],\"dataStatus\":[\"1\"]}","createDateTime":"2017-05-07 17:23:49","createTime":1494149029,"ip":"127.0.0.1","moduleName":"报单中心参数设置","optName":"新增报单中心参数设置","recId":5951,"requestUrl":"/sys/servicecenter"},{"actorId":1,"actorName":"admin","app":"PC后台","appId":0,"content":"{\"createTime\":[\"1494146998\"],\"createUserId\":[\"1\"],\"createUserName\":[\"admin\"],\"dataStatus\":[\"1\"],\"days\":[\"1\"],\"fromStar\":[\"1\"],\"money\":[\"1\"],\"moneyDouble\":[\"1\"],\"name\":[\"000\"],\"note\":[\"1\"],\"principal\":[\"1\"],\"principalDouble\":[\"1\"],\"recId\":[\"6\"],\"toStar\":[\"1\"],\"updateTime\":[\"1494146998\"],\"updateUserId\":[\"1\"],\"updateUserName\":[\"admin\"],\"isValid\":[\"true\"],\"_method\":[\"put\"]}","createDateTime":"2017-05-07 16:50:08","createTime":1494147008,"ip":"223.74.65.199","moduleName":"排单套餐","optName":"更新排单套餐","recId":5950,"requestUrl":"/sys/schedulingpackage/6"},{"actorId":1,"actorName":"admin","app":"PC后台","appId":0,"content":"{\"recId\":[\"\"],\"name\":[\"1\"],\"money\":[\"1\"],\"days\":[\"1\"],\"principal\":[\"1\"],\"fromStar\":[\"1\"],\"toStar\":[\"1\"],\"dataStatus\":[\"1\"],\"isValid\":[\"true\"],\"note\":[\"1\"]}","createDateTime":"2017-05-07 16:49:58","createTime":1494146998,"ip":"223.74.65.199","moduleName":"排单套餐","optName":"新增排单套餐","recId":5949,"requestUrl":"/sys/schedulingpackage"},{"actorId":1,"actorName":"admin","app":"PC后台","appId":0,"content":"{\"createTime\":[\"1493845980\"],\"createUserId\":[\"1\"],\"createUserName\":[\"admin\"],\"dataStatus\":[\"1\"],\"days\":[\"123\"],\"fromStar\":[\"123\"],\"money\":[\"1\"],\"moneyDouble\":[\"1\"],\"name\":[\"123111\"],\"note\":[\"123\"],\"principal\":[\"21\"],\"principalDouble\":[\"21\"],\"recId\":[\"1\"],\"toStar\":[\"321\"],\"updateTime\":[\"1494146831\"],\"updateUserId\":[\"1\"],\"updateUserName\":[\"admin\"],\"isValid\":[\"true\"],\"_method\":[\"put\"]}","createDateTime":"2017-05-07 16:47:22","createTime":1494146842,"ip":"223.74.65.199","moduleName":"排单套餐","optName":"更新排单套餐","recId":5948,"requestUrl":"/sys/schedulingpackage/1"},{"actorId":1,"actorName":"admin","app":"PC后台","appId":0,"content":"{\"createTime\":[\"1493845980\"],\"createUserId\":[\"1\"],\"createUserName\":[\"admin\"],\"dataStatus\":[\"1\"],\"days\":[\"123\"],\"fromStar\":[\"123\"],\"money\":[\"1\"],\"moneyDouble\":[\"32\"],\"name\":[\"123\"],\"note\":[\"123\"],\"principal\":[\"21\"],\"principalDouble\":[\"21\"],\"recId\":[\"1\"],\"toStar\":[\"321\"],\"updateTime\":[\"1493845980\"],\"updateUserId\":[\"1\"],\"updateUserName\":[\"admin\"],\"isValid\":[\"true\"],\"_method\":[\"put\"]}","createDateTime":"2017-05-07 16:47:11","createTime":1494146831,"ip":"223.74.65.199","moduleName":"排单套餐","optName":"更新排单套餐","recId":5947,"requestUrl":"/sys/schedulingpackage/1"},{"actorId":1,"actorName":"admin","app":"PC后台","appId":0,"content":"{\"createTime\":[\"1493846009\"],\"createUserId\":[\"1\"],\"createUserName\":[\"admin\"],\"dataStatus\":[\"1\"],\"days\":[\"123\"],\"fromStar\":[\"123\"],\"money\":[\"32\"],\"moneyDouble\":[\"32\"],\"name\":[\"123111\"],\"note\":[\"123\"],\"principal\":[\"21\"],\"principalDouble\":[\"21\"],\"recId\":[\"4\"],\"toStar\":[\"321\"],\"updateTime\":[\"1494146780\"],\"updateUserId\":[\"1\"],\"updateUserName\":[\"admin\"],\"isValid\":[\"true\"],\"_method\":[\"put\"]}","createDateTime":"2017-05-07 16:46:29","createTime":1494146789,"ip":"223.74.65.199","moduleName":"排单套餐","optName":"更新排单套餐","recId":5946,"requestUrl":"/sys/schedulingpackage/4"},{"actorId":1,"actorName":"admin","app":"PC后台","appId":0,"content":"{\"createTime\":[\"1493846009\"],\"createUserId\":[\"1\"],\"createUserName\":[\"admin\"],\"dataStatus\":[\"1\"],\"days\":[\"123\"],\"fromStar\":[\"123\"],\"money\":[\"32\"],\"moneyDouble\":[\"32\"],\"name\":[\"12311\"],\"note\":[\"123\"],\"principal\":[\"21\"],\"principalDouble\":[\"21\"],\"recId\":[\"4\"],\"toStar\":[\"321\"],\"updateTime\":[\"1493846009\"],\"updateUserId\":[\"1\"],\"updateUserName\":[\"admin\"],\"isValid\":[\"true\"],\"_method\":[\"put\"]}","createDateTime":"2017-05-07 16:46:20","createTime":1494146780,"ip":"223.74.65.199","moduleName":"排单套餐","optName":"更新排单套餐","recId":5945,"requestUrl":"/sys/schedulingpackage/4"},{"actorId":1,"actorName":"admin","app":"PC后台","appId":0,"content":"{}","createDateTime":"2017-05-07 16:46:13","createTime":1494146773,"ip":"223.74.65.199","moduleName":"排单套餐","optName":"删除排单套餐","recId":5944,"requestUrl":"/sys/schedulingpackage/5"}],"searchCount":true,"size":10,"total":230},"msg":"操作成功"}),
  loginlogList: dataMock('/log/loginlog/list', {"code":10000,"data":{"asc":true,"current":1,"limit":2147483647,"offset":0,"offsetCurrent":0,"optimizeCount":false,"pages":17,"records":[{"app":"PC后台","appId":0,"browser":"Others","clientType":0,"clientTypeValue":"PC端","createDateTime":"2017-05-08 16:10:56","createTime":1494231056,"infoType":0,"infoTypeName":" 登录","ip":"116.22.134.3","isMobile":0,"isMobileValue":"否","recId":806,"userId":1,"userName":"admin"},{"app":"PC后台","appId":0,"browser":"Others","clientType":0,"clientTypeValue":"PC端","createDateTime":"2017-05-08 15:52:32","createTime":1494229952,"infoType":0,"infoTypeName":" 登录","ip":"116.22.134.3","isMobile":0,"isMobileValue":"否","recId":805,"userId":1,"userName":"admin"},{"app":"PC后台","appId":0,"browser":"Others","clientType":0,"clientTypeValue":"PC端","createDateTime":"2017-05-08 12:32:51","createTime":1494217971,"infoType":0,"infoTypeName":" 登录","ip":"116.22.134.3","isMobile":0,"isMobileValue":"否","recId":804,"userId":1,"userName":"admin"},{"app":"PC后台","appId":0,"browser":"Others","clientType":0,"clientTypeValue":"PC端","createDateTime":"2017-05-07 20:58:29","createTime":1494161909,"infoType":0,"infoTypeName":" 登录","ip":"223.74.65.199","isMobile":0,"isMobileValue":"否","recId":803,"userId":1,"userName":"admin"},{"app":"PC后台","appId":0,"browser":"Others","clientType":0,"clientTypeValue":"PC端","createDateTime":"2017-05-07 19:50:24","createTime":1494157824,"infoType":0,"infoTypeName":" 登录","ip":"223.74.65.199","isMobile":0,"isMobileValue":"否","recId":802,"userId":1,"userName":"admin"},{"app":"PC后台","appId":0,"browser":"Others","clientType":0,"clientTypeValue":"PC端","createDateTime":"2017-05-07 17:23:39","createTime":1494149019,"infoType":0,"infoTypeName":" 登录","ip":"127.0.0.1","isMobile":0,"isMobileValue":"否","recId":801,"userId":1,"userName":"admin"},{"app":"PC后台","appId":0,"browser":"Others","clientType":0,"clientTypeValue":"PC端","createDateTime":"2017-05-07 17:16:46","createTime":1494148606,"infoType":0,"infoTypeName":" 登录","ip":"127.0.0.1","isMobile":0,"isMobileValue":"否","recId":800,"userId":1,"userName":"admin"},{"app":"PC后台","appId":0,"browser":"Others","clientType":0,"clientTypeValue":"PC端","createDateTime":"2017-05-07 16:37:27","createTime":1494146247,"infoType":0,"infoTypeName":" 登录","ip":"223.74.65.199","isMobile":0,"isMobileValue":"否","recId":799,"userId":1,"userName":"admin"},{"app":"PC后台","appId":0,"browser":"QQBrowser","clientType":0,"clientTypeValue":"PC端","createDateTime":"2017-05-07 16:19:52","createTime":1494145192,"infoType":0,"infoTypeName":" 登录","ip":"127.0.0.1","isMobile":0,"isMobileValue":"否","recId":798,"userId":2,"userName":"caihaibin"},{"app":"PC后台","appId":0,"browser":"Others","clientType":0,"clientTypeValue":"PC端","createDateTime":"2017-05-07 16:12:03","createTime":1494144723,"infoType":0,"infoTypeName":" 登录","ip":"223.74.65.199","isMobile":0,"isMobileValue":"否","recId":797,"userId":1,"userName":"admin"}],"searchCount":true,"size":10,"total":163},"msg":"操作成功"}),
  userlist: dataMock('/sys/user/list', {"code":10000,"data":{"asc":true,"condition":{},"current":1,"limit":2147483647,"offset":0,"offsetCurrent":0,"optimizeCount":false,"pages":1,"records":[{"dataStatus":1,"dataStatusName":"已启用","email":"abc@shunyou.cn","gender":1,"genderName":"男","mobile":"13751874023","realName":"张三","recId":1,"roles":"admin","updateDateTime":"2017-04-15 12:07:31","updateTime":1492229251,"userId":1,"userName":"admin"}],"searchCount":true,"size":10,"total":1},"msg":"操作成功"}),
  userperms: dataMock('/sys:user/perms', {"code":10000,"data":["sys:user:view","sys:user:list","sys:user:edit","sys:user:delete","sys:user:add","sys:user:setrole"],"msg":"操作成功"}),
  sysuser1: dataMock('/sys/user/1', {"code":10000,"data":{"sysUser":{"createTime":1,"createUserId":1,"createUserName":"1","dataStatus":1,"email":"abc@shunyou.cn","gender":1,"mobile":"13751874023","realName":"张三","recId":1,"updateTime":1492229251,"updateUserId":1,"updateUserName":"张三","userId":1},"user":{"dataStatus":1,"realName":"admin","recId":1,"salt":"88639a0a1d6b78f151ebf8e6b07b774c","userName":"admin","userPass":"72d86123ab1cb698ef9a32f36ae171ca","userType":0}},"msg":"操作成功"}),
  role1all: dataMock('/sys/user/1/roles/', {"code":10000,"data":[1],"msg":"操作成功"}),
  roleall: dataMock('/sys/role/all', {"code":10000,"data":[{"createTime":1,"createUserId":1,"createUserName":"1","dataStatus":1,"recId":1,"roleCode":"admin","roleDesc":"管理员，不要修改和删除","roleName":"admin","sortNo":12,"updateTime":1490697543,"updateUserId":1,"updateUserName":"1"},{"createTime":1493788337,"createUserId":1,"createUserName":"张三","dataStatus":1,"recId":77,"roleCode":"common_vip","roleDesc":"普通会员","roleName":"普通会员","sortNo":2,"updateTime":1493788337,"updateUserId":1,"updateUserName":"张三"},{"createTime":1493788357,"createUserId":1,"createUserName":"张三","dataStatus":1,"recId":78,"roleCode":"service_center","roleDesc":"报单中心","roleName":"报单中心","sortNo":3,"updateTime":1493788357,"updateUserId":1,"updateUserName":"张三"}],"msg":"操作成功"}),
  menutree: dataMock('/sys/menu/tree/', {"code":10000,"data":[{"children":[{"ext":"sys:user","icon":"icon-user","nodeName":"用户管理","path":[1,2],"pid":1,"recId":2},{"ext":"sys:config","icon":"icon-laptop","nodeName":"系统配置管理","path":[1,73],"pid":1,"recId":73},{"ext":"sys:role","icon":"icon-star","nodeName":"角色管理","path":[1,3],"pid":1,"recId":3},{"ext":"sys:dict","icon":"icon-edit","nodeName":"字典管理","path":[1,6],"pid":1,"recId":6},{"ext":"sys:opt","icon":"icon-check","nodeName":"权限管理","path":[1,4],"pid":1,"recId":4},{"ext":"sys:menu","icon":"icon-check","nodeName":"菜单管理","path":[1,39],"pid":1,"recId":39},{"ext":"sys:schedulingpck","icon":"icon-timer","nodeName":"排单套餐管理","path":[1,435],"pid":1,"recId":435},{"ext":"sys:servicecenter","icon":"icon-laptop","nodeName":"报单中心参数设置","path":[1,436],"pid":1,"recId":436},{"ext":"zzzzzzz","icon":"zzzzzzzz","nodeName":"zzz","path":[1,474],"pid":1,"recId":474}],"ext":"sys","icon":"icon-laptop","nodeName":"系统管理","path":[1],"pid":-1,"recId":1},{"children":[{"ext":"log:optlog","icon":"icon-laptop","nodeName":"操作日志","path":[7,8],"pid":7,"recId":8},{"ext":"log:loginlog","icon":"icon-signin","nodeName":"登录日志","path":[7,9],"pid":7,"recId":9}],"ext":"log","icon":"icon-table","nodeName":"日志管理","path":[7],"pid":-1,"recId":7},{"children":[{"ext":"info:notice","icon":"icon-laptop","nodeName":"系统公告","path":[423,424],"pid":423,"recId":424}],"ext":"info","icon":"icon-user","nodeName":"信息管理","path":[423],"pid":-1,"recId":423},{"children":[{"ext":"member:reg","icon":"icon-user","nodeName":"新增会员","path":[425,426],"pid":425,"recId":426},{"ext":"member:myteam","icon":"icon-user","nodeName":"我的团队","path":[425,427],"pid":425,"recId":427},{"ext":"member:recommend","icon":"icon-user","nodeName":"推荐关系","path":[425,428],"pid":425,"recId":428},{"ext":"member:all","icon":"icon-user","nodeName":"会员列表","path":[425,454],"pid":425,"recId":454},{"ext":"member:myteamlocked","icon":"icon-user","nodeName":"团队冻结会员","path":[425,459],"pid":425,"recId":459},{"ext":"member:alllocked","icon":"icon-user","nodeName":"冻结会员","path":[425,461],"pid":425,"recId":461}],"ext":"member","icon":"icon-user","nodeName":"会员管理","path":[425],"pid":-1,"recId":425},{"children":[{"ext":"servicecenter:list","icon":"icon-laptop","nodeName":"报单中心列表","path":[430,431],"pid":430,"recId":431},{"ext":"servicecenter:apply","icon":"icon-laptop","nodeName":"报单中心申请","path":[430,432],"pid":430,"recId":432},{"ext":"servicecenter:approve","icon":"icon-laptop","nodeName":"报单中心审核","path":[430,433],"pid":430,"recId":433},{"ext":"servicecenter:history","icon":"icon-laptop","nodeName":"审核历史记录","path":[430,434],"pid":430,"recId":434}],"ext":"servicecenter","icon":"icon-laptop","nodeName":"报单中心","path":[430],"pid":-1,"recId":430}],"msg":"操作成功"}),
  optlist: dataMock('/sys/opt/list/1', {"code":10000,"data":[{"createTime":1490326472,"createUserId":1,"createUserName":"蔡海滨","dataStatus":1,"icon":"","parentId":3,"permCode":"sys:role:add","permissionName":"新增","permissionType":"F","recId":15,"sortNo":1,"updateTime":1490326472,"updateUserId":1,"updateUserName":"蔡海滨","url":""},{"createTime":1490326472,"createUserId":1,"createUserName":"蔡海滨","dataStatus":1,"icon":"","parentId":3,"permCode":"sys:role:edit","permissionName":"编辑","permissionType":"F","recId":16,"sortNo":2,"updateTime":1490326472,"updateUserId":1,"updateUserName":"蔡海滨","url":""},{"createTime":1490326472,"createUserId":1,"createUserName":"蔡海滨","dataStatus":1,"icon":"","parentId":3,"permCode":"sys:role:delete","permissionName":"删除","permissionType":"F","recId":17,"sortNo":3,"updateTime":1490326472,"updateUserId":1,"updateUserName":"蔡海滨","url":""},{"createTime":1490326472,"createUserId":1,"createUserName":"蔡海滨","dataStatus":1,"icon":"","parentId":3,"permCode":"sys:role:view","permissionName":"查看","permissionType":"F","recId":18,"sortNo":4,"updateTime":1490326472,"updateUserId":1,"updateUserName":"蔡海滨","url":""},{"createTime":1490326472,"createUserId":1,"createUserName":"蔡海滨","dataStatus":1,"icon":"","parentId":3,"permCode":"sys:role:list","permissionName":"列表","permissionType":"F","recId":19,"sortNo":5,"updateTime":1490326472,"updateUserId":1,"updateUserName":"蔡海滨","url":""},{"createTime":1490326472,"createUserId":1,"createUserName":"蔡海滨","dataStatus":1,"icon":"","parentId":3,"permCode":"sys:role:setperm","permissionName":"授权","permissionType":"F","recId":21,"sortNo":6,"updateTime":1490326472,"updateUserId":1,"updateUserName":"蔡海滨","url":""}],"msg":"操作成功"}),
  optperms: dataMock('/sys:opt/perms', {"code":10000,"data":["sys:opt:delete","sys:opt:view","sys:opt:list","sys:opt:add","sys:opt:edit"],"msg":"操作成功"}),
  opt: dataMock('/sys/opt/1', {"code":10000,"data":[{"createTime":1490326472,"createUserId":1,"createUserName":"蔡海滨","dataStatus":1,"icon":"","parentId":3,"permCode":"sys:role:add","permissionName":"新增","permissionType":"F","recId":15,"sortNo":1,"updateTime":1490326472,"updateUserId":1,"updateUserName":"蔡海滨","url":""},{"createTime":1490326472,"createUserId":1,"createUserName":"蔡海滨","dataStatus":1,"icon":"","parentId":3,"permCode":"sys:role:edit","permissionName":"编辑","permissionType":"F","recId":16,"sortNo":2,"updateTime":1490326472,"updateUserId":1,"updateUserName":"蔡海滨","url":""},{"createTime":1490326472,"createUserId":1,"createUserName":"蔡海滨","dataStatus":1,"icon":"","parentId":3,"permCode":"sys:role:delete","permissionName":"删除","permissionType":"F","recId":17,"sortNo":3,"updateTime":1490326472,"updateUserId":1,"updateUserName":"蔡海滨","url":""},{"createTime":1490326472,"createUserId":1,"createUserName":"蔡海滨","dataStatus":1,"icon":"","parentId":3,"permCode":"sys:role:view","permissionName":"查看","permissionType":"F","recId":18,"sortNo":4,"updateTime":1490326472,"updateUserId":1,"updateUserName":"蔡海滨","url":""},{"createTime":1490326472,"createUserId":1,"createUserName":"蔡海滨","dataStatus":1,"icon":"","parentId":3,"permCode":"sys:role:list","permissionName":"列表","permissionType":"F","recId":19,"sortNo":5,"updateTime":1490326472,"updateUserId":1,"updateUserName":"蔡海滨","url":""},{"createTime":1490326472,"createUserId":1,"createUserName":"蔡海滨","dataStatus":1,"icon":"","parentId":3,"permCode":"sys:role:setperm","permissionName":"授权","permissionType":"F","recId":21,"sortNo":6,"updateTime":1490326472,"updateUserId":1,"updateUserName":"蔡海滨","url":""}],"msg":"操作成功"}),
}
export default mock