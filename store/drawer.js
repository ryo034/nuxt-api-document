export const state = () => ({
  navigationDrawer: false,
  sections: []
})

export const getters = {
  getNavigationDrawer(state) {
    return state.navigationDrawer
  },
  getSections(state) {
    return state.sections
  }
}

export const mutations = {
  toggleNavigationDrawer(state) {
    state.navigationDrawer = !state.navigationDrawer
  },
  setNavigationDrawerStatus(state, status) {
    state.navigationDrawer = status
  },
  setSections(state, sectinos) {
    state.sections = sectinos
  },
  toggleSectionDrawer(state, { index, status }) {
    state.sections[index].active = status
  }
}

export const actions = {
  toggleSectionDrawer(context, { index, status }) {
    context.commit('toggleSectionDrawer', { index, status })
  },
  setLicense(context, license) {
    context.commit('setLicense', license)
  }
}
