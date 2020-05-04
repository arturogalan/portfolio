<template>
<section class="markdown-section">
  <q-img
    :src="`statics/images/${id}/paralax.png`"
    class="paralax-img q-mb-xl"
    style="width: 100%; max-height: 20rem;"
    :ratio="16/9"
    native-context-menu>
  
    <div class="post-title text-white text-bold"><p>{{ title }}</p></div>
  </q-img>

  <div class="row">
    <div v-if="!$q.platform.is.mobile" class="col-12 col-md-2">
    </div>
    <div
      class="col-md-10 col-sm-12 col-xs-12"
    >
      <q-markdown :src="markdown" toc class="markdown-container"/>
    </div>
    <div v-if="!$q.platform.is.mobile" class="col-12 col-md-2">
    </div>
  </div>

  <!-- <div id="asd" class="markdown-container">
    <q-markdown :src="markdown" class="markdown-container"/>
  </div> -->
</section>
  <!-- <json-api-viewer
    title="QMarkdown API"
    :json="json"
  /> -->
  <!-- <q-markdown> -->
</template>

<script>
export default {
  name: 'MarkdownViewer',
  async mounted() {
  },
  components: {
    // markdownVue
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
   font-size: 3em;
 }
 .markdown-section {
 }
//   .markdown-container{
//     padding-left: 2rem;
//   }
//   .q-markdown {
//   font-family: 'Conforta';
//   font-size: 1.2rem;
//   color: black;
//   width: 80%;
//   // margin-top: 5rem;
//   text-align: justify;
// }
//   .q-markdown--link{
//     color:black;
//     text-decoration: underline;
//     border-bottom: none !important;
//     text-decoration-style: solid;
//   }
//   .q-markdown--heading-h2 {
//     font-weight: 800 !important;
//   }
//   /* Unvisited link  */
//   .q-markdown--link:visited {
//     color:black;
//     text-decoration: underline;
//     border-bottom: none;
//   } 
//   /* Visited link    */
//   .q-markdown--link:hover {
//     color: black;
//     text-decoration: underline;
//     border-bottom: none;
//   }   
//   /* Mouse over link */
//   .q-markdown--link:active {
//     color:black;
//     text-decoration: underline;
//     border-bottom: none;
//     text-decoration-style: solid;

//   }
//   .q-markdown--link.q-markdown--link-external{
//     text-decoration-style: solid;
//     text-decoration: underline;
//     &:after {
//       content: '';
//     }
//   }
//   // p:has(* > .q-markdown--image) {
//   //   background-color: red;
//   // } 
//   .q-markdown--image {
//     max-width: 75% !important;
//   }
//   // a:-webkit-any-link {
//   //   text-decoration: none;
//   //   border-bottom: none;
//   // }
  
 </style>
