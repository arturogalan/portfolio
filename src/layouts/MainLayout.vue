<template>
  <q-layout view="hHh Lpr lFf">
    <!-- <q-header elevated class="header-bg row" style="height: 6rem"> -->
    <q-header header elevated class="row">
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          size="xl"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />
        <q-toolbar-title class="title-index">
           <h3 class="q-mt-lg q-mb-lg q-ml-xl">&nbsp;</h3>
          <div class="header-flex absolute-top q-ml-xl">
            <q-img
              class="q-ml-xl q-mb-xs"
              src="~assets/svg/avatarSvg.svg"
              spinner-color="white"
              style="width: 90px; z-index: 4;"
              transition="slide-right"
            />
            <router-link
              to="/about"
            >
            <h2 class="blog-title q-mt-lg q-mb-lg q-ml-md" >
              {{$t('BLOG.TITLE.TEXT')}}
            </h2>
            </router-link>
          </div>
        </q-toolbar-title>
        <q-btn
          flat
          dense
          round
          icon="fab fa-linkedin-in"
          aria-label="Menu"
          size="lg"
          @click="console.log('bla')"
        />
        <q-btn
          flat
          dense
          round
          icon="fab fa-twitter"
          aria-label="Menu"
          size="lg"
          @click="console.log('bla')"
        />
        <q-btn
          flat
          dense
          round
          icon="fab fa-codepen"
          aria-label="Menu"
          size="lg"
          @click="console.log('bla')"
        />
        <!-- <div>v{{ $t('BLOG.VERSION') }}</div> -->
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="seconday-color-bg"
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
          :id="link.title"

          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <transition
        appear
        enter-active-class="animated fadeIn"
      >

      <router-view />
      </transition>
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
  // beforeRouteEnter(to, from, next) {
  //   console.log('bla');
  //   next();
  // },
  data() {
    return {
      leftDrawerOpen: false,
      essentialLinks: [
        { 
          title: this.$t('BLOG.LEFT_DRAWER.LINK_POSTS.TITLE'),
          caption: this.$t('BLOG.LEFT_DRAWER.LINK_POSTS.CAPTION'),
          icon: 'fas fa-book',
          link: '/blog',
        },
        {
          title: this.$t('BLOG.LEFT_DRAWER.LINK_PROJECTS.TITLE'),
          caption: this.$t('BLOG.LEFT_DRAWER.LINK_PROJECTS.CAPTION'),
          icon: 'fas fa-user-astronaut',
          link: '/projects',
        },
        {
          title: this.$t('BLOG.LEFT_DRAWER.LINK_MUSIC.TITLE'),
          caption: this.$t('BLOG.LEFT_DRAWER.LINK_MUSIC.CAPTION'),
          icon: 'fas fa-compact-disc',
          link: '/music',
        },
        {
          title: this.$t('BLOG.LEFT_DRAWER.LINK_LINKS.TITLE'),
          caption: this.$t('BLOG.LEFT_DRAWER.LINK_LINKS.CAPTION'),
          icon: 'far fa-paper-plane',
          link: '/links',
        },
        {
          title: this.$t('BLOG.LEFT_DRAWER.LINK_ABOUT.TITLE'),
          caption: this.$t('BLOG.LEFT_DRAWER.LINK_ABOUT.CAPTION'),
          icon: 'fas fa-portrait',
          link: '/about',
        },
      ],
    }
  },
}
</script>
  <style lang="scss" scoped>
  a:-webkit-any-link {
    text-decoration: none;
}
  .blog-title {
    font-family: "Anime";
    color: black;
      /* Unvisited link  */
    text-decoration: none;
  &:visited {
    text-decoration: none;
  } 
  /* Visited link    */
  &:hover {
    text-decoration: none;
  }   
  /* Mouse over link */
  &:active {
    text-decoration: none;
  }
  &-external{
    &:after {
      content: '';
    }
    text-decoration: none;
  }
  }
  .header-flex {
    display: flex;
    flex-wrap: nowrap;
    // background: url("~assets/svg/header-sky.svg") no-repeat;
    // background-size: cover;
  }
  .title-index {
    z-index: 2;
  }
</style>