const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      '/api1': { // 匹配所有以'api1'开头的请求
        target: 'www.dev.com:8000', // 代理目标的基础路径（要访问的跨域的域名）
        ws: true, // 是否使用websocket
        pathRewrite: {
          '^api1': '' // 在返回给服务器的路径中吧'/api1'用''替换
        },
        changeOrigin: false, // 开启代理：在本地会创建一个虚拟服务端，然后发送请求的数据，并同时接受请求的数据，这样客户端和服务端进行数据的交互就不会有跨域问题
        secure: false, // 是否使用https协议 --- http: false; https: true
      }
    }
  }
})
