import AlgebraicType from 'algebraic-type'

export const projectSchema = {
  id: String
}

const test = AlgebraicType({
  projectSchema
})
console.log(test)
