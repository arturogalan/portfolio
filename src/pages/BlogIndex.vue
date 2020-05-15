<template>
  <gradient-layout>
  <q-page class="q-ml-xl">
  <q-markdown>
    # **Blog**

    Hi!, here is where I have my posts about tech and other things, hope you find useful any of them :beers: :
  </q-markdown>

    <div class="q-pa-md row items-start q-gutter-md">

      <q-card 
        class="my-card p10"
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
          img-class=""
        >
          <div
          class="clickable-post absolute-bottom text-h6"
          >
            {{ blog.title }}
          </div>
        </q-img>
        </router-link>

        <q-card-section>
          {{ blog.description }}

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

        </q-card-section>
      </q-card>
    </div>
    <!-- <img
      alt="Quasar logo"
      src="~assets/quasar-logo-full.svg"
    > -->
  </q-page>
  </gradient-layout>

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
  .my-card {
    width: 100%;
    max-width: 350px;
  }
  .clickable-post {
    cursor: pointer;
  }

  .p10{
		// background-image: url($image1);
			// @include a(353px, 94px);
			&:before, &:after{
				content: '';
				position: absolute;
				width: 40px;
				height: 40px;
				border-color:darkred;
				border-style: solid;
        border-width: 0px;
        border-radius: 20%;
				// @include transition(all .5s cubic-bezier(1,.2,.26,.7));
        // @include transform(translate(0px, 0px) scale(.8));
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
        // @include transition(all 2s cubic-bezier(.14,1.13,0,.91));
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