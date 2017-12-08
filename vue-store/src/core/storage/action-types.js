import AlgebraicType from '@/core/utils/algebraic-type'
import DataStructure from '@/core/utils/data-structure'

const projectType = {
  ProjectUpdate: { data: Object },
  ProjectAdd: { data: DataStructure.maybe(Object) }
}

const algebraicType = {
  ...projectType
}

export const ActionType = AlgebraicType(algebraicType)

export const Action = Object.keys(algebraicType).reduce((acc, val) => {
  acc[val] = val
  return acc
}, {})
