<template>
  <section>
  <q-img
    src="~assets/svg/bg-projects.svg"
    style="width: 100%; max-height: 10rem; color: none"
    :img-style="{opacity: 0.3}"
    :ratio="16/9">
    <div class="post-title absolute-full text-subtitle2 flex flex-center text-black">
      <p>Projects</p>
    </div>
  </q-img>
  <gradient-layout>
  <div class="q-ml-xl q-mt-md">
  <q-markdown>
    Here I'll be posting the pet projects released and their links. I like to mix music, design and Javascript.
  </q-markdown>
  </div>
  </gradient-layout>
  </section>
</template>
<script>
import GradientLayout from 'layouts/GradientLayout'

export default {
  components: {
    GradientLayout,
  },
}
</script>
<style lang="scss" scoped>
 .post-title {
   position: absolute;
   width: 100%;
   height: auto;
   bottom: 0;
   font-size: 4vw;
   font-family: "Anime";
   text-align: center;
   padding-bottom: 0;
   background-color: transparent;
 }
 </style>
