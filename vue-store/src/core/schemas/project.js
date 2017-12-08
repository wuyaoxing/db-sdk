// import { AlgebraicType } from '@/core/utils/algebraic-type'

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
  enableChecklist: Boolean,
  stats: Object,
  members: Array
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
  enableChecklist: false,
  stats: {},
  members: []
}

// const test = AlgebraicType({
//   ProjectSchema,
//   KanbanSchema: {
//     id: String
//   }
// })
// console.log(
//   'test',
//   test,
//   test.hasType('KanbanSchema'),
//   test.validate({ type: ProjectSchema })
// )
// test.ProjectSchema({ id: '789' })
