// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
const tailwind = require('tailwindcss')
const autoprefixer = require('autoprefixer')
const purgecss = require('@fullhuman/postcss-purgecss')
const purgecssConfig = require('./purgecss.config')
const postcssNesting = require('postcss-nesting') // this line

const postcssPlugins = [
  tailwind(),
  autoprefixer(),
  postcssNesting()
]

if (process.env.NODE_ENV === 'production') postcssPlugins.push(purgecss(purgecssConfig))

module.exports = {
  siteName: 'Arturo Galán',
  siteDescription: 'Blog about awesome lists, collections of resources around a specific technology.',
  siteUrl: process.env.DEPLOY_URL || 'https://arturogalan.com',
  metadata: {
    author: 'Arturo Galán',
    twitter: {
      site: '@turugalan',
      creator: '@turugalan'
    }
  },
  plugins: [
    {
      use: 'gridsome-plugin-i18n',
      options: {
        locales: [ // locales list
          'es-es',
          'en-en'
        ],
        pathAliases: { // path segment alias for each locales
          'es-es': 'es',
          'en-en': 'en'
        },
        fallbackLocale: 'en-en', // fallback language
        defaultLocale: 'en-en', // default language
        enablePathRewrite: true, // rewrite path with locale prefix, default: true
        rewriteDefaultLanguage: false, // rewrite default locale, default: true
        messages: {
          'es-es': require('./src/locales/es-es.json'), // Messages files
          'en-en': require('./src/locales/en-en.json')
        }
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'BlogPost',
        path: './content/blog/**/*.md',
        remark: {
          plugins: [
            ['gridsome-plugin-remark-shiki', { theme: 'nord', skipInline: true }]
          ]
        },
        // add this refs section so the BlogPosts are linked with the generated Tags pages
        refs: {
          tags: {
            typeName: 'Tag',
            create: true
          }
        }
      }
    },
    {
      use: '@gridsome/plugin-sitemap',
      options: {
        exclude: ['/privacy', '/legal']
      }
    }
  ],
  templates: {
    BlogPost: '/blog/:year/:month/:day/:slug',
    // add the tags template
    Tag: '/tag/:id'
  },
  css: {
    loaderOptions: {
      postcss: {
        plugins: postcssPlugins
      }
    }
  }
}
