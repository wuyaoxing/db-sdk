## entities
将前端数据进行拆分，建立对应keyById关系。

e.g
```
export default {
  state: {
    projects: _.keyBy(projects, item => item.id)
  },
  mutations: {
    resetProject (state) {
      state.projects = {}
    }
  },
  actions: {
  }
}
```
