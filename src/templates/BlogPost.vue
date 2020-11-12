<template>
  <Layout>
    <h1 class="leading-tight text-4xl font-bold text-strong mb-2">
      {{ $page.post.title }}
    </h1>
    <p class="font-light mb-4 text-gray-700">
      {{ $page.post.date }}
    </p>
    <div class="flex flex-wrap mb-4 text-sm">
      <g-link
        v-for="tag in $page.post.tags"
        :key="tag.id"
        :to="tag.path"
        class="bg-softer rounded-full px-2 py-1 mr-4 mb-4 text-strong hover:text-default hover:bg-soft"
      >
        {{ tag.title }}
      </g-link>
    </div>
    <!-- This is the figure element we added: -->
    <figure
      v-if="$page.post.image"
      class="flex justify-center flex-col"
    >
      <g-image
        :alt="$page.post.image.alt"
        :src="$page.post.image.path"
        class="mb-2 m-auto"
      />
      <figcaption
        class="image-caption self-center mb-15"
        v-html="$page.post.image.caption"
      />
    </figure>
    <div
      class="mb-16 markdown"
      v-html="$page.post.content"
    />
    <g-link
      class="mt-2"
      to="/blog"
    >
      <div class="font-bold uppercase mb-8 text-green-500 hover:text-green-200">
        Return to blog
      </div>
    </g-link>
  </Layout>
</template>

<page-query>
query Post ($path: String!) {
  post: blogPost (path: $path) {
    title
    date (format: "MMMM D, Y")
    readtime
    content
    path
    summary
    image {
      path
      caption
      alt
    }
    tags {
      title
      path
    }
  }
}
</page-query>

<script>
import PostSeo from '../mixins/PostSEO'

export default {
  mixins: [PostSeo]
}
</script>

<style src="../css/markdown.css" />
