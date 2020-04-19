<script>
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
}
</script>
<template>
<div>
  <div class="sand-main">
    <img src="~assets/svg/sand.svg" alt="">
  </div>
  <div class="sea-shell sea-shell-1">
    <img src="~assets/svg/seaShell.svg" alt="">
  </div>
  <div class="sea-shell sea-shell-2">
    <img src="~assets/svg/seaShell2.svg" alt="">
  </div>
  <div class="sea-shell sea-shell-3">
    <img src="~assets/svg/seaShell3.svg" alt="">
  </div>
    <div class="sea-shell sea-shell-4">
    <img src="~assets/svg/seaShell4.svg" alt="">
  </div>
    <div class="sea-shell sea-shell-5">
    <img src="~assets/svg/seaShell5.svg" alt="">
  </div>
  <div>
    <img class="yoga" src="~assets/svg/yoga.svg" alt="">
  </div>
    </div>
</template>

<style lang="scss" scoped>
.yoga {
  position: absolute;
  width: 50%;
  bottom: 0;
  left: 50%;
  z-index: 3;
  opacity: .8;
  transform: translateX(-50%);
}
.sand-main {
  width:100%;
  height: 48%;
  position: fixed;
  top: 57%;
  left: 0;
}
.sea-shell {
  position: absolute;
  transform: rotateX(40deg);
  filter: drop-shadow(0px -2px 6px black)
}
.sea-shell-1 {
  width: 3rem;
  bottom: 16rem;
  left: 4rem;
}
.sea-shell-2 {
  width: 3rem;
  bottom: 18rem;
  left: 6rem;
}
.sea-shell-3 {
  width: 3rem;
  bottom: 16rem;
  right: 4rem;
}
.sea-shell-4 {
  width: 4rem;
  bottom: 14rem;
  right: 1rem;
}
.sea-shell-5 {
  width: 5rem;
  bottom: 17rem;
  left: .5rem;
}
</style>
