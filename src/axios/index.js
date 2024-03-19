import axios from "axios";

// 创建一个axios对象
const request = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL,
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