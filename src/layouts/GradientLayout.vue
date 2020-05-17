<template>
    <div class="row">
    <div v-if="!$q.platform.is.mobile && !fetchLeftDrawerOpened" class="col-12 col-md-1 markdown-background-wrapper">
      <div class="markdown--background"></div>
    </div>
    <div
      class="col-md-10 col-sm-12 col-xs-12"
    >
      <slot/>
    </div>
    <div v-if="!$q.platform.is.mobile && !fetchLeftDrawerOpened" class="col-12 col-md-1 markdown-background-wrapper">
      <div class="markdown--background"></div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'GradientLayout',
  mounted() {
  },
  computed: {
    ...mapGetters('ui', [
      'fetchLeftDrawerOpened',
    ]),
  },
  meta() {
  },
}
</script>

<style lang="scss" scoped>
  $c: grey; // #4B384C;
  $s: 3rem;

  .markdown {
    &-background-wrapper {
      position: relative;
    }
    &--background {
    position: absolute;
    width: 100%;
    height: 100%;
    opacity: .1;
    &:before, &:after {
      --p: 0;
      --s: calc(1 - 2*var(--p));
      top: 0; right: 0; bottom: 0; left: 0;
      -webkit-mask: var(--m);
              mask: var(--m);
      content: ''
    }
    &:before, &:after {
      position: absolute;
      --p: 0;
      --s: calc(1 - 2*var(--p));
      top: 0; right: 0; bottom: 0; left: 0;
      background: linear-gradient(calc(var(--s)*45deg), 
          transparent calc(50% - 1px), $c 0, $c calc(50% + 1px), transparent 0) 
        0 0/ #{$s $s};
      --m: linear-gradient(red 50%, transparent 50%) 
            0 calc(var(--p)*#{$s})/ 100% #{2*$s};
      content: ''
    }
	  &:after { --p: 1 }
    }
	
  }
</style>
