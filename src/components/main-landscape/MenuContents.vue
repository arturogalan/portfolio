<script>
export default {
  name: 'MenuContents',
  data() {
    return {
      homecontent: require('../../blog-entries/homecontent.md').default,
    }
  },
  props: {
  },
}
</script>
<template>
  <div class="menu-contents">
     <q-markdown content-class="home-content-class" :src="homecontent"/>
  </div>
</template>

<style lang="scss">
  .menu-contents {
    position: absolute;
    top: 0;
    right: 0;
    width: 50%;
    z-index: 5;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .menu-items {
    color: white;
    list-style-type:none;
    font-family: 'August';
    font-size: 5rem;
    cursor: pointer;
    // width: 50%;
  }
  .menu-item {
    z-index: 4;
    &:hover {
      filter: drop-shadow(0px -2px 16px darkred);
    }
  }
  .home-content-class {
    font-family: 'WalkwaySemiBold';
    font-size: 1.5rem;
    color: $primary;
    width: 80%;
    margin-top: 5rem;
    text-align: justify;
  .q-markdown--link{
    color:$color2;
  }     
  /* Unvisited link  */
  .q-markdown--link:visited {
    color:$color2;
  } 
  /* Visited link    */
  .q-markdown--link:hover {
    color: white;
  }   
  /* Mouse over link */
  .q-markdown--link:active {
    color:$color2;
  }
  .q-markdown--link-external{
    &:after {
      content: '';
    }
  }
  }
</style>
