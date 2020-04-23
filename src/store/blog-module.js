import BlogEntries from 'assets/data/blogs.json'

const mapDataByTag = (blogEntries)=> {
  const outputArray = [];
  blogEntries.forEach((el) => {
    el.tags.forEach((tag) => {
      if (!outputArray[tag]) outputArray[tag] = []
      outputArray[tag].push(el)
    })
  })
  return outputArray;
}
const mapDataByDate = (blogEntries)=> {
  return [...blogEntries].sort((el1, el2)=> {
    return new Date(el2.date).getTime() - new Date(el1.date).getTime();
  });
}
const blogModule = {
  namespaced: true,
  state: {
    blogsByDate: [],
    blogsByTag: [],
  },
  getters: {
    blogDataByDate(state) {
      return state.blogsByDate;
    },
    blogDataByTag(state) {
      return state.blogsByTag;
    },
  },
  actions: {
    fetchBlogData({ commit }) {
      commit('setBlogDataByDate', { data: mapDataByDate(BlogEntries) })
      commit('setBlogDataByTag', { data: mapDataByTag(BlogEntries) })
    },
  },
  mutations: {
    setBlogDataByDate(state, { data }) {
      console.log(data);
      state.blogsByDate = data;
    },
    setBlogDataByTag(state, { data }) {
      console.log(data);
      state.blogsByTag = data;
    },
  },
}

export default blogModule
