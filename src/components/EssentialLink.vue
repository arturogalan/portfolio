<template>
  <q-item
    clickable
    tag="a"
    :href="`#${link}`"
    :class="isSelected ? 'link-item-selected' : 'link-item-unselected'"
  >
    <q-item-section
      v-if="icon"
      avatar
    >
      <!-- <transition :name="'bounce-tiny'"> -->

      <transition :name="isSelected ? 'bounce-tiny' : ''">
      <q-icon
        :class="isSelected ? 'item-selected' : 'item-unselected'"
        :name="icon"
        :key="`link${isSelected ? 'selected' : ''}`"
        class="q-ml-md"
      />
        <!-- :size="isSelected ? 'xl' : 'md'" -->
      </transition>
    </q-item-section>

    <q-item-section class="q-ml-md">
      <q-item-label
        :class="isSelected ? 'text-selected' : 'text-unselected'"
      >
      {{ title }}
      </q-item-label>
      <q-item-label caption>
        {{ caption }}
      </q-item-label>
    </q-item-section>
  </q-item>
</template>

<script>
export default {
  name: 'EssentialLink',
  props: {
    title: {
      type: String,
      required: true,
    },
    caption: {
      type: String,
      default: '',
    },

    link: {
      type: String,
      default: '#',
    },

    icon: {
      type: String,
      default: '',
    },
    selected: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      // actualRoute: this.$router.currentRoute.path,
      // selected: false,
    }
  },
  computed: {
    isSelected() {
      return this.$route.path === this.link;
    },
  },
}
</script>
<style lang="scss" scoped>
  .link-item-selected {
    font-size: 1.8rem;
    font-weight: bold;
    // margin-top: 2rem;
    transition: font-size margin .5s;
    transition-timing-function: cubic-bezier(1,.2,.26,.7);
    min-height: 6rem;
  }
  .link-item-unselected {
    font-size: 1.8rem;
    font-weight: bold;
    // margin-top: 2.2rem;
    transition: all .5s;
    transition-timing-function: cubic-bezier(1,.2,.26,.7);
    min-height: 6rem;

  }
  .item-selected {
    font-size: 3rem;
    filter: drop-shadow(0px -2px 3px lightgrey);
    margin-left: -.1rem;

    // border: solid 2px lightgrey;
    // border-spacing: 25px;
    // border-radius: 50%;
    // box-sizing: border-box;
    // -moz-box-sizing: border-box;
    // -webkit-box-sizing: border-box;
    // width: 4rem;
    // height: 4rem;
    // border: 1px solid black;
    // background: $color3;
    // margin: 2px;
    // font-size: 5rem;
  }
  .item-unselected {
    // margin-left: -.1rem;
    // font-size: 1.8rem;
  }
  .text-selected{
    margin-left: -.5rem;
    font-size: 2.5rem;
    transition: all .5s;
    transition-timing-function: cubic-bezier(1,.2,.26,.7);
    filter: drop-shadow(0px -2px 3px lightgrey);
  }
  .text-unselected{
    margin-left: 0;
    font-size: 2rem;
    transition: all .5s;
    transition-timing-function: cubic-bezier(1,.2,.26,.7);
  }
  /* Visited link    */
  a:hover {
    color:black;
    font-weight: bold;
    // font-size: 2.2rem;
    // margin-top: .7rem;
  }   
  /* Mouse over link */
  a:active {
    color: black;
  }
</style>