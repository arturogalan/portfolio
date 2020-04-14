<script>
  export default {
    name: 'MenuContents',
    data() {
      return {
        menuItems: ['About', 'Tech', 'Music', 'Job']
      }
    },
    props: {
    },
  }
</script>
<template>
  <div class="menu-contents">
    <ul class="menu-items">
      <li class="menu-item" v-for="(item, index) in menuItems" :key="index">
          {{item}}
      </li>
    </ul>
  </div>
</template>


<style lang="scss" scoped>
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
</style>