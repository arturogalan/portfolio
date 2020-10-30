const c1 = () => import(/* webpackChunkName: "page--src--templates--blog-post-vue" */ "/Users/turu/git/perso/portfolio/src/templates/BlogPost.vue")
const c2 = () => import(/* webpackChunkName: "page--src--templates--tag-vue" */ "/Users/turu/git/perso/portfolio/src/templates/Tag.vue")
const c3 = () => import(/* webpackChunkName: "page--src--pages--blog-vue" */ "/Users/turu/git/perso/portfolio/src/pages/Blog.vue")
const c4 = () => import(/* webpackChunkName: "page--node-modules--gridsome--app--pages--404-vue" */ "/Users/turu/git/perso/portfolio/node_modules/gridsome/app/pages/404.vue")
const c5 = () => import(/* webpackChunkName: "page--src--pages--index-vue" */ "/Users/turu/git/perso/portfolio/src/pages/Index.vue")

export default [
  {
    path: "/en/blog/2020/07/03/third-post/",
    component: c1,
    meta: {
      locale: "en-en"
    }
  },
  {
    path: "/es/blog/2020/07/03/third-post/",
    component: c1,
    meta: {
      locale: "es-es"
    }
  },
  {
    path: "/en/blog/2020/06/05/first-post/",
    component: c1,
    meta: {
      locale: "en-en"
    }
  },
  {
    path: "/en/blog/2030/01/30/fourth-post/",
    component: c1,
    meta: {
      locale: "en-en"
    }
  },
  {
    path: "/es/blog/2020/06/05/first-post/",
    component: c1,
    meta: {
      locale: "es-es"
    }
  },
  {
    path: "/es/blog/2030/01/30/fourth-post/",
    component: c1,
    meta: {
      locale: "es-es"
    }
  },
  {
    path: "/blog/:year/:month/:day/:slug/",
    component: c1,
    meta: {
      locale: "en-en"
    }
  },
  {
    path: "/en/tag/hipster/",
    component: c2,
    meta: {
      locale: "en-en"
    }
  },
  {
    path: "/es/tag/hipster/",
    component: c2,
    meta: {
      locale: "es-es"
    }
  },
  {
    path: "/en/tag/future/",
    component: c2,
    meta: {
      locale: "en-en"
    }
  },
  {
    path: "/es/tag/future/",
    component: c2,
    meta: {
      locale: "es-es"
    }
  },
  {
    path: "/en/tag/design/",
    component: c2,
    meta: {
      locale: "en-en"
    }
  },
  {
    path: "/es/tag/design/",
    component: c2,
    meta: {
      locale: "es-es"
    }
  },
  {
    path: "/en/tag/backend/",
    component: c2,
    meta: {
      locale: "en-en"
    }
  },
  {
    path: "/es/tag/backend/",
    component: c2,
    meta: {
      locale: "es-es"
    }
  },
  {
    path: "/en/blog/",
    component: c3,
    meta: {
      locale: "en-en"
    }
  },
  {
    path: "/es/blog/",
    component: c3,
    meta: {
      locale: "es-es"
    }
  },
  {
    name: "404__en-en",
    path: "/en/404/",
    component: c4,
    meta: {
      locale: "en-en"
    }
  },
  {
    name: "404__es-es",
    path: "/es/404/",
    component: c4,
    meta: {
      locale: "es-es"
    }
  },
  {
    path: "/tag/:id/",
    component: c2,
    meta: {
      locale: "en-en"
    }
  },
  {
    name: "__en_slug",
    path: "/en/:slug+",
    component: c4,
    meta: {
      dataPath: "/en/_slug_plus.json",
      dynamic: true,
      locale: "en-en"
    }
  },
  {
    name: "__es_slug",
    path: "/es/:slug+",
    component: c4,
    meta: {
      dataPath: "/es/_slug_plus.json",
      dynamic: true,
      locale: "es-es"
    }
  },
  {
    name: "home__en-en",
    path: "/en/",
    component: c5,
    meta: {
      locale: "en-en"
    }
  },
  {
    name: "home__es-es",
    path: "/es/",
    component: c5,
    meta: {
      locale: "es-es"
    }
  },
  {
    path: "/blog/",
    component: c3,
    meta: {
      locale: "en-en"
    }
  },
  {
    name: "404",
    path: "/404/",
    component: c4,
    meta: {
      locale: "en-en"
    }
  },
  {
    name: "home",
    path: "/",
    component: c5,
    meta: {
      locale: "en-en"
    }
  },
  {
    name: "*",
    path: "*",
    component: c4,
    meta: {
      locale: "en-en"
    }
  }
]
