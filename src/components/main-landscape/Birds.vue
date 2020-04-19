<script>
export default {
  name: 'Birds',
  data() {
    return {
      animationOn: false,
    }
  },
  mounted() {
    const movementXPaths = (index) => {
      const values = [
        ['100rem', '65rem'],
        ['-7rem', '35rem'],
        ['100rem', '55rem'],
        ['-7rem', '45rem'],
        ['100rem', '75rem'],
      ]
      return values[index % values.length]
    }
    const birdAnimationMovement = (index) => {
      this.$anime({
        targets: '.bird-main',
        translateY: ['0', '-11rem'],
        // translateX: movementXPaths[Math.random() * 4],
        translateX: movementXPaths(index),
        width: ['17rem', '5rem'],
        // height: '+=2px',
        opacity: [
          { value: 1, duration: 15000 },
          { value: 0 },
        ],
        easing: 'easeOutQuint',
        duration: 15000,
        complete: () => birdAnimationMovement(index + 1),
      },
      )
    }

    const birdMorphAnimation = {
      targets: '.bird1-path',
      d: [
        { value: 'M0.5,53.327C0.5,53.327 95.08,95.146 144.886,78C191.17,62.066 193.878,37.414 205,36.777C218.306,36.015 253.447,79.853 317.042,67C350.389,60.261 400.967,23.776 400.967,23.776C400.967,23.776 310.791,44.944 284.293,41.567C225.374,34.059 205.012,-0.123 201.3,0.509C197.063,1.229 186.019,31.899 129.5,50.082C52.362,74.899 0.5,53.327 0.5,53.327Z' },
      ],
      duration: 1000,
      loop: true,
      easing: 'easeInOutQuad',
      direction: 'alternate',
    }

    this.animationOn === true && birdAnimationMovement(0)
    this.animationOn === true && this.$anime(birdMorphAnimation)
  },
}
</script>
<template>
  <div class="bird-main" ref="birds">
    <svg class="bird" width="32%" height="32%" viewBox="0 0 804 166" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve"  style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.5;">
      <path class="bird1-path" d="M0.5,29.3C0.5,29.3 95.08,-12.519 144.886,4.628C191.17,20.562 193.878,45.213 205,45.85C218.306,46.612 253.447,2.775 317.042,15.627C350.389,22.367 400.967,58.851 400.967,58.851C400.967,58.851 310.791,37.683 284.293,41.06C225.374,48.569 205.012,82.75 201.3,82.119C197.063,81.398 186.019,50.728 129.5,32.545C52.362,7.728 0.5,29.3 0.5,29.3Z" style="stroke:black;stroke-width:1px;"/>
    </svg>
    <svg class="bird1" width="22%" height="32%" viewBox="0 0 804 156" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve"  style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.5;">
      <path class="bird1-path" d="M0.5,29.3C0.5,29.3 95.08,-12.519 144.886,4.628C191.17,20.562 193.878,45.213 205,45.85C218.306,46.612 253.447,2.775 317.042,15.627C350.389,22.367 400.967,58.851 400.967,58.851C400.967,58.851 310.791,37.683 284.293,41.06C225.374,48.569 205.012,82.75 201.3,82.119C197.063,81.398 186.019,50.728 129.5,32.545C52.362,7.728 0.5,29.3 0.5,29.3Z" style="stroke:black;stroke-width:1px;"/>
    </svg>
    <svg class="bird2" width="32%" height="32%" viewBox="0 0 804 96" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve"  style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.5;">
      <path class="bird1-path" d="M0.5,29.3C0.5,29.3 95.08,-12.519 144.886,4.628C191.17,20.562 193.878,45.213 205,45.85C218.306,46.612 253.447,2.775 317.042,15.627C350.389,22.367 400.967,58.851 400.967,58.851C400.967,58.851 310.791,37.683 284.293,41.06C225.374,48.569 205.012,82.75 201.3,82.119C197.063,81.398 186.019,50.728 129.5,32.545C52.362,7.728 0.5,29.3 0.5,29.3Z" style="stroke:black;stroke-width:1px;"/>
    </svg>
    <svg class="bird3" width="32%" height="52%" viewBox="0 0 700 100" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve"  style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.5;">
      <path class="bird1-path" d="M0.5,29.3C0.5,29.3 95.08,-12.519 144.886,4.628C191.17,20.562 193.878,45.213 205,45.85C218.306,46.612 253.447,2.775 317.042,15.627C350.389,22.367 400.967,58.851 400.967,58.851C400.967,58.851 310.791,37.683 284.293,41.06C225.374,48.569 205.012,82.75 201.3,82.119C197.063,81.398 186.019,50.728 129.5,32.545C52.362,7.728 0.5,29.3 0.5,29.3Z" style="stroke:black;stroke-width:1px;"/>
    </svg>
    <svg class="bird4" width="22%" height="32%" viewBox="0 0 904 166" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve"  style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.5;">
      <path class="bird1-path" d="M0.5,29.3C0.5,29.3 95.08,-12.519 144.886,4.628C191.17,20.562 193.878,45.213 205,45.85C218.306,46.612 253.447,2.775 317.042,15.627C350.389,22.367 400.967,58.851 400.967,58.851C400.967,58.851 310.791,37.683 284.293,41.06C225.374,48.569 205.012,82.75 201.3,82.119C197.063,81.398 186.019,50.728 129.5,32.545C52.362,7.728 0.5,29.3 0.5,29.3Z" style="stroke:black;stroke-width:1px;"/>
    </svg>
    <svg class="bird5" width="22%" height="32%" viewBox="0 0 804 66" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve"  style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.5;">
      <path class="bird1-path" d="M0.5,29.3C0.5,29.3 95.08,-12.519 144.886,4.628C191.17,20.562 193.878,45.213 205,45.85C218.306,46.612 253.447,2.775 317.042,15.627C350.389,22.367 400.967,58.851 400.967,58.851C400.967,58.851 310.791,37.683 284.293,41.06C225.374,48.569 205.012,82.75 201.3,82.119C197.063,81.398 186.019,50.728 129.5,32.545C52.362,7.728 0.5,29.3 0.5,29.3Z" style="stroke:black;stroke-width:1px;"/>
    </svg>
    <svg class="bird6" width="22%" height="32%" viewBox="0 0 704 126" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve"  style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.5;">
      <path class="bird1-path" d="M0.5,29.3C0.5,29.3 95.08,-12.519 144.886,4.628C191.17,20.562 193.878,45.213 205,45.85C218.306,46.612 253.447,2.775 317.042,15.627C350.389,22.367 400.967,58.851 400.967,58.851C400.967,58.851 310.791,37.683 284.293,41.06C225.374,48.569 205.012,82.75 201.3,82.119C197.063,81.398 186.019,50.728 129.5,32.545C52.362,7.728 0.5,29.3 0.5,29.3Z" style="stroke:black;stroke-width:1px;"/>
    </svg>
    <svg class="bird7" width="22%" height="32%" viewBox="0 0 804 156" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve"  style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.5;">
      <path class="bird1-path" d="M0.5,29.3C0.5,29.3 95.08,-12.519 144.886,4.628C191.17,20.562 193.878,45.213 205,45.85C218.306,46.612 253.447,2.775 317.042,15.627C350.389,22.367 400.967,58.851 400.967,58.851C400.967,58.851 310.791,37.683 284.293,41.06C225.374,48.569 205.012,82.75 201.3,82.119C197.063,81.398 186.019,50.728 129.5,32.545C52.362,7.728 0.5,29.3 0.5,29.3Z" style="stroke:black;stroke-width:1px;"/>
    </svg>

  </div>
</template>

<style lang="scss" scoped>
.bird-main {
  top: 10rem;
  width: 14rem;;
}
.bird1 {
  position: absolute;
  left: 3rem;
  top: 2rem;
}
.bird2 {
  position: absolute;
  left: 1rem;
  top: 2rem;
}
.bird3 {
  position: absolute;
  left: 4rem;
  top: 1rem;
}
.bird4 {
  position: absolute;
  left: 2rem;
  top: 1rem;
}
.bird5 {
  position: absolute;
  left: 5rem;
  top: 2rem;
}
.bird6 {
  position: absolute;
  left: 3rem;
  top: 3rem;
}
.bird7 {
  position: absolute;
  left: 1rem;
  top: 3.5rem;
}
</style>
