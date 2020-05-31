import Vue from 'vue'
import Vuex from 'vuex'
import VueAnime from 'vue-animejs'
import blogModule from './blog-module'
import uiModule from './ui-module'
import projectModule from './project-module'
import analytics from "../helpers/analitycs";

// import example from './module-example'
analytics.init(window);
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
      project: projectModule,
      ui: uiModule,
    },

    // enable strict mode (adds overhead!)
    // for dev mode only
    strict: process.env.DEV,
  })

  return Store
}
