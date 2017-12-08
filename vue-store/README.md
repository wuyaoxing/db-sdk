# vue-store

> 项目状态管理

## 文件结构
```bash
🗁 vue-store    ## vue-store
|--🗁 src
|  |--🗁 core
|  |  |--🗁 apis
|  |  |--🗁 fetchs
|  |  |--🗁 models
|  |  |--🗁 schemas    ## api请求数据基本类型以及结构定义，用于数据验证以及补全
|  |  |--🗁 sockets
|  |  |--🗁 storage
|  |  |  |--🗁 database    ## k:y 结构数据存储
|  |  |  |  |--🗎 project.js
|  |  |  |  |--🗎 kanban.js
|  |  |  |  |--🗎 kanbanColumn.js
|  |  |  |  `--🗎 index.js
|  |  |  |--🗁 workspace    ## 项目配置信息以及关系数据工具函数
|  |  |     `--🗎 index.js
|  |  |--🗁 utils
|  |  `--🗎 index.js
|  `--🗎 index.js
`--🗎 package.json
```

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
