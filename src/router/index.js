import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import BlogEntries from '../statics/data/blogs.json'

const blogRoutes = Object.keys(BlogEntries).map(section => {
  const children = BlogEntries[section].map(child => ({
    path: child.id,
    name: child.id,
    component: () => import(`../blogs/${section}/${child.id}.md`)
  }))
  return {
    path: section,
    name: section,
    component: () => import('../layouts/BlogLayout.vue'),
    children
  }
})

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: '/blog',
    component: () => import('../layouts/MainLayout.vue'),
    children: blogRoutes,
    // [
      // {
      //   path: '',
      //   name: 'BlogRoot',
      //   component: () => import('pages/Blogs.vue')
      // },
      // {
      //   path: ':id',
      //   name: 'BlogIndex',
      //   component: () => import('pages/Blogs.vue')
      // },
      // ...blogRoutes
    // ]
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
