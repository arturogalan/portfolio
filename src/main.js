// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import { config, library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import '@fortawesome/fontawesome-svg-core/styles.css'
import { faGithub, faLinkedin, faSpotify, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faBullseye, faDotCircle, faEnvelope, faFeather, faHeadphones, faLaptopCode, faMoon, faRobot, faSun } from '@fortawesome/free-solid-svg-icons'
import VueScrollTo from 'vue-scrollto'
import DefaultLayout from '~/layouts/Default.vue'
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
/* comfortaa-700 - latin */
@font-face {
  font-family: 'Comfortaa';
  font-style: normal;
  font-weight: 700;
  src: url('/fonts/comfortaa-v29-latin-700.eot'); /* IE9 Compat Modes */
  src: local(''),
       url('/fonts/comfortaa-v29-latin-700.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('/fonts/comfortaa-v29-latin-700.woff2') format('woff2'), /* Super Modern Browsers */
       url('/fonts/comfortaa-v29-latin-700.woff') format('woff'), /* Modern Browsers */
       url('/fonts/comfortaa-v29-latin-700.ttf') format('truetype'), /* Safari, Android, iOS */
       url('/fonts/comfortaa-v29-latin-700.svg#Comfortaa') format('svg'); /* Legacy iOS */
}
/* ranchers-regular - latin */
@font-face {
  font-family: 'Ranchers';
  font-style: normal;
  font-weight: 400;
  src: url('/fonts/ranchers-v8-latin-regular.eot'); /* IE9 Compat Modes */
  src: local('Ranchers'), local('Ranchers-Regular'),
       url('/fonts/ranchers-v8-latin-regular.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('/fonts/ranchers-v8-latin-regular.woff2') format('woff2'), /* Super Modern Browsers */
       url('/fonts/ranchers-v8-latin-regular.woff') format('woff'), /* Modern Browsers */
       url('/fonts/ranchers-v8-latin-regular.ttf') format('truetype'), /* Safari, Android, iOS */
       url('/fonts/ranchers-v8-latin-regular.svg#Ranchers') format('svg'); /* Legacy iOS */
}
/* nunito-sans-regular - latin */
@font-face {
  font-family: 'Nunito Sans';
  font-style: normal;
  font-weight: 400;
  src: url('/fonts/nunito-sans-v6-latin-regular.eot'); /* IE9 Compat Modes */
  src: local('Nunito Sans Regular'), local('NunitoSans-Regular'),
       url('/fonts/nunito-sans-v6-latin-regular.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('/fonts/nunito-sans-v6-latin-regular.woff2') format('woff2'), /* Super Modern Browsers */
       url('/fonts/nunito-sans-v6-latin-regular.woff') format('woff'), /* Modern Browsers */
       url('/fonts/nunito-sans-v6-latin-regular.ttf') format('truetype'), /* Safari, Android, iOS */
       url('/fonts/nunito-sans-v6-latin-regular.svg#NunitoSans') format('svg'); /* Legacy iOS */
}
/* nunito-sans-600 - latin */
@font-face {
  font-family: 'Nunito Sans';
  font-style: normal;
  font-weight: 600;
  src: url('/fonts/nunito-sans-v6-latin-600.eot'); /* IE9 Compat Modes */
  src: local('Nunito Sans SemiBold'), local('NunitoSans-SemiBold'),
       url('/fonts/nunito-sans-v6-latin-600.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('/fonts/nunito-sans-v6-latin-600.woff2') format('woff2'), /* Super Modern Browsers */
       url('/fonts/nunito-sans-v6-latin-600.woff') format('woff'), /* Modern Browsers */
       url('/fonts/nunito-sans-v6-latin-600.ttf') format('truetype'), /* Safari, Android, iOS */
       url('/fonts/nunito-sans-v6-latin-600.svg#NunitoSans') format('svg'); /* Legacy iOS */
}
/* nunito-sans-700 - latin */
@font-face {
  font-family: 'Nunito Sans';
  font-style: normal;
  font-weight: 700;
  src: url('/fonts/nunito-sans-v6-latin-700.eot'); /* IE9 Compat Modes */
  src: local('Nunito Sans Bold'), local('NunitoSans-Bold'),
       url('/fonts/nunito-sans-v6-latin-700.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('/fonts/nunito-sans-v6-latin-700.woff2') format('woff2'), /* Super Modern Browsers */
       url('/fonts/nunito-sans-v6-latin-700.woff') format('woff'), /* Modern Browsers */
       url('/fonts/nunito-sans-v6-latin-700.ttf') format('truetype'), /* Safari, Android, iOS */
       url('/fonts/nunito-sans-v6-latin-700.svg#NunitoSans') format('svg'); /* Legacy iOS */
}
/* nunito-sans-800 - latin */
@font-face {
  font-family: 'Nunito Sans';
  font-style: normal;
  font-weight: 800;
  src: url('/fonts/nunito-sans-v6-latin-800.eot'); /* IE9 Compat Modes */
  src: local('Nunito Sans ExtraBold'), local('NunitoSans-ExtraBold'),
       url('/fonts/nunito-sans-v6-latin-800.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('/fonts/nunito-sans-v6-latin-800.woff2') format('woff2'), /* Super Modern Browsers */
       url('/fonts/nunito-sans-v6-latin-800.woff') format('woff'), /* Modern Browsers */
       url('/fonts/nunito-sans-v6-latin-800.ttf') format('truetype'), /* Safari, Android, iOS */
       url('/fonts/nunito-sans-v6-latin-800.svg#NunitoSans') format('svg'); /* Legacy iOS */
}
/* roboto-regular - latin */
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  src: url('/fonts/roboto-v20-latin-regular.eot'); /* IE9 Compat Modes */
  src: local('Roboto'), local('Roboto-Regular'),
       url('/fonts/roboto-v20-latin-regular.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('/fonts/roboto-v20-latin-regular.woff2') format('woff2'), /* Super Modern Browsers */
       url('/fonts/roboto-v20-latin-regular.woff') format('woff'), /* Modern Browsers */
       url('/fonts/roboto-v20-latin-regular.ttf') format('truetype'), /* Safari, Android, iOS */
       url('/fonts/roboto-v20-latin-regular.svg#Roboto') format('svg'); /* Legacy iOS */
}
/* roboto-500 - latin */
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  src: url('/fonts/roboto-v20-latin-500.eot'); /* IE9 Compat Modes */
  src: local('Roboto Medium'), local('Roboto-Medium'),
       url('/fonts/roboto-v20-latin-500.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('/fonts/roboto-v20-latin-500.woff2') format('woff2'), /* Super Modern Browsers */
       url('/fonts/roboto-v20-latin-500.woff') format('woff'), /* Modern Browsers */
       url('/fonts/roboto-v20-latin-500.ttf') format('truetype'), /* Safari, Android, iOS */
       url('/fonts/roboto-v20-latin-500.svg#Roboto') format('svg'); /* Legacy iOS */
}
/* roboto-700 - latin */
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  src: url('/fonts/roboto-v20-latin-700.eot'); /* IE9 Compat Modes */
  src: local('Roboto Bold'), local('Roboto-Bold'),
       url('/fonts/roboto-v20-latin-700.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('/fonts/roboto-v20-latin-700.woff2') format('woff2'), /* Super Modern Browsers */
       url('/fonts/roboto-v20-latin-700.woff') format('woff'), /* Modern Browsers */
       url('/fonts/roboto-v20-latin-700.ttf') format('truetype'), /* Safari, Android, iOS */
       url('/fonts/roboto-v20-latin-700.svg#Roboto') format('svg'); /* Legacy iOS */
}
/* roboto-900 - latin */
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 900;
  src: url('/fonts/roboto-v20-latin-900.eot'); /* IE9 Compat Modes */
  src: local('Roboto Black'), local('Roboto-Black'),
       url('/fonts/roboto-v20-latin-900.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('/fonts/roboto-v20-latin-900.woff2') format('woff2'), /* Super Modern Browsers */
       url('/fonts/roboto-v20-latin-900.woff') format('woff'), /* Modern Browsers */
       url('/fonts/roboto-v20-latin-900.ttf') format('truetype'), /* Safari, Android, iOS */
       url('/fonts/roboto-v20-latin-900.svg#Roboto') format('svg'); /* Legacy iOS */
}
`

config.autoAddCss = false
library.add(faGithub, faTwitter, faLinkedin, faYoutube, faSpotify, faEnvelope, faBullseye, faDotCircle, faSun, faMoon, faRobot, faHeadphones, faLaptopCode, faFeather)

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
  // eslint-disable-next-line vue/component-definition-name-casing
  Vue.component('font-awesome', FontAwesomeIcon)

  Vue.use(VueScrollTo, {
    duration: 700,
    easing: 'ease'
  })

  head.style.push({
    type: 'text/css',
    cssText: fontsCss
  })
}
