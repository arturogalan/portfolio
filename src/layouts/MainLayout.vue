<template>
  <q-layout view="hHh Lpr lFf">
    <!-- Had <q-layout view="hHh lpR fFf">
needed <q-layout view="hHh Lpr fFf"> -->
    <!-- lhr lpr fff -->
  <!-- <q-layout view="lhr Lpr lFf"> -->

    <!-- <q-header elevated class="header-bg row" style="height: 6rem"> -->
    <q-header header elevated class="header-style">
      <q-toolbar>
        <!-- <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          size="xl"
          @click="leftDrawerOpen = !leftDrawerOpen"
        /> -->
    <svg @click="makeTransition" class="menu-button" viewBox="-300 -40 800 240" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;">
        <g>
            <path class="line1" d="M180.519,6.275C180.519,2.812 177.707,0 174.244,0L6.275,0C2.812,0 0,2.812 0,6.275L0,18.826C0,22.289 2.812,25.101 6.275,25.101L174.244,25.101C177.707,25.101 180.519,22.289 180.519,18.826L180.519,6.275Z" style="fill:rgb(235,235,235);"/>
            <path class="line2" d="M180.519,57.534C180.519,54.071 177.707,51.259 174.244,51.259L6.275,51.259C2.812,51.259 0,54.071 0,57.534L0,70.084C0,73.548 2.812,76.36 6.275,76.36L174.244,76.36C177.707,76.36 180.519,73.548 180.519,70.084L180.519,57.534Z" style="fill:rgb(235,235,235);"/>
            <path class="line3" d="M180.519,109.234C180.519,105.77 177.707,102.959 174.244,102.959L6.275,102.959C2.812,102.959 0,105.77 0,109.234L0,121.784C0,125.247 2.812,128.059 6.275,128.059L174.244,128.059C177.707,128.059 180.519,125.247 180.519,121.784L180.519,109.234Z" style="fill:rgb(235,235,235);"/>
        </g>
    </svg>
        <!-- <img src="~assets/svg/vento.svg" class="menu-button"/> -->
        <!-- <q-icon clickable 
        class="menu-button" 
        name="menu"
        @click="leftDrawerOpen = !leftDrawerOpen"
        > -->
        <!-- </q-icon> -->
        <q-toolbar-title class="row no-wrap justify-left items-center content-center">
          <div class="header-flex">
            <q-img
              class="q-mb-xs"
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
      overlay
      @input="test"
    >
    <div 
    class="absolute fit"
    >
      <div class="absolute skew menu-bg" v-if="true">
      </div>
    </div>
    <div class="absolute fit-extend skew border-bg" v-if="false">
      <div 
      class="top-menu-thing" 
      :class="leftDrawerOpen && 'top-menu-thing--selected'"
      ></div>
      <div class="bottom-menu-thing"></div>
    </div>
    <q-list 
      class="menu-position confetti-button"
      :class="leftDrawerOpen && 'animate'"
      v-if="true"
    >
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

      <router-view/>
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
      firstTime: true,
      timeline: {},
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
  mounted() {
    this.createTransition();
    // if (this.leftDrawerOpen) this.makeInitialTransition();
  },
  watch: {
    leftDrawerOpen(newValue, oldValue) {
      if(newValue !== oldValue) {
        if (!this.firstTime) {
          this.timeline.reverse();
        } else if (!newValue){
          this.timeline.reverse();
        }
        this.timeline.play();
      }
      this.firstTime = false;
    },
  },
  methods: {
    test() {
      console.log('bla')
    },
    // makeInitialTransition() {
    //   console.log('entra')
    //   this.timeline.reverse();
    //   this.timeline.play();
    // },
    makeTransition() {
      this.leftDrawerOpen = !this.leftDrawerOpen
    },
    createTransition() {
      const menuButtonLine1 = {
        targets: '.line1',
        // translateY: ['0', '-28.5rem'],
        translateX: ['0', '3rem'],
        width: ['100%', '80%'],
        rotateZ: ['0', '45deg'],
        // easing: 'easeInOutExpo',
        // duration: 1500,
        // loop: false,
      }
      const menuButtonLine2 = {
        targets: '.line2',
        opacity: [1, 0],
        // easing: 'easeInOutExpo',
        // duration: 1500,
        // loop: false,

      }
      const menuButtonLine3 = {
        targets: '.line3',
        translateY: ['0', '3rem'],
        translateX: ['0', '-2rem'],
        width: ['100%', '80%'],
        rotateZ: ['0', '-45deg'],
      }

      this.timeline = this.$anime.timeline({
        easing: 'linear',
        duration: 200,
        autoplay: false,
      });
      this.timeline.add(menuButtonLine1, 0);
      this.timeline.add(menuButtonLine2, 0);
      this.timeline.add(menuButtonLine3, 0);

      // {
      //   targets: '.line3',
      //   translateX: 270,
      // });

    },
  },
}
</script>
  <style lang="scss" scoped>
  .menu-button {
    font-size: 5rem;
    cursor: pointer;
    width: 300px;
  }
  .header-style {
    -webkit-mask-image: url("~assets/png/grit.png");
    mask-image: url("~assets/png/grit.png");
  }
  .menu-position {
    position: absolute;
    padding-top: 0;
    top: -.8rem;
    bottom: 0;
    width: 100%;
    height: auto;
    z-index: 3;
  }
  .fit-auto {
    top: 0px;
    bottom: 0px;
    width: 100%;
    height: 100%;
  }
  .menu-bg{
    // border: solid 2px black;
    z-index: 1;
    top: -.6rem;
    bottom: 1rem;
    width: 100%;
    height: auto;
    background-color: white;
  }
  .border-bg {
    z-index: 0;
  }
  .fit-extend {
    height: 100%;
    width: 100%;
    // top: -3%;
  }
  .skew {
    transform: skewy($angle);
  }
  .top-menu-thing {
    position: absolute;
    width: auto;
    height: 4rem;
    top: -1rem;
    left: 0;
    right: 0;
    // background-color: black;
    // -webkit-mask-image: url("~assets/png/grit.png");
    // mask-image: url("~assets/png/grit.png");
  }
  .bottom-menu-thing {
    position: absolute;
    width: 100%;
    height: 50%;
    bottom: -7rem;
    background-color: $primary;
    -webkit-mask-image: url("~assets/png/grit.png");
    mask-image: url("~assets/png/grit.png");
  }
  a:-webkit-any-link {
    text-decoration: none;
}
  .blog-title {
    font-family: "Anime";
    font-size: 4.5rem;
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
  }
  .title-left {
    // z-index: 2;
  }
</style>