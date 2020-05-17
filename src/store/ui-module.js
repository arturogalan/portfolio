
const uiModule = {
  namespaced: true,
  state: {
    lateralMenuOpened: false,
    animationsOn: false,
    leftDrawerOpened: false,
  },
  getters: {
    fetchLateralMenuOpened(state) {
      return state.lateralMenuOpened;
    },
    fetchAnimationsOn(state) {
      return state.animationsOn;
    },
    fetchLeftDrawerOpened(state) {
      return state.leftDrawerOpened;
    },
  },
  actions: {
    toggleLateralMenuOpened({ commit }) {
      commit('toggleLateralMenuOpened')
    },
    toggleAnimationOn({ commit }) {
      commit('toggleAnimationOn')
    },
    setLeftDrawerOpened({commit}, value) {
      commit('setLeftDrawerOpened', value);
    },
  },
  mutations: {
    toggleLateralMenuOpened(state) {
      state.lateralMenuOpened = !state.lateralMenuOpened;
    },
    toggleAnimationOn(state) {
      state.animationsOn = true;
    },
    setLeftDrawerOpened(state, value) {
      debugger;
      state.leftDrawerOpened = value;
    },
  },
}

export default uiModule
