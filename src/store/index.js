import Vue from 'vue'
import Vuex from 'vuex'
import VueAnime from 'vue-animejs'
import blogModule from './blog-module'
import uiModule from './ui-module'

// import example from './module-example'

Vue.use(Vuex)
Vue.use(VueAnime)

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */

export default function(/* { ssrContext } */) {
  const Store = new Vuex.Store({
    modules: {
      blog: blogModule,
      ui: uiModule,
    },

    // enable strict mode (adds overhead!)
    // for dev mode only
    strict: process.env.DEV,
  })

  return Store
}
