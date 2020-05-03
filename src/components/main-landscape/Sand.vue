<script>
import { EventBus } from '../../store/event-bus.js';
import { mapGetters } from 'vuex'

export default {
  name: 'Sand',
  mounted() {
    const yogaShadowAnimation = {
      targets: '.yoga',
      filter: [
        { value: 'drop-shadow(0px -2px 6px red)', duration: 1750, delay: 3250 },
        { value: 'drop-shadow(0px 0px 6px red)', duration: 5000 },
      ],
      loop: true,
      easing: 'linear',
      direction: 'normal',
    }
    this.$anime(yogaShadowAnimation)
  },
  methods: {
    openMenu() {
      EventBus.$emit('open-lateral-menu');
    },
  },
    computed: {
    ...mapGetters('ui', [
      'fetchLateralMenuOpened',
    ]),
  },
}
</script>
<template>
<div>
  <div class="sand-main">
    <img src="~assets/svg/sand.svg" alt="">
  </div>
  <div
    class="sea-shell-container"
    :class="[$q.platform.is.mobile ? 'sea-shell-container--mobile' : 'sea-shell-container--desktop']"
  >
    <div class="side-shell-container">
      <div 
      :class="$q.platform.is.mobile && 'sea-shell--mobile'"
      class="sea-shell sea-shell-1">
        <img src="~assets/svg/seaShell.svg" alt="">
      </div>
      <div 
      :class="$q.platform.is.mobile && 'sea-shell--mobile'"
      class="sea-shell sea-shell-2">
        <img src="~assets/svg/seaShell2.svg" alt="">
      </div>
      <div 
      :class="$q.platform.is.mobile && 'sea-shell--mobile'"
      class="sea-shell sea-shell-5">
        <img src="~assets/svg/seaShell5.svg" alt="">
      </div>
    </div>
    <div class="side-shell-container">
      <div 
      :class="$q.platform.is.mobile && 'sea-shell--mobile'"
      class="sea-shell sea-shell-3">
        <img src="~assets/svg/seaShell3.svg" alt="">
      </div>
        <div 
        :class="$q.platform.is.mobile && 'sea-shell--mobile'"
        class="sea-shell sea-shell-4">
        <img src="~assets/svg/seaShell4.svg" alt="">
      </div>
    </div>



  </div>
  <div>
      <img 
        class="yoga"
        :class="$q.platform.is.mobile ? 'yoga--mobile' : 'yoga--desktop'"
        src="~assets/svg/yoga.svg" alt=""
      >
        <div
        @click="openMenu"
        class="clickable-zone"
        :class="[!fetchLateralMenuOpened && 'clickable', $q.platform.is.mobile ? 'clickable-zone--mobile' : 'clickable-zone--desktop']">
        </div>
  </div>
    </div>
</template>

<style lang="scss" scoped>
.clickable-zone {
  height: 40%;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 5;
  &--desktop {
    width: 50%;
  }
  &--mobile {
    width: 100%;
  }
}
.clickable {
  cursor: pointer;
}
.yoga {
  position: absolute;
  width: 50%;
  bottom: 0;
  left: 50%;
  z-index: 3;
  opacity: .8;
  transform: translateX(-50%);
  &--desktop {
    width: 50%;
  }
  &--mobile {
    width: 90%;
  }
}

.sand-main {
  width:100%;
  height: 48%;
  position: fixed;
  top: 57%;
  left: 0;
}
.sea-shell-container {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 30%;

  display: flex;
  flex-direction: row;
  &--desktop {
    top: 60%;
  }
  &--mobile {
    top: 70%;
  }
}
.side-shell-container {
  width: 50%;
}
.sea-shell {
  transform: rotateX(40deg);
  filter: drop-shadow(0px -2px 6px black)
}
.sea-shell--mobile {
  transform: scale(1.5);
  margin-top: 5%;
}
.sea-shell-1 {
  width: 9%;
}
.sea-shell-2 {
  width: 9%;
  margin-left: 4%;
}
.sea-shell-5 {
  width: 12%;
}
.sea-shell-3 {
  width: 7%;
  margin-left: 80%;
}
.sea-shell-4 {
  width: 11%;
  margin-left: 85%;
}
</style>
