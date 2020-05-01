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
a:-webkit-any-link {
  text-decoration-color: white;
  color: white;
}
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

 .q-page-container{
  .markdown-container{
    padding-left: 2rem;
  }
  .q-markdown {
    font-family: 'Conforta';
    font-size: 1rem;
    color: black;
    width: 80%;
    // margin-top: 5rem;
    text-align: justify;
  }
  .q-markdown--link{
    color:black;
    text-decoration: underline;
    border-bottom: none !important;
    text-decoration-style: solid;
  }
  .q-markdown--heading-h2 {
    font-weight: 800 !important;
  }
  /* Unvisited link  */
  .q-markdown--link:visited {
    color:black;
    text-decoration: underline;
    border-bottom: none;
  } 
  /* Visited link    */
  .q-markdown--link:hover {
    color: black;
    text-decoration: underline;
    border-bottom: none;
  }   
  /* Mouse over link */
  .q-markdown--link:active {
    color:black;
    text-decoration: underline;
    border-bottom: none;
    text-decoration-style: solid;

  }
  .q-markdown--link.q-markdown--link-external{
    text-decoration-style: solid;
    text-decoration: underline;
    &:after {
      content: '';
    }
  }
  // p:has(* > .q-markdown--image) {
  //   background-color: red;
  // } 
  .q-markdown--image {
    max-width: 75% !important;
  }
  // a:-webkit-any-link {
  //   text-decoration: none;
  //   border-bottom: none;
  // }
  
  }


</style>
