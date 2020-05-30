<template>
  <router-link :to="link">
    <div
      class="diagonal-box clickable"
      :class="{
      [`bg-${title.toLowerCase()}`]: true,
      [`bg-selected`]: isSelected, 
      ['hover-item']: isHover,
      ['diagonal-box-selected']: isSelected,
      ['diagonal-box-unselected']: !isSelected,
    }"
      @mousemove="hoverMenuItem(true)"
      @mouseenter="hoverMenuItem(true)"
      @mouseleave="hoverMenuItem(false)"
    >
      <div class="link-item">
          <q-icon
            :class="[`item-${title.toLowerCase()}`, isSelected ? 'ico-selected' : 'ico-unselected']"
            :name="icon"
          ></q-icon>
        <div
          :class="[`item-${title.toLowerCase()}`, isSelected ? 'text-selected' : 'text-unselected']"
          >
          {{ title }}
        </div>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "EssentialLink",
  props: {
    title: {
      type: String,
      required: true,
    },
    caption: {
      type: String,
      default: "",
    },

    link: {
      type: String,
      default: "#",
    },

    icon: {
      type: String,
      default: "",
    },
    selected: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      isHover: false,
    };
  },
  methods: {
    hoverMenuItem(value) {
      this.isHover = value;
    },
  },
  computed: {
    isSelected() {
      return this.$route.path.includes(this.link);
    },
  },
};
</script>
<style lang="scss" scoped>
.link-item {
  font-family: "Anime";
  padding: 8px;
  max-height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.text-selected {
  font-size: 2.4rem;
  font-weight: bold;
  transition: font-size 0.5s;
  transition-timing-function: cubic-bezier(1, 0.2, 0.26, 0.7);
  filter: drop-shadow(0px -2px 3px rgb(232, 210, 47));
}
.text-unselected {
  font-size: 1.8rem;
  transition: font-size 0.5s;
  transition-timing-function: cubic-bezier(1, 0.2, 0.26, 0.7);
}
.ico-selected {
  font-size: 5rem;
  font-weight: bold;
  transition: font-size 0.5s;
  transition-timing-function: cubic-bezier(1, 0.2, 0.26, 0.7);
  filter: drop-shadow(0px -2px 3px rgb(232, 210, 47));
}
.ico-unselected {
  font-size: 1.8rem;
  transition: font-size 0.5s;
  transition-timing-function: cubic-bezier(1, 0.2, 0.26, 0.7);
}
.diagonal-box {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  &:before {
    // opacity: .8;
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    transform: skewy($angle);
    transform-origin: 50% 0;
    outline: 1px solid transparent;
    backface-visibility: hidden;
    border-bottom: 4px dashed black;
    border-right: 4px dashed black;
    background-size: 130% 130%;
    background-position: inherit;
    background-position: center center;
    transition: background-size 0.3s;
    transition-timing-function: ease-out;
  }
}
.diagonal-box-selected {
  height: 37%;
  transition: height 0.3s;
  transition-timing-function: linear;
}
.diagonal-box-unselected {
  height: 15.3%;
  transition: all 0.3s;
  transition-timing-function: linear;
}
.hover-item {
  opacity: 0.8;
}
.hover-item:before {
  transition: background-color 0.8s cubic-bezier(0.25, 0.8, 0.5, 1),
    opacity 0.6s cubic-bezier(0.25, 0.8, 0.5, 1);
}
.bg-blog:before {
  background-image: linear-gradient(
      45deg,
      rgba(250, 250, 250, 0.5),
      rgba(117, 19, 93, 0.73)
    ),
    url("~assets/svg/bg-posts.svg");
}
.bg-projects:before {
  background-image: linear-gradient(
      45deg,
      rgba(8, 135, 4, 0.5),
      rgba(111, 86, 4, 0.73)
    ),
    url("~assets/svg/bg-projects.svg");
}
.item-projects {
  color: black;
}
.bg-music:before {
  background-image: linear-gradient(
      45deg,
      rgba(0, 0, 119, 0.5),
      rgba(0, 0, 51, 0.73)
    ),
    url("~assets/svg/bg-music.svg");
}
.bg-links:before {
  background-image: linear-gradient(
      45deg,
      rgba(240, 233, 29, 0.372),
      rgba(242, 239, 60, 0.73)
    ),
    url("~assets/svg/bg-links.svg");
}
.bg-about:before {
  border-top: 3px dashed black;
  // opacity: .7;
  background-image: linear-gradient(
      -135deg,
      rgba(255, 98, 0, 0.44),
      rgba(51, 0, 27, 0.7)
    ),
    url("~assets/svg/bg-about.svg");
}
.bg-selected:before {
  background-size: 220% 220%;
  transition: background-size 0.3s;
  transition-timing-function: ease-out;
  background-position: center center;
}
.content {
  max-width: $width;
  margin: 0 0.2rem;
  position: relative;
  /* -----------
  enable the border to see, that the content
  perfectly fits into the section withou
  bleeding into the adjecting areas:
  ------------ */
  // border: 2px dashed #fff8;
}

// .boxes {
//   display: grid;
//   grid-template-columns: repeat(4, 1fr);
//   grid-gap: 3%;
//   margin: 2em 0;

//   .box {
//     width: 100%;
//     height: 0;
//     padding-bottom: 100%;
//     border: 1px solid #fff;
//     background: #fff3;
//     transform: translateY( $translation );
//     animation: translate 3s ease-in-out infinite;

//     &:nth-child(1) { --translation: calc($skew-padding * 1.5)}
//     &:nth-child(2) { --translation: calc($skew-padding * 1)}
//     &:nth-child(3) { --translation: calc($skew-padding * 0.5)}
//     &:nth-child(4) { --translation: calc($skew-padding * 0)}
//   }
// }

@keyframes translate {
  0%,
  20%,
  100% {
    transform: translateY(0);
  }
  50%,
  70% {
    transform: translateY($translation);
  }
}

a {
  text-decoration: none;
}
/* Visited link    */
a:hover {
  color: black;
}
/* Mouse over link */
a:active {
  color: black;
}
a {
  color: black;
}
</style>