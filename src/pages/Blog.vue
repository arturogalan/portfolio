<template>
  <Layout>
    <section
      v-for="post in $page.posts.edges"
      :key="post.path"
    >
      <g-link :to="post.node.path">
        <h2 class="text-3xl font-bold">
          {{ post.node.title }}
        </h2>

        <div class="text-soft mb-4">
          <span>{{ post.node.date }}</span><span> · </span><span>{{ post.node.readtime }} read</span>
        </div>
        <p class="mb-4">
          {{ post.node.summary }}
        </p>
        <div class="font-bold uppercase mb-8 text-green-500 hover:text-green-200">
          Go to post
        </div>
      </g-link>
      <div
        class="border-t-2 mt-6 mb-6 border-dashed"
      />
    </section>
  </Layout>
</template>

<page-query>
query Posts {
  posts: allBlogPost (sortBy: "date", order: DESC) {
    edges {
      node {
        title
        summary
        date (format: "MMMM D, Y")
        readtime
        path
      }
    }
  }
}
</page-query>

<script>
export default {
  metaInfo: {
    title: 'Blog'
  }
}
</script>
