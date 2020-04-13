<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <router-view />
  </div>
</template>

<style lang="scss">
//Fonts
@font-face {
  font-family: "Beauty";
  src: url("./assets/fonts/BandB.ttf") format("truetype");
  font-weight: 400;
  font-style: normal;
  font-stretch: expanded;
}
//Fonts
@font-face {
  font-family: "August";
  src: url("./assets/fonts/HeyAugust.ttf") format("truetype");
  font-weight: lighter;
  font-style: normal;
}
@font-face {
  font-family: "Thorn";
  src: url("./assets/fonts/THORN.ttf") format("truetype");
  font-weight: lighter;
  font-style: normal;
}
body, html {
  margin: 0;
  // padding: 5em;
  box-sizing: border-box;
  // width: 100%;
  // height: 100%;
  background: #887434;
  overflow: hidden;
}

#app {
  // font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    // font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
