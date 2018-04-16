const os = require('os')

// 获取当前主机ip地址
exports.getLocalIp = function() {
  let localIp = '0.0.0.0'

  // 获得网络接口列表
  let networkStr = JSON.stringify(os.networkInterfaces())

  let matchIPv4Arr = networkStr.match(/\{[^{}]*IPv4[^{}]*\}/gi)
  matchIPv4Arr = matchIPv4Arr
    ? matchIPv4Arr.join(',')
    : null
  let ipReg = /(\d{1,3}\.){3}\d{1,3}/g
  matchIPv4Arr = matchIPv4Arr
    ? matchIPv4Arr.match(ipReg)
    : null

  if (matchIPv4Arr) {
    for (let i = 0; i < matchIPv4Arr.length; i++) {
      if (!matchIPv4Arr[i].match(/^(255|127)/)) {
        localIp = matchIPv4Arr[i]
        break
      }
    }
  }
  return localIp
}