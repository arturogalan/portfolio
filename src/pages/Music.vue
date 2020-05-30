<template>
  <section>
  <q-img
    src="~assets/svg/bg-music.svg"
    style="width: 100%; max-height: 10rem; color: none"
    :img-style="{opacity: 0.3}"
    :ratio="16/9">
    <div class="post-title absolute-full text-subtitle2 flex flex-center text-black">
      <p>Music</p>
    </div>
  </q-img>
  <gradient-layout>
  <div class="q-ml-xl q-mt-md">
  <q-markdown>

    Life without music have not sense at all. Since I was aware music has always helped me to overcome difficult times and enjoy the funny ones.
    # Influences

    When I was a child, in the family road trips we used to listen to bands like Dire Straits, Queen, Bob Marley, The Beatles and other 80's classics. During my adolescence I grew up listening to Punk Rock, Metal, Heavy etc... with bands like Nofx, Metallica, Pantera, Propagandhi etc... 
    Now I can say that I listen to a wide variety of styles includind classical music, emo, punk-rock, progressive metal and even dark music.
    
    # Records
   I started playing guitar with eleven or twelve years old, with 20 years old I started to search people to play with, and after some failed attempts I finally found a couple of friends as passionate as me about Punk Rock.
   After some years composing we recorded a couple of demo tapes both self recorded and produced at home and in the rehearsal room. Our band is called **xInerzia** and you can find the albums in Spotify.
   The first demo was recorded in 2007 and the second one in 2015: [**xInerzia Spotify**](https://open.spotify.com/artist/73ERX68cf82PuX4fdhLRq4?si=u6I72TZrSWeHcC0LToodqg).
  </q-markdown>
  <div class="row ">
    <div class="col-4">
      <q-markdown>
      </q-markdown>
    </div>
    <iframe class="col-auto iframe-style" src="https://open.spotify.com/embed/artist/73ERX68cf82PuX4fdhLRq4" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
  </div>
  <br/>
  <br/>

  <q-markdown>
    Unfortunately we had to stop years ago but I keep playing guitar at home and I'd like to record more stuff and songs that I've been writing during this years. I'm also starting to learn Violin, an incredible instrument that I have always wanted to play, it's extremely difficult but I keep the faith 😅.

    # Music lists
    Here I'll put my curated Spotify lists if you want to discover new music.

    * [Punkrock List](https://open.spotify.com/playlist/49ie0FdpUcgBC3id9nKe1K?si=meCrgKlmQXO8_mUpsg48Yw)
    * [Metal List](https://open.spotify.com/playlist/4Kyjnv9nQkHLkQ1lzHYwxy?si=k22kz6tsSsinByT1ct-LKA)

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
.iframe-style {
  border: dashed 3px black;
  width: 20rem;
  height: 20rem;
}
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
