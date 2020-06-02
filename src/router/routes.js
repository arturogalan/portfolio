import BlogEntries from 'assets/data/blogs.json'
import ProjectEntries from 'assets/data/projects.json'
import Home from 'pages/Home.vue'
import About from 'pages/About.vue'
import Projects from 'pages/Projects.vue'
import Music from 'pages/Music.vue'
import Links from 'pages/Links.vue'

import MarkdownViewer from 'components/blog/MarkdownViewer.vue'

// http://localhost:8080/blog/2020/entry
// http://localhost:8080/blog/2020/my-first-entry
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
}));
const projectsRoutes = ProjectEntries.map(child => ({
  path: `${child.id}`,
  name: `${child.id}`,
  component: MarkdownViewer,
  props: { 
    markdown: require(`../project-entries/${child.id}.md`).default,
    id: child.id,
    title: child.title,
    image: child.image,
  },
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
        name: 'Projects',
        component: () => import('pages/Projects.vue'),
      },
      ...projectsRoutes,
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
        name: 'Music',
        component: () => import('pages/Music.vue'),
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
        name: 'Links',
        component: () => import('pages/Links.vue'),
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
