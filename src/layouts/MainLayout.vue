
<template>
  <q-layout view="hHh lpR fFf">

    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="left = !left" />
        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg">
          </q-avatar>
          Title
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer show-if-above v-model="left" side="left" bordered>
      <ul>
        <li>this is a link</li>
      </ul>
      <!-- drawer content -->
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
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
      drawerOpened: false,
      left: true,
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
