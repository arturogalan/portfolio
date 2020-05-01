
const uiModule = {
  namespaced: true,
  state: {
    lateralMenuOpened: false,
  },
  getters: {
    fetchLateralMenuOpened(state) {
      return state.lateralMenuOpened;
    },
  },
  actions: {
    toggleLateralMenuOpened({ commit }) {
      commit('toggleLateralMenuOpened')
    },
  },
  mutations: {
    toggleLateralMenuOpened(state) {
      state.lateralMenuOpened = !state.lateralMenuOpened;
    },
  },
}

export default uiModule
