export default (res) => {
  const records = res.data.records
  let listPrems = {}
  const ext = res.ext

  // 存在records
  if (records && records.length > 0) {
    for (let key in records[0]) {
      listPrems[key] = true
    }
  }

  // 重新分配权限
  if (ext && ext.length > 0) {
    for (let i = 0; i < ext.length; i++) {
      listPrems[ext[i]] = false
    }
  }

  return listPrems
}