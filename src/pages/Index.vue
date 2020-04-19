<template>
  <!-- <q-page class="flex flex-center"> -->
  <q-page class="flex">
    <h4>{{$t('BLOG.INDEX.INTRO_TEXT')}}</h4>
    <img
      alt="Quasar logo"
      src="~assets/quasar-logo-full.svg"
    >
  </q-page>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'PageIndex',
  created() {
    this.fetchBlogData()
  },
  methods: {
    ...mapActions('blog', [
      'fetchBlogData',
    ]),
  },
}
</script>
