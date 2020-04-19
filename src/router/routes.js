import BlogEntries from 'assets/data/blogs.json'
import Home from 'pages/Home.vue'
import MarkdownViewer from 'components/blog/MarkdownViewer.vue'

// http://localhost:8080/#/blog/2020/entry
// http://localhost:8080/#/blog/2020/my-first-entry
const blogRoutes = Object.keys(BlogEntries).map(section => {
  const children = BlogEntries[section].map(child => ({
    path: `${section}/${child.id}`,
    name: `${section}/${child.id}`,
    component: MarkdownViewer,
    props: { markdown: require(`../blog-entries/${section}/${child.id}.md`).default },
  }))
  return children
  // This if we want an intermediate view for each section
  // return {
  //   path: section,
  //   name: section,
  //   // component: () => import('../layouts/BlogLayout.vue'),
  //   children,
  // }
}).flat()
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/blog',
    component: () => import('layouts/MainLayout.vue'),
    children:
    [
      {
        path: '',
        name: 'BlogRoot',
        component: () => import('pages/Index.vue'),
      },
      ...blogRoutes,
    ],
  },
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue'),
  })
}

export default routes
