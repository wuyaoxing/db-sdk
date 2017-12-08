import AlgebraicType from '@/core/utils/algebraic-type'
import DataStructure from '@/core/utils/data-structure'

const projectType = {
  PROJECT_UPDATE: { data: Object },
  PROJECT_ADD: { data: DataStructure.maybe(Object) }
}

const algebraicType = {
  ...projectType
}

export const MutationType = AlgebraicType(algebraicType)

export const Mutation = Object.keys(algebraicType).reduce((acc, val) => {
  acc[val] = val
  return acc
}, {})
