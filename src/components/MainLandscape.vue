<script>
import Sky from './Sky';
import Sea from './Sea';
import Sand from './Sand';

// import Stones from './Stones';

export default {
  name: "MainLandscape",
  components: {
    Sky,
    Sea,
    Sand,
    // Stones,
  },
};
</script>
<template>
<article>

  <div class="title z-index-5">
    <h1>[Arturo Galán]</h1>
  </div>
    <!-- <stones/> -->
    <sky/>
    <div class="sea-position">
    <sea class="upside-down z-index-2"/>
    <sand/>
    </div>
</article>
</template>
<style scoped lang="scss">
.title {
  position: absolute;
  top: 0;
  width: 100%;
  font-size: 4rem;
  font-family: "Beauty";
  color: #52754f;
  opacity: .5;
  // font-family: "August";
  // font-family: "July";

}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.upside-down {
  // z-index: 3;
  transform: rotate(180deg);
}
</style>
