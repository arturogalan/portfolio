<template>
  <section>
  <q-img
    src="~assets/svg/bg-links.svg"
    :class="$q.platform.is.mobile ? 'post-header post-header--mobile' : 'post-header post-header--desktop'"
    :img-style="{opacity: 0.3}"
    :ratio="16/9">
    <div class="post-title absolute-full text-subtitle2 flex flex-center text-black">
      <p>Links</p>
    </div>
  </q-img>
  <gradient-layout>
  <div class="q-ml-xl q-mt-md">
  <q-markdown>

    Here I'll put interesting links about tech, design, interesting people to follow, talks etc...
    
  </q-markdown>
  </div>
  </gradient-layout>
  </section>

</template>
<script>
import GradientLayout from 'layouts/GradientLayout'

export default {
  components: {
    GradientLayout,
  },
}
</script>
<style lang="scss" scoped>
</style>
