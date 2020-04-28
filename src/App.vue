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
  background:rgba(255, 255, 255, 1);
  // overflow: hidden;
  font-family: 'Conforta';

}
// a:-webkit-any-link {
//     text-decoration: none;
// }
 /* Selected link   */
 .q-drawer {
   z-index: 3000;
   background: none;
   &--top-padding > * > .menu-position {
     padding-top: 25px;
   }
 }
 .q-drawer--top-padding {
  .q-drawer__content .menu-position {
    padding-top: 25px;
  }
  .q-drawer__content .menu-bg{
    top: 1rem;
  }
 }
</style>
