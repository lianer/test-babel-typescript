# 基于 TypeScript + Babel + Rollup 搭建 ts 开发环境

[toc]

## 前言

本篇文章讲述了基于 TypeScript + Babel + Rollup 搭建 ts 开发环境的解决方案，先赘述了此方案的优劣势，后按步骤具体讲解各个插件的配置方式，以帮助大家了解 TS 项目的编译原理。

以下是该文章示例代码所依赖的基础环境，如有不符，配置引导可能无法正常运行。

- [MacOS](https://www.apple.com.cn/cn/mac/)
- [NodeJS](https://nodejs.org/) v8+
- [Yarn](https://yarn.bootcss.com/)
- [Visual Stadio Code](https://code.visualstudio.com/)
- [Git](https://git-scm.com/)

## TypeScript + Babel 方案的特点

### 什么是 Babel-TypeScript

大家也许在 Babel 官网中看到过一个 preset，叫 `@babel/preset-typescript`，没错，Babel 不仅可以编译 ES6 的语法糖、对浏览器兼容性进行 polyfill 以外，还扩展了对 TypeScript 的支持，但它与官方的 TypeScript 有一些差异，比较特殊。

下面，由我来给大家一一道来。

### 开发体验特点

使用 TypeScript + Babel 方案搭建的项目有什么特点？

1. 开发编译过程，babel 会直接去除 typescript 类型标记，输出编译结果
    1. 速度很快，但没有类型检查
2. 通过 eslint 做语法检查和类型检查
    1. 并且检查时机是在 commit 时（由 husky 添加的钩子）
    2. 当然，vscode 对 typescript 的类型检查也有一定程度的支持
3. 为了降低语法检查带来的麻烦，通过配置 prettier 来格式化代码
    1. 保存文件时（需要配置编辑器）触发 prettier
    2. 执行 git commit 时（由 husky 实现）触发 prettier

### Babel 编译的劣势

万事开头难，先说说 Babel 编译的劣势

1. Babel 编译 TypeScript 不会做类型检查，所有的类型声明都会被 Babel 抛弃掉
2. 不支持编译部分语法，比如：import xx = ‘xx’、namespace（无关紧要，这些语法都已弃用了）

Typescript 编译器完全没有上述的问题，那为什么还要多此一举使用 Babel 编译 Typescript 呢？

### Babel 编译的优势

先苦后甜，再来说说 Babel 的优势

1. `灵活性` - Babel 支持根据浏览器兼容性要求按需编译，这个 TypeScript 是不支持的，且官方也声明过不在考虑范围内
2. `Polyfill` - Babel 支持根据浏览器兼容性要求按需添加 Polyfill
3. `Plugins/Presets` - Babel 支持超级多的 Plugins，而且通过预设 Presets 可以免去复杂的 Plugins 配置，这点 TypeScript 也不能满足

好，赘述完了，我们来看一下实战演练，动手做个 demo。

懒人请执行以下命令，后面的就不用动手了（先查看上面的基础环境要求，以确保你的环境可以正常运行以下命令）

```bash
git clone https://github.com/lianer/test-babel-typescript.git
```

## 创建一个空的 demo 项目

在命令行直接执行这些命令，先搭一个基础的仓库脚手架

```bash
mkdir test
cd test

npm init

mkdir src
cd src

# 下面多行内容一整段复制执行
cat <<EOF > index.ts
const sum = function (a: number, b: number): number {
  return a + b;
};
console.log(sum(1, 2));
EOF
```

目录结构如下

```
| src
  | index.ts
| package.json
```

## 配置 typescript

配置核心要求的 typescript，虽然仅仅会在 lint 的时候用到它

> 1、安装 typescript 依赖

```
yarn add -D typescript
```

> 2、添加 tsconfig 配置文件

因为是 demo 项目，没有太多要求，因此这里保持默认的配置就足够了

```bash
./node_modules/.bin/tsc --init
```

## 配置 rollup、babel 套件

支持对 ts 文件的编译，产出 js 文件

### 相关资料

- [rollup](https://www.rollupjs.com/)
- [rollup-plugin-babel](https://github.com/rollup/rollup-plugin-babel)
- [@rollup/plugin-node-resolve](https://github.com/rollup/plugins/tree/master/packages/node-resolve)
- [@babel/preset-env](https://www.babeljs.cn/docs/babel-preset-env)
- [@babel/preset-typescript](https://www.babeljs.cn/docs/babel-preset-typescript)

### 配置引导

> 1、安装相关依赖

```bash
# 安装 rollup 套件
yarn add -D rollup rollup-plugin-babel@latest @rollup/plugin-node-resolve

# 安装 babel 套件
yarn add -D @babel/core @babel/preset-env @babel/preset-typescript
```

> 2、添加 .babelrc 配置文件

```js
{
  "presets": [
    "@babel/preset-env",
    "@babel/preset-typescript"
  ]
}
```

> 3、添加 rollup.config.js 配置文件

```js
const path = require('path');
const babel = require('rollup-plugin-babel');
const nodeResolve = require('@rollup/plugin-node-resolve');
const pkg = require('./package.json');

const extensions = ['.js', '.ts'];

const resolve = function(...args) {
  return path.resolve(__dirname, ...args);
};

module.exports = {
  input: resolve('./src/index.ts'),
  output: {
    file: resolve('./', pkg.main), // 为了项目的统一性，这里读取 package.json 中的配置项
    format: 'esm',
  },
  plugins: [
    nodeResolve({
      extensions,
      modulesOnly: true,
    }),
    babel({
      exclude: 'node_modules/**',
      extensions,
    }),
  ],
};
```

> 4、配置 npm scripts

如果先前项目里还没有 `package.json` 文件，可以先通过 `npm init` 命令初始化一个

```js
"scripts": {
  "build": "rollup -c"
},
```

> 5、在 rollup.config.js 中，用到了 package.json - main 配置项，因此别忘了修改一下 package.json

```js
"main": "lib/index.js"
```


> 5、测试一下

```bash
npm run build
```

打包成功，输出结果

```
> test-typescript-babel@1.0.0 build /dev/test
/dev/test/src/index.ts → lib/index.js...
> rollup -c
created lib/index.js in 460ms
```

目录结构

```
| lib
  | index.js
| src
  | index.ts
| .babelrc
| package.json
| rollup.config.js
| tsconfig.json
| yarn.lock
```

编译出的 lib/index.js 文件内容

```js
var sum = function sum(a, b) {
  return a + b;
};

console.log(sum(1, 2));
```

认真的同学可能注意到了，Babel 仅仅只是把 TypeScript 类型`移除`了而已。

注：如果你再这一步报错了，提示 `The "path" argument must be of type string. Received type undefined`，则检查 package.json - main 配置是否有误

## 配置 eslint、prettier

支持代码的类型校验、语法校验，以及代码格式化

### 相关资料

- [eslint](https://eslint.org/)
- [prettier](https://prettier.io/)
- [lint-staged](https://github.com/okonet/lint-staged)
- [mrm](https://github.com/sapegin/mrm)


### 配置引导

> 1、安装依赖

```bash
# 安装 eslint 套件
yarn add -D eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin

# 安装 prettier
yarn add -D prettier

# 安装 husky、lint-staged 套件
yanr add -D husky lint-staged
```

> 2、添加配置文件 .eslintrc.js

.eslintrc.js 文件描述 eslint 语法检查和 ts 类型检查的规则

```js
const path = require('path');
module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:@typescript-eslint/recommended' // Uses the recommended rules from the @typescript-eslint/eslint-plugin
  ],
  parserOptions: {
    project: path.resolve(__dirname, './tsconfig.json'),
    tsconfigRootDir: __dirname,
    ecmaVersion: 2019, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
  },
  rules: {
    // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
    // e.g. "@typescript-eslint/explicit-function-return-type": "off",
  }
};
```

> 3、添加配置文件 .prettierrc

.prettierrc 文件描述代码格式化的规则

```js
{
  "semi":  true,
  "trailingComma":  "all",
  "singleQuote":  true,
  "printWidth":  120,
  "tabWidth":  2
}
```


> 4、修改 package.json，配置 husky 和 lint-staged

一个非常庞大的项目，eslint 完整检查可能需要花费几分钟的时间。

而 husky + lint-staged 可以实现只对提交的文件进行检查，从而提升开发效率。

这样即使你的项目再大，也仅仅是检查本次提交的文件，只需几秒钟。

```js
"scripts": {
  "lint": "eslint 'src/**/*.{js,ts}'"
},
"husky": {
  "hooks": {
    "pre-commit": "lint-staged"
  }
},
"lint-staged": {
  "*./src/**/*.{js,ts,json,css,less,md}": [
    "prettier --write",
    "yarn lint"
  ]
}
```

上述配置可以实现在执行 `git commit` 时调用 `prettier` 格式化代码，并使用 `eslint` 做类型和语法的检查。

> 5、如果想要保存文件时自动格式化代码，则需要安装 vscode 插件 `prettier`，并做如下配置

```js
"editor.formatOnSave": false, // 全局默认关闭不做格式化，仅针对 js 和 ts 格式化
"[javascript]": {
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true,
},
"[typescript]": {
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true,
},
```

## 进一步完善打包机制

进一步完善 rollup 的打包机制，支持多任务打包，打包出不同项目所需的资源文件。

引入 `rimraf, npm-run-all, rollup-plugin-uglify, lodash.merge`

### 相关资料

- [rimraf](https://github.com/isaacs/rimraf) - 文件删除工具，用于每次编译前清空 lib 目录
- [npm-run-all](https://github.com/mysticatea/npm-run-all) - npm 命令并行执行工具
- rollup-plugin-uglify - uglify js 压缩工具（rollup 版）
- lodash.merge - 配置合并工具

### 配置引导

> 1、 安装依赖

```
yarn add -D rimraf npm-run-all rollup-plugin-uglify lodash.merge
```

> 2、修改 rollup.config.js

```js
const path = require('path');
const babel = require('rollup-plugin-babel');
const nodeResolve = require('@rollup/plugin-node-resolve');
const uglify = require('rollup-plugin-uglify').uglify;
const merge = require('lodash.merge');
const pkg = require('./package.json');

const extensions = ['.js', '.ts'];

const resolve = function(...args) {
  return path.resolve(__dirname, ...args);
};

// 打包任务的个性化配置
const jobs = {
  esm: {
    output: {
      format: 'esm',
      file: resolve(pkg.module),
    },
  },
  umd: {
    output: {
      format: 'umd',
      file: resolve(pkg.main),
      name: 'rem',
    },
  },
  min: {
    output: {
      format: 'umd',
      file: resolve(pkg.main.replace(/(.\w+)$/, '.min$1')),
      name: 'rem',
    },
    plugins: [uglify()],
  },
};

// 从环境变量获取打包特征
const mergeConfig = jobs[process.env.FORMAT || 'esm'];

module.exports = merge(
  {
    input: resolve('./src/index.ts'),
    output: {},
    plugins: [
      nodeResolve({
        extensions,
        modulesOnly: true,
      }),
      babel({
        exclude: 'node_modules/**',
        extensions,
      }),
    ],
  },
  mergeConfig,
);
```

> 3、修改 package.json - scripts

```js
"main": "lib/index.umd.js",
"module": "lib/index.esm.js",
"scripts": {
  "lint": "eslint 'src/**/*.{js,ts}'",
  "dev": "rollup -w -c --environment FORMAT:esm",
  "build:esm": "rollup -c --environment FORMAT:esm",
  "build:umd": "rollup -c --environment FORMAT:umd",
  "build:min": "rollup -c --environment FORMAT:min",
  "build": "rimraf lib/* && run-p build:esm build:umd build:min"
},
```

在这里，我们先通过 rimraf 工具清空 lib 目录，然后再通过 npm-run-all 工具并行 3 个子编译任务

这里的 3 个子编译任务，分别是：

- build:esm - 编译出符合 esm 规范的可执行文件，供 Vue、React 等采用 esmodule 规范进行模块化打包的项目使用
- build:umd - 编译出符合 umd 规范的可执行文件，供 jQuery、Vue、NodeJS 等项目使用
- build:min - 编译出符合 umd 规范的压缩的可执行文件

> 4、测试执行打包命令

```bash
npm run build
```

输出结果文件

```
| lib
  | rem.esm.js
  | rem.umd.js
  | rem.umd.min.js
```

## 进一步完善工程

统一编辑器的行为，比如空格、缩进等，并添加 git 忽略列表

> 1、添加 .editorconfig 配置文件，编辑器安装相应的 editorconfig 插件，使该项目统一应用相同的空格、缩进等编码风格

```
root = true

[*]
charset = utf-8
indent_style = space
indent_size = 2
end_of_line = lf
insert_final_newline = true
trim_trailing_whitespace = true
```

> 2、添加 .gitignore 配置文件，这里推荐一个 .gitignore 的生成工具 - [gitignore.io](https://www.gitignore.io/)

```bash
# Created by https://www.gitignore.io/api/vuejs,visualstudiocode
# Edit at https://www.gitignore.io/?templates=vuejs,visualstudiocode

### VisualStudioCode ###
.vscode/*
!.vscode/settings.json
!.vscode/tasks.json
!.vscode/launch.json
!.vscode/extensions.json

### VisualStudioCode Patch ###
# Ignore all local history of files
.history

### Vuejs ###
# Recommended template: Node.gitignore

node_modules/
dist/
npm-debug.log
yarn-error.log

# End of https://www.gitignore.io/api/vuejs,visualstudiocode
```

## Result

至此，基于 Rollup + Babel + TypeScript + ESLint 的整套套件的搭建就完成了。

如果有不够完善的地方，欢迎在文末进行点评[点赞]。
