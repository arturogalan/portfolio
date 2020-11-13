<script>
import gsap from 'gsap'

export default {
  metaInfo: {
    title: 'Hi 🖖🏾!'
  },
  mounted () {
    function profileEffect () {
      var t1 = gsap.timeline()
        .from(['.profile-img1', '.word1', '.white_square'], { duration: 4, opacity: 1 })
        .from(['.profile-img1', '.word1', '.white_square'], { duration: 0.2, opacity: 0 })
        .from(['.profile-img1', '.word1', '.white_square'], { duration: 0.3, opacity: 1 })
        .from(['.profile-img1', '.word1', '.white_square'], { duration: 0.4, opacity: 0 })
        .from(['.profile-img1', '.word1', '.white_square'], { duration: 0.2, opacity: 1 })
        .from(['.profile-img1', '.word1', '.white_square'], { duration: 0.1, opacity: 0 })

      return t1
    }
    var master = gsap.timeline({ repeat: 3, repeatDelay: 2 })
    master
      .add(profileEffect())
      .add(profileEffect(), '+=3')
  }
}
</script>
<template>
  <Layout>
    <div class="flex flex-col sm:flex-row justify-between items-center mb-16">
      <div class="relative">
        <g-image
          class="profile-img1 absolute"
          alt="Example image"
          src="~/assets/png/profile.png"
          width="140"
        />
        <g-image
          class="profile-img2"
          alt="Example image"
          src="~/assets/png/unicorn.png"
          width="140"
        />
      </div>
      <div class="font-bold sm:ml-5 mx-auto">
        <h1 class="text-4xl w-full sm:w-4/5">
          {{ $t('index.hello') }}
        </h1>
        <div
          class="text-2xl text-green-600 flex"
        >
          <div class="whitespace-no-wrap">
            I’m a&nbsp;
          </div>
          <div class="relative">
            <div class="white_square" />
            <span class="word1 absolute">frontend</span>
            <span class="word2 text-2xl tracking-widest whitespace-no-wrap">
              <span class="text-red-500">u</span>
              <span class="text-red-900">n</span>
              <span class="text-yellow-500">i</span>
              <span class="text-green-500">c</span>
              <span class="text-teal-800">o</span>
              <span class="text-pink-500">r</span>
              <span class="text-pink-700">n</span>
            </span>
          </div>
          <div>&nbsp;developer</div>
          <div>&nbsp;from</div>
          <div>&nbsp;Spain. </div>
        </div>
        <p
          class="text-xl text-green-800"
          v-html="$t('index.hello_paragraph2')"
        />
      </div>
    </div>

    <p />

    <h1
      class="text-lg sm:text-xl py-8"
    >
      Welcome to my never-enough-updated site... A place where I can openly talk about anything and develop using <span class="italic">!important</span> and <span class="italic">z-index: 999999</span>.
    </h1>

    <h2 class="text-4xl pb-4">
      Projects
    </h2>
    <ul
      id="projects"
      class="text-lg sm:text-xl"
    >
      <li class="mb-6 flex text-2xl">
        <font-awesome
          :icon="['fas', 'robot']"
          size="lg"
          class="color-icons leading-3 pr-2"
        />
        <div>
          <div class="flex flex-row items-center ">
            Noise-box
          </div>
          <div class="text-lg">
            Some audio projects made with Vue.js, vanilla Javascript, Web Audio api and of course open source projects and ideas from other developers. Currently a Guitar Amp simulator and a Stylophone simulator. You can visit them at
            <a
              href="https://www.noise-box.es"
              target="_blank"
              rel="noopener noreferrer"
              class="external-link hover:text-red-400 whitespace-no-wrap"
            >Noise-box
            </a>
            .
          </div>
        </div>
      </li>
      <li class="mb-6 flex text-2xl">
        <font-awesome
          :icon="['fas', 'laptop-code']"
          size="lg"
          class="color-icons leading-3 pr-2"
        />
        <div>
          <div class="flex flex-row items-center ">
            Software Engineering
          </div>
          <div class="text-lg">
            I currently work for <a
              href="https://clarity.ai/"
              target="_blank"
              rel="noopener noreferrer"
              class="external-link hover:text-red-400 whitespace-no-wrap"
            >Clarity.ai</a> as a Senior frontend developer. We aim to provide societal impact tools to optimize investment portfolios.
          </div>
        </div>
      </li>
      <li class="mb-6 flex text-2xl">
        <font-awesome
          :icon="['fas', 'feather']"
          size="lg"
          class="color-icons leading-3 pr-2"
        />
        <div>
          <div class="flex flex-row items-center">
            Blog
          </div>
          <div class="text-lg">
            <g-link
              to="/blog"
              class="external-link hover:text-red-400 whitespace-no-wrap"
            >
              Articles
            </g-link>
            in this site about the technologies I'm a fan of.
          </div>
        </div>
      </li>
      <li class="mb-6 flex text-2xl">
        <font-awesome
          :icon="['fas', 'headphones']"
          size="lg"
          class="color-icons leading-3 pr-2"
        />
        <div>
          <div class="flex flex-row items-center">
            Music
          </div>
          <div class="text-lg">
            I play the guitar and years ago recorded a couple of self-produced Punk rock albums with two friends in a band called
            <span class="text-xl text-strong"><mark>xInerzia</mark></span>
            &nbsp;
            <a
              href="https://open.spotify.com/artist/73ERX68cf82PuX4fdhLRq4?si=XWBvIo0ZTnK7t0_n4XZQbw"
              target="_blank"
              rel="noopener noreferrer"
              title="xInerzia Spotify site"
            >
              <font-awesome
                :icon="['fab', 'spotify']"
                transform="grow-10"
                class="cursor-pointer text-green-500 transition duration-500 ease select-none hover:text-green-300 focus:outline-none focus:shadow-outline"
              />
              &nbsp;
              &nbsp;
            </a>
            <a
              href="https://www.youtube.com/playlist?list=PLAEO4EnvXb7KPiUtIdwF0z8gUHEOLIVre"
              target="_blank"
              rel="noopener noreferrer"
              title="xInerzia Youtube site"
            >
              <font-awesome
                :icon="['fab', 'youtube']"
                transform="grow-10"
                class="cursor-pointer text-red-400 transition duration-500 ease select-none hover:text-red-300 focus:outline-none focus:shadow-outline"
              />
              &nbsp;

            </a>
            <br>Now I'm also learning to play Violin and hopefully I'll record some more stuff soon...
          </div>
        </div>
      </li>
    </ul>

    <h2 class="text-4xl pb-4">
      Contact
    </h2>
    <p class="text-xl">
      You can ping me on this social networks
    </p>
    <div class="mx-auto flex flex-wrap justify-center items-center mt-10">
      <a
        href="http://github.com/arturogalan"
        target="_blank"
        rel="noopener noreferrer"
        class="mr-20"
      >
        <font-awesome
          :icon="['fab', 'github']"
          transform="grow-40 left-4"
          class="cursor-pointer text-green-500 transition duration-500 ease select-none hover:text-green-200 focus:outline-none focus:shadow-outline"
        />
      </a>
      <a
        href="https://twitter.com/turugalan"
        target="_blank"
        rel="noopener noreferrer"
        class="mr-20"
      >
        <font-awesome
          :icon="['fab', 'twitter']"
          transform="grow-40 left-4"
          class="cursor-pointer text-green-500 transition duration-500 ease select-none hover:text-green-200 focus:outline-none focus:shadow-outline"
        />
      </a>
      <a
        href="https://www.linkedin.com/in/arturo-galan"
        target="_blank"
        rel="noopener noreferrer"
        class="mr-20"
      >
        <font-awesome
          :icon="['fab', 'linkedin']"
          transform="grow-40 left-4"
          class="cursor-pointer text-green-500 transition duration-500 ease select-none hover:text-green-200 focus:outline-none focus:shadow-outline"
        />
      </a>
    </div>
    <br>
    <br>

    <!-- <div class="pt-10">
      <p>This is the footer</p>
    </div> -->
  </Layout>
</template>
<style>

.profile-img1 {
  left: -1px;
  top: -1px;
  transform: scaleX(1.05) scaleY(1.05);
}
.white_square {
  position: absolute;
  background-color: var(--color-bg-default);
  width: 100%;
  height: 100%;
}
.word2 {
  text-shadow: 1px 1px 3px rgb(160, 150, 31);
}
</style>
