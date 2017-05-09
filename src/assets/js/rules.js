const regular = {
  integer: /^\+?[0-9][0-9]*$/,
  floatNumber: /^[1-9]\d*\.\d*|0\.\d*[1-9]\d*|0?\.0+|0$/,
  quantity: /^\+?[1-9][0-9]*$/,
  email: /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,
  mobilePhone: /^(13[0-9]|14[57]|15[012356789]|17[03678]|18[0-9])\d{8}$/,
  price: /^([1-9][\d]{0,7}|0)(\.[\d]{1,2})?$/,
  ip: /((?:(?:25[0-5]|2[0-4]\d|((1\d{2})|([1-9]?\d)))\.){3}(?:25[0-5]|2[0-4]\d|((1\d{2})|([1-9]?\d))))/,
  mac: /([0-9A-Fa-f]{2}-){5}[0-9A-Fa-f]{2}/,
  landline: /\d{3}-\d{8}|\d{4}-\d{7}/,
  postCode: /[1-9]\d{5}(?!\d)/,
  // url: /^((https|http|ftp|rtsp|mms)?:\/\/)+[A-Za-z0-9]+\.[A-Za-z0-9]+[\/=\?%\-&_~`@[\]\':+!]*([^<>\"\"])*$/
  url: /[a-zA-Z0-9][-a-zA-Z0-9]{0,62}(\.[a-zA-Z0-9][-a-zA-Z0-9]{0,62})+\.?/
}


// 业务的验证
let rules = {
  regular: regular,

  // 检测排序号（正整数）
  checkNumber: (rule, value, callback) => {
    if (!value) {
      return callback(new Error('请输入排序号'))
    } else {
      const rule = regular.integer
      if (rule.test(value) === false) {
        return callback(new Error('请输入正整数'))
      } else {
        callback()
      }
    }
  },

  // 检测邮箱
  checkEmail: (rule, value, callback) => {
    if (!value) {
      return callback(new Error('请输入邮箱'))
    } else {
      const rule = regular.email
      if (rule.test(value) === false) {
        return callback(new Error('请输入正确邮箱格式'))
      } else {
        callback()
      }
    }
  },

  // 检测手机号码
  checkMobile: (rule, value, callback) => {
    if (!value) {
      return callback(new Error('请输入手机号码'))
    } else {
      const rule = regular.mobilePhone
      if (rule.test(value) === false) {
        return callback(new Error('请输入正确手机号码格式'))
      } else {
        callback()
      }
    }
  },

  // 检测座机
  checkLandline: (rule, value, callback) => {
    if (!value) {
      callback()
    } else {
      const rule = regular.landline
      if (rule.test(value) === false) {
        return callback(new Error('请输入正确的传真'))
      } else {
        callback()
      }
    }
  },

  // 解决表单验证中数字无法通过必填较验
  numberRequired: (rule, value, callback) => {
    value = String(value)
    if (!value) {
      return callback(new Error('请选择'))
    } else {
      callback()
    }
  },

  // 价格
  checkPrice: (rule, value, callback) => {
    let price = String(value)
    if (price.trim().length === 0) {
      callback(new Error('请输入价格'))
    } else {
      const rule = regular.price
      if (rule.test(price) === false) {
        return callback(new Error('请输入正确的价格'))
      } else {
        callback()
      }
    }
  },

  // 邮政编码
  checkPostCode: (rule, value, callback) => {
    if (!value) {
      callback()
    } else {
      const rule = regular.postCode
      if (rule.test(value) === false) {
        return callback(new Error('请输入正确的邮政编码'))
      } else {
        callback()
      }
    }
  },

  // ip
  checkIp: (rule, value, callback) => {
    const rules = regular.ip
    if (rules.test(value) === false) {
      return callback(new Error('请输入正确的ip格式'))
    } else {
      callback()
    }
  },

  // 设备mac
  checkMac: (rule, value, callback) => {
    const rules = regular.mac
    if (rules.test(value) === false) {
      return callback(new Error('请输入正确的Mac格式'))
    } else {
      callback()
    }
  },

  // 联系方式
  checkContactWay: (rule, value, callback) => {
    const phoneRule = regular.mobilePhone
    const landlineRule = regular.landline
    if (!value) {
      callback()
    } else {
      const numberString = String(value)
      if (phoneRule.test(numberString) || landlineRule.test(numberString)) {
        callback()
      } else if (phoneRule.test(numberString) === false && landlineRule.test(numberString) === false) {
        return callback(new Error('请输入正确的联系方式'))
      }
    }
  },

  // 检测正确的人数
  checkPeopleNumber: (rule, value, callback) => {
    const reg = regular.quantity
    if (reg.test(String(value)) === false) {
      return callback(new Error('请输入正确的人数'))
    } else {
      callback()
    }
  },

  // 检测数量
  checkQuantity: (rule, value, callback) => {
    const reg = regular.quantity
    if (reg.test(String(value)) === false) {
      return callback(new Error('请输入正确的数量'))
    } else {
      callback()
    }
  },

  // 检测面积
  checkArea: (rule, value, callback) => {
    const floatReg = regular.floatNumber
    const intReg = regular.peopleNumber

    if (parseFloat(value) > 0) {
      if (floatReg.test(String(value)) || intReg.test(String(value))) {
        callback()
      } else {
        return callback(new Error('请输入正确的面积'))
      }
    } else {
      return callback(new Error('请输入正确的面积'))
    }
  },

  // 检测数组是否为空
  checkArray: (rule, value, callback) => {
    if (value.length === 0) {
      return callback(new Error('数组不能为空'))
    } else {
      callback()
    }
  }


}

export default rules