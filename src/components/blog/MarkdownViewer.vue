<template>
<div id="asd" class="markdown-container">
    <q-markdown :src="markdown"/>
    <!-- <json-api-viewer
      title="QMarkdown API"
      :json="json"
    /> -->
    <!-- <q-markdown> -->
</div>
</template>

<script>
export default {
  name: 'MarkdownViewer',
  async mounted() {
  },
  components: {
    // markdownVue
  },
  props: {
    markdown: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      importedMarkdown: '',
    }
  },
  methods: {
  },
}
</script>
<style lang="scss" scoped>
  .markdown-container{
    padding-left: 2rem;
  }
</style>
