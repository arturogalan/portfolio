<script>
import LateralMenuContents from '@/components/blog/LateralMenuContents'
export default {
  name: 'MainLayout',
  components: {
    LateralMenuContents,
  },
  data () {
    return {
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

    <q-drawer content-class="bg-blue-3" show-if-above v-model="left" side="left" bordered>
    <lateral-menu-contents/>
      <!-- drawer content -->
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<style lang="stylus" scoped>
</style>
