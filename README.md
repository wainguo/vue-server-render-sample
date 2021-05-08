## 简介

本项目为支持数据预取的Vue服务端渲染示例项目。
* 支持开发模式实时请求显示。
* 支持通过命令生成动态渲染后的静态页面文件。

## 开发

```bash
# 克隆项目
# 进入项目目录
# 安装依赖
npm install

# 建议不要直接使用 cnpm 安装依赖，会有各种诡异的 bug。可以通过如下操作解决 npm 下载速度慢的问题
npm install --registry=https://registry.npm.taobao.org

# 启动dev服务
npm run build
npm run start
# 浏览器访问 http://127.0.0.1:8080

# 生成静态页面
npm run build
node renderToFileCmd.js  # 注意这个命令需要自行根据需求定制，这里仅仅作为示例
```


## 发布
生成的静态页面，以及dist资源按依赖结构部署在ng下即可

## 参考
[Vue.js 服务器端渲染指南](https://ssr.vuejs.org/zh/)
