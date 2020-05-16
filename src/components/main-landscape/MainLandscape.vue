<script>
import Sky from 'components/main-landscape/Sky'
import Birds from 'components/main-landscape/Birds'
import Sea from 'components/main-landscape/Sea'
import Sand from 'components/main-landscape/Sand'
import LateralMenu from 'components/main-landscape/LateralMenu'
import { mapActions } from 'vuex'

export default {
  name: 'MainLandscape',
  components: {
    Sky,
    Sea,
    Sand,
    Birds,
    LateralMenu,
  },
  data() {
    return {
      lazyImages: {
        sky: '',
        sand: '',
      },
      lazyImagesLoaded: false,
    }
  },
  methods: {
    ...mapActions('ui', [
      'toggleAnimationOn',
    ]),
    registerLoad(source) {
      delete this.lazyImages[source]
      if (!Object.keys(this.lazyImages).length) {
        this.lazyImagesLoaded = true;
        console.log('all images loaded')
        this.toggleAnimationOn();
      }
    },
  },
}
</script>
<template>
  <article class="main-layout">
    <div class="landscape-bg">
    </div>
    <birds class="birds"/>
    <sky v-if="true" @loaded="registerLoad('sky')"/>
    <sea v-if="true" class="upside-down z-index-2"/>
    <sand @loaded="registerLoad('sand')"/>
    <lateral-menu class="lateral-menu"/>
  </article>
</template>
<style scoped lang="scss">
.main-layout {
  text-align: center;
}
.landscape-bg {
  position: absolute;
  width: 100%;
  height: 100%;
  background: #887434;
}
.lateral-menu {
  position: absolute;
  overflow: hidden;
}
.birds {
  z-index: 1;
  position: absolute;
}
.title {
  position: absolute;
  top: 3rem;
  width: 100%;
  opacity: .7;
  font-weight: normal;
  z-index: 2;
  display: block;
  margin: auto;
}
.title-img{
  width: 53rem;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.upside-down {
  transform: rotate(180deg);
}
</style>
