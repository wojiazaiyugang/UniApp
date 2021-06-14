import axios from "axios"

import {isDev} from "@/utils/development"

const service = axios.create({
  baseURL: isDev() ? "http://127.0.0.1:5000" : "http://49.232.142.100:5006",
  timeout: 5000,
  crossDomain: true
})

service.interceptors.request.use(
  config => {
    return config
  },
  error => {
    console.log(error)
    return Promise.reject(error)
  }
)

service.interceptors.response.use(
  response => {
    let data = response.data
    if (data.code !== 0) {
      console.log(`接口返回值异常，code=${data.code}，在这里进行全局异常处理`)
      return Promise.reject(data.msg)
    }
    return Promise.resolve(data.data)
  },
  error => {
    console.log(error)
    return Promise.reject(error)
  }
)

//真机获取
axios.defaults.adapter = config => {
  return new Promise((resolve, reject) => {
    let settle = require("axios/lib/core/settle")
    let buildURL = require("axios/lib/helpers/buildURL")
    uni.request({
      method: config.method.toUpperCase(),
      url: config.baseURL + buildURL(config.url, config.params, config.paramsSerializer),
      header: config.headers,
      data: config.data,
      dataType: config.dataType,
      responseType: config.responseType,
      sslVerify: config.sslVerify,
      complete: function complete(response) {
        response = {
          data: response.data,
          status: response.statusCode,
          errMsg: response.errMsg,
          header: response.header,
          config: config
        }
        settle(resolve, reject, response)
      }
    })
  })
}

export default service
