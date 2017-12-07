export const importProperties = (obj, type) => {
  return Object.keys(obj).reduce((acc, val) => {
    acc = Object.assign(acc, obj[val][type])
    return acc
  }, {})
}

export const resetProperties = (state, obj) => {
  return Object.keys(obj).forEach(key => {
    const commitEvent = `reset${key.replace(/( |^)[a-z]/g, L =>
      L.toUpperCase()
    )}`
    state.commit(commitEvent)
  })
}

export const initState = (data, schema, by = 'id') => {
  return data.reduce((acc, val) => {
    acc[val[by]] = { ...schema, ...val }
    return acc
  }, {})
}
