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
  width: 35rem;
  bottom: -5rem;
  left: 32%;
  z-index: 20;
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
  width: 7rem;
  bottom: 3rem;
  left: 4rem;
  transform: rotateX(-50deg) rotateZ(-20deg);
}
.noisebox-sand-logo {
  position: absolute;
  width: 7rem;
  bottom: 6rem;
  left: 20rem;
  transform: rotateX(-50deg) rotateZ(20deg);
}
.clarity-sand-logo {
  position: absolute;
  width: 7rem;
  bottom: 3rem;
  right: 4rem;
  transform: rotateX(-40deg) rotateZ(20deg);
}
.clave-sol-sand-logo {
  position: absolute;
  width: 5rem;
  bottom: 4rem;
  right: 20rem;
  transform: rotateX(-50deg) rotateZ(20deg);
}
</style>