<script>
export default {
  name: 'Sky',
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
    <img :src="`statics/images/svg/${svgSrc}.svg`" alt="">
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
