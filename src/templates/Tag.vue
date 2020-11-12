<template>
  <Layout>
    <!-- class="text-4xl text-strong mb-5" -->
    <div class="flex align-middle items-center">
      <span class="text-2xl mb-4">
        Posts with tag: &nbsp;
      </span>
      <h1
        class="text-2xl bg-softer rounded-full px-4 mr-4 mb-4 font-bold hover:text-default hover:bg-soft"
      >
        {{ $page.tag.title }}
      </h1>
    </div>
    <h2
      v-if="$page.tag.description"
      class="text-lg"
    >
      {{ $page.tag.description }}
    </h2>
    <div
      class="border-t-2 mt-6 mb-6 border-dashed"
    />
    <ul class="list-outside list-disc">
      <section
        v-for="post in $page.tag.belongsTo.edges"
        :key="post.node.id"
        class="mt-3"
      >
        <!-- <g-link :to="post.node.path">
          {{ post.node.title }} – {{ post.node.date }}
        </g-link> -->

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
      </section>
    </ul>
  </Layout>
</template>

<page-query>
query Tag ($id: ID!) {
  tag: tag (id: $id) {
    title
    description
    belongsTo {
      totalCount
      edges {
        node {
          ...on BlogPost {
            title
            date (format: "MMMM D, Y")
            readtime
            path
          }
        }
      }
    }
  }
}
</page-query>

<script>
export default {
  metaInfo () {
    return {
      title: 'Tag: ' + this.$page.tag.title
    }
  }
}
</script>
