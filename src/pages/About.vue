<template>
  <section>
  <q-img
    src="~assets/svg/bg-about.svg"
    style="width: 100%; max-height: 10rem;"
    :img-style="{opacity: 0.3}"
    :ratio="16/9">
    <div class="post-title absolute-full text-subtitle2 flex flex-center text-black">
      <p>About me</p>
    </div>
  </q-img>
  <gradient-layout>
  <div class="q-ml-xl q-mt-md">
  <q-markdown>
    <!-- ![](statics/images/common/profile.png "Arturo") Hi! I'm Arturo Galán and I'm a Spanish developer. Currently I´m working as a frontend developer at Clarity.ai mainly with Vue.js, Javascript and SCSS   -->
    <!-- Some years ago I realized that what I like most is to develop frontend because is the more visual and interactive side of development. I really like the **Javascript** versatility, the functional way of programming and the freedom that its weakly typed nature gives you. The incredible set of libraries and frameworks makes it exciting to be a Javascript developer now. -->
       <!-- # Work experience


    # This site
    The [landing page](/) have been a self-challenge of trying to do a landscape animated picture, and an attempt to make water and waves with CSS. The animations are synchronized via Animation.js
    I wanted to do this site to write down some post about tech, robotics and music. To have a place where I can explain my projects and give them some visibility.
    I started writting a post in Medium but I thougt that making my own site could be intereseting to practice some CSS and design stuff, to test Quasar Framework and to deal with platforms like netlify.
    I've built the site with [Vue.js](https://vuejs.org) and [Quasar Framework](https://quasar.dev/), using the QMarkdown plugin to write posts. For the animations, some of them are in CSS and others are made with animation.js
    The logo is one of my daughter first drawings and I liked it so much that I took it and converted it into an SVG path 😻

    # Career in detail
    Now I can say that I'm really proud of being a full time frontend developer in a startup called Clarity.ai where we work with Vue.js to provide a nice tool for asset managers.
    Clarity has a clear mission: To provide a decision tool to understand and optimize the societal impact of invesment portfolios. -->

  
    ![](statics/images/common/profile.png "Arturo")
    #
    ##  
    Hi! I'm 🦄**Arturo Galán**🦄 and I'm a Spanish developer. Currently I´m working as a frontend developer at Clarity.ai mainly with **Vue.js, Javascript and SCSS**. Interested in web technologies like Web Audio, SVG, D3 and CSS animations.
    #  
    #  

    I've been working since 2000 with computers, coding in languages and libraries like Java, Java Swing, Jsp, JQuery, PL-SQL, Angular, Node.js etc... During my career I've been working under different roles: Backender, Frontender, Analyst, Organic Analyst, Functional Analyst, Technical Referent, Architect, Technical Architect 💤... But... you know what? 
    :::
    I've been always a **Developer**, nothing more and nothing less. A developer who enjoys coding, learning from other developers, using programming to build tools and mixing technology and art while doing it.
    :::
    This last years I've been focused in web and frontend technologies and it's really exciting to see the ecosystem growing and the great tools that help us build better software. There’s no better time to be a **JavaScript** developer than today! 🤯
    #  
    I´m also a **musician** and I love to play guitar 🎸, and some months ago I started to learn to play the violin 🎻. You can take a look to the [Music](#/music) section if you want to know more or visit my band [**xInerzia Spotify**](https://open.spotify.com/artist/73ERX68cf82PuX4fdhLRq4?si=0s2eN2yLRkORLjXej5-PKw).

    I also like Raspberry Pi and electronics, and I have made a couple of them, you can take a look at the posts I´ll be writing about this.


    Contact
    ===
    

    You can find me in [Twitter](https://twitter.com/turugalan), or you can just send me an [e-mail](mailto:arturo.galan@gmail.com).

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
<style lang="scss">
.float-left {
  float: left;

}
img[alt$="<"] {
  float: left;
}
.iframe-style {
  border: dashed 3px black;
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
   background-color: transparent !important;
 }
 img[title$="Arturo"] {
   float: left;
   margin-right: 1vw;
 }
</style>
