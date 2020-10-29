<template>
  <Layout>
    <g-image
      alt="Example image"
      src="~/assets/png/profile.png"
      width="135"
    />

    <h1 class="text-2xl text-strong mt-8">
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
