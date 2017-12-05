## database
将前端数据进行拆分，建立对应keyById关系，以及实际业务relation。

e.g
```
export default {
  state () {
    return {
      projects: _.keyBy(projects, item => item.id)
    }
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
