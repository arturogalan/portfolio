<script>
import AppImage from 'components/AppImage'
export default {
  name: 'Sky',
  components: {
    AppImage,
  },
  data() {
    return {
      svgSrc: 'sky',
    }
  },
  created() {
    if (this.$q.platform.is.mobile) this.svgSrc = 'skySvgMobile';
  },
}
</script>
<template>
  <div class="sky-style">
    <app-image @loaded="$emit('loaded')" :lazy-src="`statics/images/svg/${svgSrc}.svg`" alt="" width='100%'/>
  </div>
</template>
<style lang="scss" scoped>
.sky-style {
  width:100%;
  position: absolute;
  top: 0;
  left: 0%;
  z-index: 0;
}
</style>
