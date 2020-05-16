<template>
<section class="markdown-section">
  <q-img
    :src="`statics/images/${id}/paralax.png`"
    style="width: 100%; max-height: 15rem;"
    :ratio="16/9"
    native-context-menu>
    <div class="post-title text-white text-bold"><p>{{ title }}</p></div>
  </q-img>
  <gradient-layout>
    <q-markdown :src="markdown" toc class="markdown-container"/>
  </gradient-layout>
</section>
</template>

<script>
import GradientLayout from 'layouts/GradientLayout'
export default {
  name: 'MarkdownViewer',
  async mounted() {
  },
  components: {
    GradientLayout,
  },
  props: {
    markdown: {
      type: String,
      default: '',
    },
    id: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      default: '',
    },
    image: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      importedMarkdown: '',
    }
  },
  methods: {
  },
}
</script>
 <style lang="scss" scoped>
 .post-title {
   position: absolute;
   width: 100%;
   height: auto;
   bottom: 0;
   font-size: 2em;
   font-family: "Anime";
   text-align: center;
   padding-bottom: 0;
 }
  //  $c: grey; // #4B384C;
  //  $s: 3rem;

  // .markdown {
  //   &-background-wrapper {
  //     position: relative;
  //   }
  //   &--background {
  //   position: absolute;
  //   width: 100%;
  //   height: 100%;
  //   opacity: .1;
  //   &:before, &:after {
  //     --p: 0;
  //     --s: calc(1 - 2*var(--p));
  //     top: 0; right: 0; bottom: 0; left: 0;
  //     -webkit-mask: var(--m);
  //             mask: var(--m);
  //     content: ''
  //   }
  //   &:before, &:after {
  //     position: absolute;
  //     --p: 0;
  //     --s: calc(1 - 2*var(--p));
  //     top: 0; right: 0; bottom: 0; left: 0;
  //     background: linear-gradient(calc(var(--s)*45deg), 
  //         transparent calc(50% - 1px), $c 0, $c calc(50% + 1px), transparent 0) 
  //       0 0/ #{$s $s};
  //     --m: linear-gradient(red 50%, transparent 50%) 
  //           0 calc(var(--p)*#{$s})/ 100% #{2*$s};
  //     content: ''
  //   }
	//   &:after { --p: 1 }
  //   }
	
  // }
  
 </style>
