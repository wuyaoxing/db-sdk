export const KanbanColumnSchema = {
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

export const KanbanColumnBaseSchema = {
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
