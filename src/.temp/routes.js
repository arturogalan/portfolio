const c1 = () => import(/* webpackChunkName: "page--src--templates--tag-vue" */ "/Users/turu/git/perso/portfolio/src/templates/Tag.vue")
const c2 = () => import(/* webpackChunkName: "page--src--templates--blog-post-vue" */ "/Users/turu/git/perso/portfolio/src/templates/BlogPost.vue")
const c3 = () => import(/* webpackChunkName: "page--src--pages--blog-vue" */ "/Users/turu/git/perso/portfolio/src/pages/Blog.vue")
const c4 = () => import(/* webpackChunkName: "page--node-modules--gridsome--app--pages--404-vue" */ "/Users/turu/git/perso/portfolio/node_modules/gridsome/app/pages/404.vue")
const c5 = () => import(/* webpackChunkName: "page--src--pages--index-vue" */ "/Users/turu/git/perso/portfolio/src/pages/Index.vue")

export default [
  {
    path: "/en/tag/post/",
    component: c1,
    meta: {
      locale: "en-en"
    }
  },
  {
    path: "/es/tag/post/",
    component: c1,
    meta: {
      locale: "es-es"
    }
  },
  {
    path: "/en/tag/netlify/",
    component: c1,
    meta: {
      locale: "en-en"
    }
  },
  {
    path: "/es/tag/netlify/",
    component: c1,
    meta: {
      locale: "es-es"
    }
  },
  {
    path: "/en/blog/write-ntfs-in-mac-part-1/",
    component: c2,
    meta: {
      locale: "en-en"
    }
  },
  {
    path: "/es/blog/write-ntfs-in-mac-part-1/",
    component: c2,
    meta: {
      locale: "es-es"
    }
  },
  {
    path: "/en/blog/raspberry-nabaztag-part1/",
    component: c2,
    meta: {
      locale: "en-en"
    }
  },
  {
    path: "/en/blog/raspberry-nabaztag-part2/",
    component: c2,
    meta: {
      locale: "en-en"
    }
  },
  {
    path: "/es/blog/raspberry-nabaztag-part1/",
    component: c2,
    meta: {
      locale: "es-es"
    }
  },
  {
    path: "/es/blog/raspberry-nabaztag-part2/",
    component: c2,
    meta: {
      locale: "es-es"
    }
  },
  {
    path: "/en/blog/my-first-post-netlify/",
    component: c2,
    meta: {
      locale: "en-en"
    }
  },
  {
    path: "/es/blog/my-first-post-netlify/",
    component: c2,
    meta: {
      locale: "es-es"
    }
  },
  {
    path: "/en/tag/Mac/",
    component: c1,
    meta: {
      locale: "en-en"
    }
  },
  {
    path: "/en/tag/Python/",
    component: c1,
    meta: {
      locale: "en-en"
    }
  },
  {
    path: "/en/tag/Raspberry%20pi/",
    component: c1,
    meta: {
      locale: "en-en"
    }
  },
  {
    path: "/en/tag/Tools/",
    component: c1,
    meta: {
      locale: "en-en"
    }
  },
  {
    path: "/es/tag/Mac/",
    component: c1,
    meta: {
      locale: "es-es"
    }
  },
  {
    path: "/es/tag/Python/",
    component: c1,
    meta: {
      locale: "es-es"
    }
  },
  {
    path: "/es/tag/Raspberry%20pi/",
    component: c1,
    meta: {
      locale: "es-es"
    }
  },
  {
    path: "/es/tag/Tools/",
    component: c1,
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
    component: c1,
    meta: {
      locale: "en-en"
    }
  },
  {
    path: "/blog/:slug/",
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
