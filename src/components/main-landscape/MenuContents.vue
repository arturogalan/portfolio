<script>
import { openURL } from 'quasar'

export default {
  name: 'MenuContents',
  data() {
    return {
      homecontent: '',
    }
  },
  methods: {
    open(url) {
      openURL(url);
    },
  },
  created() {
    this.homecontent = this.$q.platform.is.mobile ? require('../../blog-entries/homecontent-mobile.md').default : require('../../blog-entries/homecontent.md').default;
  },
}
</script>
<template>
<section>
  <div
    class="menu-contents"
    :class="$q.platform.is.mobile ? 'menu-contents--mobile' : 'menu-contents--desktop'"
  >
     <q-markdown 
     :content-class="$q.platform.is.mobile ? 'home-content-class home-content-class--mobile' : 'home-content-class home-content-class--desktop'" 
     :src="homecontent"/>
  </div>
  <div
    class="media-links"
    :class="$q.platform.is.mobile ? 'media-links--mobile' : 'media-links--desktop'"
  >
    <q-btn class="media-icon"
    :class="$q.platform.is.mobile ? 'media-icon--mobile' : 'media-icon--desktop'" 
    @click="$router.push('blog')" round>
      <img
        :class="$q.platform.is.mobile && 'media-blog--mobile'"
        src="~assets/svg/avatarSvgWhite.svg"
      >
      <span 
      :class="$q.platform.is.mobile ? 'button-label-blog--mobile' : 'button-label-blog--desktop'"
      >Blog</span>
    </q-btn>
     <q-btn
      flat
      dense
      round
      icon="fab fa-linkedin-in"
      class="media-icon"
      :class="$q.platform.is.mobile ? 'media-icon--mobile' : 'media-icon--desktop'"
      @click="open('https://quasar.dev/')"
    ><span class="button-label">Linkedin</span>
    </q-btn>
    <q-btn
      flat
      dense
      round
      icon="fab fa-twitter"
      class="media-icon"
      :class="$q.platform.is.mobile ? 'media-icon--mobile' : 'media-icon--desktop'"
      @click="open('https://twitter.com/turugalan')"
    ><span class="button-label">Twitter</span>
    </q-btn>
    <q-btn
      flat
      dense
      round
      icon="fab fa-github"
      class="media-icon"
      :class="$q.platform.is.mobile ? 'media-icon--mobile' : 'media-icon--desktop'"
      @click="open('https://github.com/arturogalan')"
    ><span class="button-label">Github</span>
    </q-btn>
  </div>
</section>
</template>

<style lang="scss">
  .menu-contents {
    position: absolute;
    right: 0;
    z-index: 5;
    display: flex;
    align-items: center;
    justify-content: center;
    &--mobile {
      top: 0%;
      width: 100%;
    }
    &--desktop {
      top: 0;
      width: 50%;
    }
  }
  .media-links {
    position: absolute;
    bottom: 0;
    right: 0;
    z-index: 5;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    color: white;
    fill: white;
    &--desktop {
      height: 50%;
    }
    &--mobile {
      // height: 20%;
      bottom: 0;
      top: 55%;
      height: 35%;
      width: 100%;
      // top: 50%;
    }
  }
  .media-icon {
    flex: 0 40%;
    &--mobile {
      font-size: 1.5rem;
      max-height: 6rem;
    }
    &--desktop {
      font-size: 2rem;
      max-height: 12rem;
    }
  }
  .media-blog--mobile {
    width: 30%;
    // top: -2rem;
  }
  .button-label {
    font-size: 1.5rem;
    position: absolute;
    bottom: 0;
    margin-bottom: -1.5rem;
    font-family: 'Edos';
  }
  .button-label-blog--desktop {
    font-size: 1.5rem;
    position: absolute;
    bottom: 0;
    margin-bottom: 0;
    font-family: 'Edos';
  }
  .button-label-blog--mobile {
    font-size: 1.5rem;
    position: absolute;
    bottom: 0;
    font-family: 'Edos';
    height: 35%;
  }
  .menu-items {
    color: white;
    list-style-type:none;
    font-family: 'August';
    font-size: 5rem;
    cursor: pointer;
    // width: 50%;
  }
  .menu-item {
    z-index: 4;
    &:hover {
      filter: drop-shadow(0px -2px 16px darkred);
    }
  }
  .home-content-class {
    font-family: 'Edos';
    // font-size: 1.5rem;
    color: whitesmoke;
    width: 80%;
    margin-top: 2rem;
    text-align: justify;
    line-height: 1.5rem;

    &--desktop {
      font-size: 1.5rem;
      .q-markdown--heading-h1 {
        font-size: 7rem;
        font-family: 'Blow';
        line-height: 5rem;;
      }
      .q-markdown--heading-h2 {
        font-size: 2.2rem;
      }
      .q-markdown--link{
        color:$color3;
        font-size: 2rem;
        font-weight: 100;
        text-decoration: underline;
        border-bottom: none;
      }  
    }
    &--mobile {
      font-size: .7rem;
      .q-markdown--heading-h1 {
        font-size: 5rem;
        font-family: 'Blow';
        line-height: 5rem;;
      }
      .q-markdown--heading-h2 {
        font-size: 1rem;
      }    
      .q-markdown--link{
        color:$color3;
        font-size: 1.4rem;
        font-weight: 100;
        text-decoration: underline;
        border-bottom: none;
      }    
    }

 
    a:-webkit-any-link{
      text-decoration-color: white;
    }    
    /* Unvisited link  */
    .q-markdown--link:visited {
      color: white;
      text-decoration: underline;
      border-bottom: none;
    } 
    /* Visited link    */
    .q-markdown--link:hover {
      color: white;
    }   
    /* Mouse over link */
    .q-markdown--link:active {
      color: white;
    }
    .q-markdown--link-external{
      &:after {
        content: '';
      }
    }
  }
</style>
