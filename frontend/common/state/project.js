import Vue from 'vue'

const state = Vue.observable({
  project: {}
})

export function getProject () {
  return state.project
}

export function setProject (project) {
  Vue.set(state, 'project', project)
}
