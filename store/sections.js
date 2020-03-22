export const state = () => ({
  sections: []
})

export const getters = {
  getSections(state) {
    return state.sections
  }
}

export const mutations = {
  setSections(state, sectinos) {
    state.sections = sectinos
  }
}
