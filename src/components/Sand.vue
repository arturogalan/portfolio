<script>
  export default {
    name: 'Sand'
  }
</script>
<template>
<div>
  <div class="sand-main">
    <img src="../assets/svg/sand.svg" alt="">
  </div>
  <div class="vue-sand-logo">
    <img src="../assets/svg/vueSandLogo.svg" alt="">
  </div>
  <div class="noisebox-sand-logo">
    <img src="../assets/svg/noiseBoxSandLogo.svg" alt="">
  </div>
    <div class="clarity-sand-logo">
    <img src="../assets/svg/claritySandLogo.svg" alt="">
  </div>
    <div class="clave-sol-sand-logo">
    <img src="../assets/svg/claveSolSandLogo.svg" alt="">
  </div>
  <div class="yoga">
    <img src="../assets/svg/yoga.svg" alt="">
  </div>
    </div>
</template>


<style lang="scss" scoped>
.yoga {
  position: absolute;
  width: 50rem;
  bottom: -4rem;
  left: 25%;
  z-index: 20;
  opacity: .8;
  // transform: rotateX(10deg) rotateY(40deg) rotateZ(0deg);
}
.sand-main {
  width:100%;
  // min-width: auto;
  height: 48%;
  position: fixed;
  top: 57%;
  left: 0;
}
.vue-sand-logo {
  position: absolute;
  width: 9rem;
  bottom: 1rem;
  left: 4rem;
  transform: rotateX(-60deg) rotateZ(-20deg);
  opacity: .4;
}
.noisebox-sand-logo {
  position: absolute;
  width: 9rem;
  bottom: 6rem;
  left: 12rem;
  transform: rotateX(-60deg) rotateZ(20deg);
  opacity: .4;
}
.clarity-sand-logo {
  position: absolute;
  width: 9rem;
  bottom: 1rem;
  right: 4rem;
  transform: rotateX(-60deg) rotateZ(20deg);
  opacity: .4;
}
.clave-sol-sand-logo {
  position: absolute;
  width: 6rem;
  bottom: 4rem;
  right: 15rem;
  transform: rotateX(-70deg) rotateZ(20deg);
  opacity: .4;
}
</style>