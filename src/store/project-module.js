import ProjectEntries from 'assets/data/projects.json'

const mapDataByTag = (projectEntries)=> {
  const outputArray = [];
  projectEntries.forEach((el) => {
    el.tags.forEach((tag) => {
      if (!outputArray[tag]) outputArray[tag] = []
      outputArray[tag].push(el)
    })
  })
  return outputArray;
}
const mapDataByDate = (projectEntries)=> {
  return [...projectEntries].sort((el1, el2)=> {
    return new Date(el2.date).getTime() - new Date(el1.date).getTime();
  });
}
const projectModule = {
  namespaced: true,
  state: {
    projectsByDate: [],
    projectsByTag: [],
  },
  getters: {
    projectDataByDate(state) {
      return state.projectsByDate;
    },
    projectDataByTag(state) {
      return state.projectsByTag;
    },
  },
  actions: {
    fetchProjectData({ commit }) {
      commit('setProjectDataByDate', { data: mapDataByDate(ProjectEntries) })
      commit('setProjectDataByTag', { data: mapDataByTag(ProjectEntries) })
    },
  },
  mutations: {
    setProjectDataByDate(state, { data }) {
      state.projectsByDate = data;
    },
    setProjectDataByTag(state, { data }) {
      state.projectsByTag = data;
    },
  },
}

export default projectModule
