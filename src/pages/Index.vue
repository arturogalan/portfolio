<template>
  <Layout>
    <g-image
      alt="Example image"
      src="~/assets/png/profile.png"
      width="135"
    />

    <h1 class="text-2xl text-strong mt-8 ">
      {{ $t('index.hello') }}
    </h1>

    <p
      class="text-xl text-center"
      v-html="$t('index.hello_paragraph1')"
    >
      <!-- {{ $t('index.hello_paragraph1') }} -->
    </p>

    <div class="box bg-red-400" />
    <div class="box bg-orange-500" />
    <div class="box bg-gray-600" />

    <p class="text-green-400 border-b-2 border-green-400 mt-2">
      This totally has Tailwind installed.
    </p>

    <button
      type="button"
      class="border border-indigo-500 text-indigo-500 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:text-white hover:bg-indigo-600 focus:outline-none focus:shadow-outline"
    >
      Primary
    </button>
    <p
      class="text-xl text-center"
      v-html="$t('index.hello_paragraph1')"
    >
      <!-- {{ $t('index.hello_paragraph1') }} -->
    </p>
    <p
      class="text-xl text-center"
      v-html="$t('index.hello_paragraph1')"
    >
      <!-- {{ $t('index.hello_paragraph1') }} -->
    </p>
    <p
      class="text-xl text-center"
      v-html="$t('index.hello_paragraph1')"
    >
      <!-- {{ $t('index.hello_paragraph1') }} -->
    </p>
    <p
      class="text-xl text-center"
      v-html="$t('index.hello_paragraph1')"
    >
      <!-- {{ $t('index.hello_paragraph1') }} -->
    </p>
    <p
      class="text-xl text-center"
      v-html="$t('index.hello_paragraph1')"
    >
      <!-- {{ $t('index.hello_paragraph1') }} -->
    </p>
    <p
      class="text-xl text-center"
      v-html="$t('index.hello_paragraph1')"
    >
      <!-- {{ $t('index.hello_paragraph1') }} -->
    </p>
    <h2
      id="projects"
      class="font-bold mb-6"
    >
      My current projects
    </h2>

    <ul class="text-lg sm:text-xl">
      <li class="checkmark mb-6">
        <div>Nerdful Mind Newsletter</div><div class="text-lg text-copy-secondary">
          <a
            href="https://www.getrevue.co/profile/nerdfulmind"
            target="_blank"
            rel="noopener noreferrer"
          >Nerdful Mind</a> is a weekly curated newsletter with articles about mindfulness, psychology, and software engineering principles.
        </div>
      </li><li class="checkmark mb-6">
        <div>This Blog</div><div class="text-lg text-copy-secondary">
          Currently my main focus. I want to create something every day. From a whole blog post to some small improvements to this site.
        </div>
      </li><li class="checkmark mb-6">
        <div>Software Engineering</div><div class="text-lg text-copy-secondary">
          I currently work for <a
            href="https://tresmo.de"
            target="_blank"
            rel="noopener noreferrer"
          >tresmo GmbH</a> as an IoT cloud engineer.
        </div>
      </li>
    </ul>
  </Layout>
</template>

<script>
import gsap from 'gsap'

export default {
  metaInfo: {
    title: 'Hi 🖖🏾!'
  },
  mounted () {
    gsap.to('.box', { rotation: 27, x: 300, duration: 4 })
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
