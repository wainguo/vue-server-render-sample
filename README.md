## 简介

本项目为支持数据预取的Vue服务端渲染示例项目。
* 支持开发模式实时请求显示。
* 支持通过命令生成动态渲染后的静态页面文件。

需求背景：公司采用vue开发了一套拖拽生成landing page的制作系统，生成的pages可以通过预览，但仍然是vue应用，直接提供给客户访问会有性能等等问题，生成的landing pages有静态化的需求，所以调研vue ssr，通过ssr在服务端将vue应用静态化。可以通过路由参数的不同来静态化不同的页面。

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
