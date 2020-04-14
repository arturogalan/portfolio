<script>
import Sky from '@/components/main-landscape/Sky';
import Birds from '@/components/main-landscape/Birds';
import Sea from '@/components/main-landscape/Sea';
import Sand from '@/components/main-landscape/Sand';
import LateralMenu from '@/components/main-landscape/LateralMenu';

// import Stones from './Stones';

export default {
  name: "MainLandscape",
  components: {
    Sky,
    Sea,
    Sand,
    Birds,
    LateralMenu,
    // Stones,
  },
};
</script>
<template>
  <article class="main-layout">
    <div class="title">
      <img class="title-img" src="@/assets/png/font.png" alt="">
    </div>
    <birds class="birds"/>
    <sky/>
    <sea class="upside-down z-index-2"/>
    <sand/>
    <lateral-menu class="lateral-menu"/>
  </article>
</template>
<style scoped lang="scss">
.main-layout {
  text-align: center;
}
.lateral-menu {
  position: absolute;
}
.birds {
  z-index: 1;
  position: absolute;
}
.title {
  position: absolute;
  top: 3rem;
  width: 100%;
  opacity: .7;
  font-weight: normal;
  z-index: 2;
  display: block;
  margin: auto;
}
.title-img{
  width: 53rem;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.upside-down {
  transform: rotate(180deg);
}
</style>
