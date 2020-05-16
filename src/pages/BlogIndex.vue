<template>
  <section>
  <q-img
    src="~assets/svg/bg-posts.svg"
    style="width: 100%; max-height: 10rem; color: none"
    :img-style="{opacity: 0.1}"
    :ratio="16/9">
    <div class="post-title absolute-full text-subtitle2 flex flex-center text-black">
      <p>Blog</p>
    </div>
  </q-img>
  <gradient-layout>
  <q-page class="q-ml-xl q-mt-md">
  <q-markdown>
    Hi!, here is where I have my posts about tech and other things, hope you find useful any of them :beers: :
  </q-markdown>

    <div class="q-pa-md row items-start q-gutter-md">

      <q-card 
        class="my-card pulse-effect"
        v-for="blog in blogDataByDate"
        :key="blog.id"
      >
          <!-- src="https://cdn.quasar.dev/img/parallax2.jpg" -->
        <router-link
          :to="`/blog/${blog.id}`"
        >
        <q-img
          :src="blog.image"
          :ratio="1"
          class="blog-img"
        >
        <q-chip class="blog-time" color="white" dense outline icon="fas fa-clock" :label="blog.readTime"/>

          <div
          class="clickable-post absolute-bottom blog-title"
          >
            {{ blog.title }}
          </div>
        </q-img>
        </router-link>

        <q-card-section>
          {{ blog.description }}
        <br>
        <q-chip
          dense
          clickable
          color="primary"
          text-color="white"
          v-for="tag in blog.tags"
          :key="tag"
        >
          <!-- icon="event" -->
          {{ tag }}
        </q-chip>
        <br>

        </q-card-section>
      </q-card>
    </div>
    <!-- <img
      alt="Quasar logo"
      src="~assets/quasar-logo-full.svg"
    > -->
  </q-page>
  </gradient-layout>
  </section>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import GradientLayout from 'layouts/GradientLayout'

export default {
  name: 'PageIndex',
  components: {
    GradientLayout,
  },
  created() {
    this.fetchBlogData()
  },
  methods: {
    ...mapActions('blog', [
      'fetchBlogData',
    ]),
  },
  computed: {
    ...mapGetters('blog', [
      'blogDataByDate',
    ]),
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
  .my-card {
    width: 100%;
    max-width: 21vw;
    border-radius: 3%;
    border: dashed 2px darkcyan;
  }
  .blog-img {
    border-top-right-radius: 3%;
    border-top-left-radius: 3%;

  }
  .blog-time {
    position: absolute;
    top: .2rem;
    left: .2rem;
    font-weight: bold;
  }
  .blog-title {
    font-size: 1.2vw;
  }
  .clickable-post {
    cursor: pointer;
  }

  .pulse-effect {
    &:hover{
      transition: all 2s;
      transition-timing-function: cubic-bezier(.14,1.13,0,.91);
      transform: scale(1.02);
    }
  }
  .corners-effect{
			&:before, &:after{
				content: '';
				position: absolute;
				width: 40px;
				height: 40px;
				border-color:darkred;
				border-style: solid;
        border-width: 0px;
        border-radius: 20%;
        transition: all .5s;
        transition-timing-function: cubic-bezier(1,.2,.26,.7);
        opacity: 1;
				opacity: 0;
			}
			&:before{
				left: 1.1rem;
				bottom: .5rem;
				border-bottom-width: 1px;
				border-left-width: 1px;
			}
			&:after{
				top: .5rem;
				right: 1.1rem;
				border-top-width: 1px;
        border-right-width: 1px;
        z-index: 3;
			}
			&:hover{
				&:before, &:after{
          transition: all 2s;
          transition-timing-function: cubic-bezier(.14,1.13,0,.91);
					opacity: 1;
				}
				&:before{
          transform: translate(-30px, 20px) scale(1);
					border-bottom-width: 12px;
					border-left-width: 12px;
				}
				&:after{
          // @include transform(translate(30px, -20px) scale(1));
          transform: translate(30px, -20px) scale(1);
					border-top-width: 12px;
					border-right-width: 12px;
				}
			}
  }
</style>