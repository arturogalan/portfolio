# Markdown test
###### 13 April 2020


This is a test about how to show a markdoen blog thread with `.vue` files.

### Vue-Markdown-Loader
Literally the first thing I did after that realization was to google _"vue markdown loader"_. And [QingWei-Li](https://github.com/QingWei-Li)'s [vue-markdown-loader repo](https://github.com/QingWei-Li/vue-markdown-loader) comes back as the first result. The documentation is pretty straightforward, I added this code over at my `vue.config.js`:

```javascript
module.exports = {
  chainWebpack(config){
    config.module.rule('md')
      .test(/\.md/)
      .use('vue-loader')
      .loader('vue-loader')
      .end()
      .use('vue-markdown-loader')
      .loader('vue-markdown-loader/lib/markdown-compiler')
      .options({
        raw: true
      })
  }
}
```