import plugin_gridsome_plugin_i_18_n_5 from "/Users/turu/git/arturo-portfolio/node_modules/gridsome-plugin-i18n/gridsome.client.js"
import plugin_gridsome_plugin_netlify_cms_7 from "/Users/turu/git/arturo-portfolio/node_modules/gridsome-plugin-netlify-cms/gridsome.client.js"

export default [
  {
    run: plugin_gridsome_plugin_i_18_n_5,
    options: {"locales":["es-es","en-en"],"pathAliases":{"es-es":"es","en-en":"en"},"fallbackLocale":"en-en","defaultLocale":"en-en","enablePathRewrite":true,"rewriteDefaultLanguage":false,"messages":{"es-es":{"index":{"welcome":"welcome this is my blog tataaaa","hello":"Hi there!","hello_paragraph1":"Hi! I’m 🦄 Arturo Galán 🦄 and I’m a Spanish developer. Currently I´m working as a frontend developer at Clarity.ai mainly with Vue.js, Javascript and SCSS. Interested in web technologies like Web Audio, SVG, D3 and CSS animations."}},"en-en":{"index":{"welcome":"welcome this is my blog tataaaa","hello":"Hello!","hello_paragraph1":"I’m a 🦄  frontend 🦄 developer from Spain.","hello_paragraph2":"Interested in web technologies like Web Audio, SVG, D3 and CSS animations."}}},"enablePathGeneration":true,"routes":{}}
  },
  {
    run: plugin_gridsome_plugin_netlify_cms_7,
    options: {"publicPath":"/admin","htmlTitle":"Content Editor","configPath":"src/admin/config.yml","modulePath":"/Users/turu/git/arturo-portfolio/node_modules/gridsome-plugin-netlify-cms/lib/cms.js","htmlPath":"/Users/turu/git/arturo-portfolio/node_modules/gridsome-plugin-netlify-cms/templates/index.html","injectScript":true,"enableIdentityWidget":true,"debug":false}
  }
]
