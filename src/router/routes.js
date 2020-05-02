import BlogEntries from 'assets/data/blogs.json'
import Home from 'pages/Home.vue'
import About from 'pages/About.vue'
import Projects from 'pages/Projects.vue'
import Music from 'pages/Music.vue'
import Links from 'pages/Links.vue'

import MarkdownViewer from 'components/blog/MarkdownViewer.vue'

// http://localhost:8080/#/blog/2020/entry
// http://localhost:8080/#/blog/2020/my-first-entry
const blogRoutes = BlogEntries.map(child => ({
    path: `${child.id}`,
    name: `${child.id}`,
    component: MarkdownViewer,
    props: { 
      markdown: require(`../blog-entries/${child.id}.md`).default,
      id: child.id,
      title: child.title,
      image: child.image,
    },

  // This if we want an intermediate view for each section
  // return {
  //   path: section,
  //   name: section,
  //   // component: () => import('../layouts/BlogLayout.vue'),
  //   children,
  // }
}));
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('layouts/MainLayout.vue'),
    children:
    [
      {
        path: '',
        component: About,
      },
    ],
  },
  {
    path: '/blog',
    component: () => import('layouts/MainLayout.vue'),
    children:
    [
      {
        path: '',
        name: 'BlogRoot',
        component: () => import('pages/BlogIndex.vue'),
      },
      ...blogRoutes,
    ],
  },
  {
    path: '/projects',
    name: 'Projects',
    component: () => import('layouts/MainLayout.vue'),
    children:
    [
      {
        path: '',
        component: Projects,
      },
    ],
  },
  {
    path: '/music',
    name: 'Music',
    component: () => import('layouts/MainLayout.vue'),
    children:
    [
      {
        path: '',
        component: Music,
      },
    ],
  },        
  {
    path: '/links',
    name: 'Links',
    component: () => import('layouts/MainLayout.vue'),
    children:
    [
      {
        path: '',
        component: Links,
      },
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
