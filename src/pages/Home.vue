<script>
import MainLandscape from 'components/main-landscape/MainLandscape.vue'

export default {
  name: 'Home',
  components: {
    MainLandscape,
  },
}
</script>
<template>
  <div class="home">
    <main-landscape/>
  </div>
</template>
<style lang="scss">
  .home {
    overflow: hidden;
    height: 100%;
    width: 100%;
    position: absolute;
  }
</style>
