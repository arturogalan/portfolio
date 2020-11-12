// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = function (api) {
  api.loadSource(({ getCollection }) => {
    // load the "BlogPost" collection
    const posts = getCollection('BlogPost')

    // go over every article and either remove it or prefix with "DRAFT: ", depending on NODE_ENV
    const now = new Date()
    posts.data().forEach(node => {
      if (new Date(node.date) > now) {
        if (process.env.NODE_ENV === 'production') {
          posts.removeNode(node.id) // must remove by node id
        } else {
          node.title = `DRAFT: ${node.title}`
        }
      }
    })

    const tagDescriptions = {
      Tools: 'Useful things that I use in my day by day work or thing that I automated',
      Mac: 'Articles related to Mac programs or development tools to use in MacOS',
      Python: 'Articles related with Python programming language',
      'Raspberry pi': 'Articles about Raspberry Pi projects, how to get some fun with this tiny computer'
    }

    const tags = getCollection('Tag')
    tags.data().forEach((tag) => {
      tag.description = tagDescriptions[tag.id]
    })
  })

  api.createPages(({ createPage }) => {
    // Use the Pages API here: https://gridsome.org/docs/pages-api/
  })
}
