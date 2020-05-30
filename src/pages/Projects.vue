<template>
  <section>
  <q-img
    src="~assets/svg/bg-projects.svg"
    :class="$q.platform.is.mobile ? 'post-header post-header--mobile' : 'post-header post-header--desktop'"
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

    <div class="q-pa-md row items-start q-gutter-md">

    <q-card 
        class="pulse-effect"
        :class="$q.platform.is.mobile ? 'my-card my-card--mobile' : 'my-card my-card--desktop'"
        v-for="blog in projectDataByDate"
        :key="blog.id"
      >
        <router-link
          :to="`/projects/${blog.id}`"
        >
        <q-img
          :src="blog.image"
          :ratio="1"
          class="blog-img"
        >
          <div
          class="clickable-post absolute-bottom"
          :class="$q.platform.is.mobile ? 'blog-title blog-title--mobile' : 'blog-title blog-title--desktop'"
          >
            {{ blog.title }}
          </div>
        </q-img>
        </router-link>

        <q-card-section>
          <p v-html="blog.description"></p>
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



  </div>
  </gradient-layout>
  </section>
</template>
<script>
import GradientLayout from 'layouts/GradientLayout'
import { mapActions, mapGetters } from 'vuex'

export default {
  components: {
    GradientLayout,
  },
  created() {
    this.fetchProjectData()
  },
  methods: {
    ...mapActions('project', [
      'fetchProjectData',
    ]),
  },
  computed: {
    ...mapGetters('project', [
      'projectDataByDate',
    ]),
  },
}
</script>
<style lang="scss" scoped>
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
