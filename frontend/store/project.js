export const state = () => ({
  project: {}
})

export const getters = {
  getProject: state => state.project
}

export const mutations = {
  SET_PROJECT (state, project) {
    state.project = Object.assign({}, state.project, project)
  }
}
