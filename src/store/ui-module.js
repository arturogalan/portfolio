
const uiModule = {
  namespaced: true,
  state: {
    lateralMenuOpened: false,
    animationsOn: false,
  },
  getters: {
    fetchLateralMenuOpened(state) {
      return state.lateralMenuOpened;
    },
    fetchAnimationsOn(state) {
      return state.animationsOn;
    },
  },
  actions: {
    toggleLateralMenuOpened({ commit }) {
      commit('toggleLateralMenuOpened')
    },
    toggleAnimationOn({ commit }) {
      commit('toggleAnimationOn')
    },
  },
  mutations: {
    toggleLateralMenuOpened(state) {
      state.lateralMenuOpened = !state.lateralMenuOpened;
    },
    toggleAnimationOn(state) {
      state.animationsOn = true;
    },
  },
}

export default uiModule
