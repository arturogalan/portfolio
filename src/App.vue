<template>
  <div id="q-app">
    <router-view />
  </div>
</template>

<script >
export default {
  name: 'App',
}
</script>
<style  lang="scss">
body, html {
  margin: 0;
  // padding: 5em;
  box-sizing: border-box;
  // width: 100%;
  // height: 100%;
  background: lightgray;
  // overflow: hidden;
}
a {
  color:$color4;
}         /* Unvisited link  */
a:visited {
  color:$color4;
} /* Visited link    */
a:hover {
  color:$color4;
}   /* Mouse over link */
a:active {
  color:$color4;
}  /* Selected link   */
</style>
