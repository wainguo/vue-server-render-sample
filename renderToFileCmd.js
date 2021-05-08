// 这个是个命令文件，build完成后，可以执行：node renderToFileCmd.js来生成渲染后的文件
const fs = require('fs')
const path = require('path')
const resolve = file => path.resolve(__dirname, file)
const { createBundleRenderer } = require('vue-server-renderer')

function createRenderer (bundle, options) {
  // https://github.com/vuejs/vue/blob/dev/packages/vue-server-renderer/README.md#why-use-bundlerenderer
  return createBundleRenderer(bundle, Object.assign(options, {
    // this is only needed when vue-server-renderer is npm-linked
    basedir: resolve('./dist'),
    // recommended for performance
    runInNewContext: false
  }))
}
const templatePath = resolve('./src/index.template.html')

const template = fs.readFileSync(templatePath, 'utf-8')
const bundle = require('./dist/vue-ssr-server-bundle.json')
const clientManifest = require('./dist/vue-ssr-client-manifest.json')
  renderer = createRenderer(bundle, {
    template,
    clientManifest
  })

const context = {
  title: '这是个Landing Page', // default title
  url: '/item/3', // 通过url路由参数不同来控制渲染不同的内容
}
const file = './dist/a.html';
renderer.renderToString(context, (err, html) => {
  if (err) {
    console.log(err)
  }
  const fileTo = resolve(file);
  fs.writeFileSync(fileTo, html)
  console.log('write file to :', fileTo);
})
