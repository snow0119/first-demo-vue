# first-demo-vue

> my project of vue

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

## File Description

* build 目录是编译最终执行代码相关的配置文件和脚本文件
* src 目录是项目的源码
  1. src 目录下的 main.js 是项目入口
  2. asstes 目录一般放一些不做任何处理的静态资源
  3. components 目录是项目中使用到的公共组件存放的位置
  4. router 目录是初始化路由的配置
      - router目录下，index.js文件中routes 是一个数组，包含一个对象，
      用 path 定义路由路径、component 定义一个路由对应是实际组件.
      - 有两种方式定义 component：
      一种是同步方式直接 import/require 组件，
      另一种是我们现在使用的异步加载模式, 套路：resolve => require([componentPath], resolve), 
      - componentPath 必须传完整的字符串，不能顶一个变量去拼接，因为 webpack 是根据字符串去处理依赖的。

* 除了目录以外，下面还有很多文件，很多还是以 . 开头的，这些都是项目里用到的一些插件需要的配置文件，
  放在根目录因为这些插件默认就是从根目录开始读取配置。
  1. .babelrc 是 babel 代码编译的配置
  2. .editorconfig 是编辑器基本代码风格的配置
  3. .eslintignore 是 eslint 校验忽略的配置
  4. .eslintrc.js 是 eslint 代码校验的配置

* App.vue 是整个应用的容器

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
