// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import VueScrollTo from 'vue-scrollto'

import './css/main.css'

const fontsCss =
`
/* comfortaa-regular - latin */
@font-face {
  font-family: 'Comfortaa';
  font-style: normal;
  font-weight: 400;
  src: url('/fonts/comfortaa-v29-latin-regular.eot'); /* IE9 Compat Modes */
  src: local(''),
       url('/fonts/comfortaa-v29-latin-regular.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('/fonts/comfortaa-v29-latin-regular.woff2') format('woff2'), /* Super Modern Browsers */
       url('/fonts/comfortaa-v29-latin-regular.woff') format('woff'), /* Modern Browsers */
       url('/fonts/comfortaa-v29-latin-regular.ttf') format('truetype'), /* Safari, Android, iOS */
       url('/fonts/comfortaa-v29-latin-regular.svg#Comfortaa') format('svg'); /* Legacy iOS */
}
`

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)

  Vue.use(VueScrollTo, {
    duration: 700,
    easing: 'ease'
  })

  head.style.push({
    type: 'text/css',
    cssText: fontsCss
  })
}
