export const initState = (data, schema) => {
  return data.reduce((acc, val) => {
    acc[val.id] = { ...schema, ...val }
    return acc
  }, {})
}
