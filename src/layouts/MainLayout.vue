<template>
  
        <div class="col">
        <h3>This is the main layout</h3>
          <router-view />
        </div>
</template>

<script>
// import SideNav from 'components/SideNav'
// import Tail from 'components/Tail'

export default {
  name: 'MainLayout',
  created () {
    console.log('main layout');
  },
  // components: { SideNav, Tail },
  data () {
    return {
      drawerOpened: false
    }
  },
  computed: {
    color () {
      const { id, tag } = this.$route.params
      return this.$colors[id || tag] || 'cyan'
    }
  }
}
</script>

<style lang="stylus" scoped>
</style>
