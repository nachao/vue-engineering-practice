# Vue技术栈实践

> 以最新版本的 ``Webpack@4.26.1``，和最新版本的 ``Vue@2.5.17`` 的基础上进行研究。

**研究重点：**
  - vue
  - vue-loader
  - vue-class-template
  - webpack(devServer\splitChunks)
  - typescript
  - eslint

## 技术点

**用于基本的编译：**
- [x] webpack webpack-cli
- [x] html-loader
- [ ] url-loader


**用于解析Vue框架代码：**
- [x] vue-loader
- [x] vue-template-compiler


**用于运行一个开发服务环境：**
- [x] webpack-dev-server


**用于将公共文件、样式文件、第三方抽离出：**
- [x] mini-css-extract-plugin
- [x] webpack.optimization.splitChunks
- [x] html-webpack-plugin
- [x] html-webpack-include-assets-plugin
- [x] webpack.externals


**用于实现按需加载组件文件：**
- [x] component: () => import('./component-file-path-name') must `export default`
- [x] babel-plugin-syntax-dynamic-import
- [ ] @babel/polyfill `?`


**用于解决ES语法差异：**
- [x] @babel/core @babel/env


**用于实现后端服务渲染：**
- [ ] vue-server-render


**用于实现前端自动化测试：**
- [ ] vue-test-utils


**用于前端代码风格及语法检查和统一：**
- [ ] eslint


**用于规范代码的强类型语法：**
- [x] typescript
- [x] tslint
- [x] tslint-loader
- [x] babel-loader

**用于编写scss样式：**
- [x] ~~css-loader~~（由于仅适用scss）
- [x] node-scss
- [x] sass-loader
- [x] ~~style-loader~~（由于会和MiniCssExtractPlugin.loader冲突）
- [ ] postcss-loader


**用于Vue框架**
- [x] vue
- [ ] vuex
- [x] vue-router
- [x] vue-property-decorator

**用于服务请求**
- [x] axios



## 想要实践的问题或目的
  1. 如何最快最简单编译出.vue组件文件？
  2. 如何使用devServer开启调试服务，以及测试接口？
  3. 如何抽出公共和第三方？
  4. 如何引入class编辑方式？
  5. 如何引入ts？
  6. 如何实现vue后端渲染？
  7. 如何引入单页eslint，并如何更规范的编写规则？

下载代码后，安装对应的依赖：
```javascript
 yarn
```

## 如何最快最简单编译出.vue组件文件？

目录介绍:
```javascript
  |-- template    // 单页的.vue文件模板目录
    |-- index.vue // 模板文件
    |-- ...
  |-- dist        // 编译后文件
  |-- index.html  // 访问文件
  |-- app.js      // vue应用实例文件
  |-- webpack.config.js   // webpack配置位置
```

涉及包依赖:
```c
yarn add vue vue-template-compiler vue-loader css-loader webpack-cli
```
