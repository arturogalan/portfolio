<template>
  <q-layout view="hHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title>
          {{$t('BLOG.TITLE.TEXT')}}
        </q-toolbar-title>

        <div>v{{ $t('BLOG.VERSION') }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="primary-light"
    >
      <q-list>
        <q-item-label
          header />

        <!-- <q-item-label
          header
          class="text-grey-8"
        > -->
          <!-- left drawer title text here -->
        <!-- </q-item-label> -->
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from 'components/EssentialLink'

export default {
  name: 'MainLayout',

  components: {
    EssentialLink,
  },

  data() {
    return {
      leftDrawerOpen: false,
      essentialLinks: [
        {
          title: this.$t('BLOG.LEFT_DRAWER.LINK_ABOUT.TITLE'),
          caption: this.$t('BLOG.LEFT_DRAWER.LINK_ABOUT.CAPTION'),
          icon: 'school',
          link: 'https://quasar.dev',
        },
        {
          title: this.$t('BLOG.LEFT_DRAWER.LINK_POSTS.TITLE'),
          caption: this.$t('BLOG.LEFT_DRAWER.LINK_POSTS.CAPTION'),
          icon: 'code',
          link: '#/blog',
        },
        {
          title: this.$t('BLOG.LEFT_DRAWER.LINK_PROJECTS.TITLE'),
          caption: this.$t('BLOG.LEFT_DRAWER.LINK_PROJECTS.CAPTION'),
          icon: 'chat',
          link: 'https://chat.quasar.dev',
        },
        {
          title: this.$t('BLOG.LEFT_DRAWER.LINK_MUSIC.TITLE'),
          caption: this.$t('BLOG.LEFT_DRAWER.LINK_MUSIC.CAPTION'),
          icon: 'record_voice_over',
          link: 'https://forum.quasar.dev',
        },
        {
          title: this.$t('BLOG.LEFT_DRAWER.LINK_LINKS.TITLE'),
          caption: this.$t('BLOG.LEFT_DRAWER.LINK_LINKS.CAPTION'),
          icon: 'rss_feed',
          link: 'https://twitter.quasar.dev',
        },
      ],
    }
  },
}
</script>
