import BlogEntries from 'assets/data/blogs.json'

const mapDataByTag = (blogEntries, outputArray)=> {
  Object.keys(blogEntries).map(sectionKey => {
    const section = blogEntries[sectionKey]
    section.forEach((el) => {
      el.tags.forEach((tag) => {
        if (!outputArray[tag]) outputArray[tag] = []
        outputArray[tag].push(el)
      })
    })
  })
}
const mapDataByDate = (blogEntries, outputArray)=> {
  Object.keys(blogEntries).map(sectionKey => {
    const section = blogEntries[sectionKey]
    section.forEach((el) => {
      el.tags.forEach((tag) => {
        if (!outputArray[tag]) outputArray[tag] = []
        outputArray[tag].push(el)
      })
    })
  })
}
const blogModule = {
  namespaced: true,
  state: {
    blogs: [],
    blogsByTag: [],
  },
  getters: {
    showInfoModal(state) {
      return state.infoModal
    },
  },
  actions: {
    fetchBlogData({ commit }) {
      const blogEntriesByTag = []
      mapDataByTag(BlogEntries, blogEntriesByTag);
      console.log(blogEntriesByTag)
      commit('setBlogDataByTag', { data: BlogEntries })
    },
  },
  mutations: {
    setBlogDataByDate(state, { data }) {
      state.blogs = data
    },
    setBlogDataByTag(state, { data }) {
      state.blogsByTag = data
    },
  },
}

export default blogModule
