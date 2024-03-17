import axios from "axios";

// 创建一个axios对象
const request = axios.create({
  baseURL: 'http//:www.wangkai.com:8000',
  timeout: 5000
})

// 请求拦截
request.interceptors.request.use(config => {
  // xxxx
  return config;
})

// 响应拦截
request.interceptors.response.use(res => {
  return res.data;
})

export default request;