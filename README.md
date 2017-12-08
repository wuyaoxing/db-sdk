# db-sdk
database schema in frontEnd.

## db-store

```bash
🗁 db-store         ## db-store
|--🗁 doc
|--🗁 src
|  |--🗁 apis
|  |--🗁 fetchs
|  |--🗁 models
|  |--🗁 schemas
|  |--🗁 sockets
|  |--🗁 storage
|  |--🗁 utils
|  `--🗎 index.js
`--🗎 package.json
```

## vue-store

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
