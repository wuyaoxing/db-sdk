## schemas
定义 `frontend` 数据类型，供数据检验以及数据补全。

e.g
```
export const ProjectSchema = {
  id: String,
  orgId: String,
  no: Number,
  name: String,
  descr: String,
  creator: String,
  created: String,
  visibility: Number,
  archived: Boolean,
  state: Number,
  permission: String,
  enablePlanpoint: Boolean,
  enableTaskpoint: Boolean,
  enableChecklist: Boolean
}

export const ProjectBaseSchema = {
  id: '',
  orgId: '',
  no: 0,
  name: '',
  descr: '',
  creator: '',
  created: '',
  visibility: 0,
  archived: false,
  state: 0,
  permission: '11111111',
  enablePlanpoint: false,
  enableTaskpoint: false,
  enableChecklist: false
}
```
