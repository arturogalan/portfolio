<script>
import Sea from './Sea';
import Stones from './Stones';

export default {
  name: "MainLandscape",
  components: {
    Sea,
    Stones,
  },
};
</script>
<template>
<article>

    <stones/>
    <sea/>
</article>
  <!-- <div class="hello"> -->
    <!-- <h1>Landscape</h1> -->
  <!-- </div> -->
</template>
<style scoped lang="scss">
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
</style>
