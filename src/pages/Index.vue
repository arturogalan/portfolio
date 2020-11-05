<template>
  <Layout>
    <div class="flex flex-row space-x-6 md:space-x-12 items-center">

    <g-image
      alt="Example image"
      src="~/assets/png/profile.png"
      width="135"
    />
    <div class="font-bold text-left">
    <h1 class="text-4xl w-full sm:w-4/5">
      {{ $t('index.hello') }}
    </h1>
    <p
      class="text-2xl text-green-600"
      v-html="$t('index.hello_paragraph1')"
    >
    </p>
    <p
      class="text-xl text-green-800"
      v-html="$t('index.hello_paragraph2')"
    >
    </p>    
    </div>

    </div>

    <div class="pt-4">
    <div class="box bg-red-400" />
    <div class="box bg-orange-500 ml-2" />
    <div class="box bg-gray-600 ml-2" />
    </div>

    <p/>

    <!-- <button
      type="button"
      class="border border-indigo-500 text-indigo-500 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:text-white hover:bg-indigo-600 focus:outline-none focus:shadow-outline"
    >
      Primary
    </button>
     -->
    <h1
      class="text-lg sm:text-xl py-16"
    >
      This is another paragraph explainig a little more things
    </h1>
      
    <h2 class="text-4xl pb-4">
      Projects
    </h2>
    <ul class="text-lg sm:text-xl" id="projects">
      <li class="mb-6">
        <div class="flex items-center text-2xl"><CheckboxMultipleBlankCircle class="color-icons leading-3 pr-2"/>Noise-box</div>
        <div class="text-lg">
          Some audio projects made with Vue.js, Web Audio api and of course open source projects and ideas from other developers. Currently a Guitar Amp simulator and a Stylophone simulator. You can visit them at
          <a
            href="https://www.noise-box.es"
            target="_blank"
            rel="noopener noreferrer"
            class="external-link hover:text-red-400 whitespace-no-wrap"
          >Noise-box</a> 
        </div>
      </li>
      <li class="mb-6">
        <div class="flex items-center text-2xl"><CheckboxMultipleBlankCircle class="color-icons leading-3 pr-2"/>Software Engineering</div>
        <div class="text-lg">
          I currently work for <a
            href="https://clarity.ai/"
            target="_blank"
            rel="noopener noreferrer"
            class="external-link hover:text-red-400 whitespace-no-wrap"
          >Clarity.ai</a> as a Senior frontend developer.
        </div>
      </li>
      <li class="mb-6">
        <div class="flex items-center text-2xl"><CheckboxMultipleBlankCircle class="color-icons leading-3 pr-2"/>Blog</div>
        <div class="text-lg">
          Articles in this site about the technologies I'm a fan of.
        </div>
      </li>
    </ul>

    <h2 class="text-4xl pb-4">
      Contact
    </h2>
    <font-awesome :icon="['fab', 'twitter']"/>
    <font-awesome :icon="['fas', 'bullseye']" />


  </Layout>
</template>

<script>
import gsap from 'gsap'
import CheckboxMultipleBlankCircle from 'vue-material-design-icons/CheckboxMultipleBlankCircle'

export default {
  metaInfo: {
    title: 'Hi 🖖🏾!'
  },
  components: {
    CheckboxMultipleBlankCircle,
  },
  mounted () {
    gsap.to('.box', { rotation: 27, x: '25vw', duration: 4 })
  }
}
</script>

<style>
.box {
  width:50px;
  height:50px;
  position:relative;
  border-radius:6px;
  margin-top:4px;
  display:inline-block;
  line-height:50px;
  text-align:center;
  color:#333;

}
</style>
