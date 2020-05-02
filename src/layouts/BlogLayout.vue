<template>
  <div style="max-width: 100vw" class="q-px-lg q-pb-xl blog">
    <h3>This is the blog layout</h3>
    <router-view />
  </div>
</template>

<script>
import BLOGS from 'statics/data/blogs.json'

export default {
  name: 'BlogLayout',
  mounted () {
    console.log('bloglayout mounted')
  },
  computed: {
    entry () {
      return Object
        .keys(BLOGS)
        .map(entry => BLOGS[entry])
        .reduce((a, b) => a.concat(b), [])
        .find(blog => blog.id === this.$route.name)
    },
    urlWithProtocol () {
      return window.location.protocol + '//' + this.fullUrl
    },
    fullUrl () {
      const hostname = window.location.hostname
      return `${hostname}${this.$route.fullPath}`
    },
  },
  meta () {
    return {
      title: `| Blog - ${this.entry.title}`,
      meta: {
        description: { name: 'description', content: this.entry.description },
      },
    }
  },
}
</script>

<style lang="stylus" scoped>
</style>
