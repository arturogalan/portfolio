
<script>
import MenuContents from './MenuContents';

  export default {
    name: 'LateralMenu',
    components: {
      MenuContents,
    },
    mounted () {
      this.timeline = this.$anime.timeline({
        easing: 'easeOutExpo',
        duration: 750
      });
    },
    data() {
      return {
        isHover: false,
        isOpen: false,
        isClickZoneHover: false,
        timeline: {},
      }
    },
    methods: {
      hoverMenu(value) {
        if(!this.isOpen) {
          this.isHover = value;
        }
      },
      hoverClickZone() {
        this.isClickZoneHover = !this.isClickZoneHover;
      },
      makeTransition() {
        const paths = [
          'M799.636,0.493C799.636,0.493 638.814,43.491 625.845,111.056C620.909,136.777 706.023,191.817 702.518,218.058C698.824,245.714 620.917,311.927 620.895,334.328C620.872,358.54 716.069,380.987 720.272,414.492C724.019,444.362 648.181,463.534 653.246,493.447C665.846,567.857 799.629,599.482 799.629,599.482L799.636,0.493Z',
          'M799.636,0.493C799.636,0.493 74.208,-34.393 47.065,28.824C-9.986,161.694 102.11,196.674 107.589,222.575C123.818,299.302 -25.079,319.352 -25.101,341.753C-25.124,365.965 7.842,543.778 12.045,577.283C15.792,607.153 65.715,551.32 70.78,581.233C83.38,655.643 799.629,599.482 799.629,599.482L799.636,0.493Z',
          'M799.636,0.493C799.636,0.493 0.511,-0.163 0.511,0.428C0.511,82.356 -1.773,214.819 -1.381,241.29C-0.127,325.995 0.127,343.393 0.105,365.794C0.081,390.006 0.381,457.05 0.238,490.818C0.097,524.032 -0.19,599.047 0.104,599.045C77.167,598.417 799.629,599.482 799.629,599.482L799.636,0.493Z',
        ]
        const menuAnimationWaves = {
          targets: '.menu-path',
          d: paths,
          easing: 'easeOutQuint',
          duration: 1500,
          // loop: false,
        }
        const menuButtonLine1 = {
          targets: '.line1',
          translateY: ['0', '-28.5rem'],
          translateX: ['0', '3rem'],
          width: ['100%','80%'],
          rotateZ: ['0', '45deg'],
          easing: 'easeInOutExpo',
          duration: 1500,
          loop: false,
        }
        const menuButtonLine2 = {
          targets: '.line2',
          translateY: ['0', '-28rem'],
          opacity: [1,0],
          easing: 'easeInOutExpo',
          duration: 1500,
          loop: false,
        }
        const menuButtonLine3 = {
          targets: '.line3',
          translateY: ['0', '-26rem'],
          translateX: ['0', '0'],
          width: ['100%','80%'],
          rotateZ: ['0', '-45deg'],
          easing: 'easeInOutExpo',
          duration: 1500,
          loop: false,
        }
        this.$anime(menuAnimationWaves);
        this.$anime(menuButtonLine1)
        this.$anime(menuButtonLine2)
        this.$anime(menuButtonLine3)
        this.isOpen = true;
      },
      undoTransition() {
        const paths = [
          'M799.636,0.493C799.636,0.493 0.511,-0.163 0.511,0.428C0.511,82.356 -1.773,214.819 -1.381,241.29C-0.127,325.995 0.127,343.393 0.105,365.794C0.081,390.006 0.381,457.05 0.238,490.818C0.097,524.032 -0.19,599.047 0.104,599.045C77.167,598.417 799.629,599.482 799.629,599.482L799.636,0.493Z',
          'M799.636,0.493C799.636,0.493 74.208,-34.393 47.065,28.824C-9.986,161.694 102.11,196.674 107.589,222.575C123.818,299.302 -25.079,319.352 -25.101,341.753C-25.124,365.965 7.842,543.778 12.045,577.283C15.792,607.153 65.715,551.32 70.78,581.233C83.38,655.643 799.629,599.482 799.629,599.482L799.636,0.493Z',
          'M799.636,0.493C799.636,0.493 638.814,43.491 625.845,111.056C620.909,136.777 706.023,191.817 702.518,218.058C698.824,245.714 620.917,311.927 620.895,334.328C620.872,358.54 716.069,380.987 720.272,414.492C724.019,444.362 648.181,463.534 653.246,493.447C665.846,567.857 799.629,599.482 799.629,599.482L799.636,0.493Z',
          'M799.636,0.493C799.636,0.493 784.879,57.444 771.91,125.009C766.973,150.73 762.296,177.99 758.79,204.231C755.096,231.886 752.704,258.41 752.682,280.811C752.658,305.023 755.426,336.325 759.629,369.83C763.376,399.7 768.262,431.322 773.327,461.235C785.927,535.645 799.629,599.482 799.629,599.482L799.636,0.493Z',
        ]
        const menuAnimationWaves = {
          targets: '.menu-path',
          d: paths,
          easing: 'easeOutQuint',
          duration: 1500,
          // loop: false,
        }
        const menuButtonLine1 = {
          targets: '.line1',
          translateY: ['-28.5rem', '0'],
          translateX: ['3rem', '0'],
          width: ['80%', '100%'],
          rotateZ: ['45deg', '0'],
          easing: 'easeInOutExpo',
          duration: 1500,
          loop: false,
        }
        const menuButtonLine2 = {
          targets: '.line2',
          translateY: ['-28rem', '0'],
          opacity: [0, 1],
          easing: 'easeInOutExpo',
          duration: 1500,
          loop: false,
        }
        const menuButtonLine3 = {
          targets: '.line3',
          translateY: ['-26rem', '0'],
          translateX: ['0', '0'],
          width: ['80%', '100%'],
          rotateZ: ['-45deg', '0'],
          easing: 'easeInOutExpo',
          duration: 1500,
          loop: false,
        }
        const opacityAnimation = {
            targets: '.main-graph',
            opacity: [1,.4],
            duration: 1500,
            easing: 'easeInOutExpo',
            complete: ()=> {this.isHover = false; document.querySelector('.main-graph').style.removeProperty('opacity')},
        }

        this.$anime(opacityAnimation)
        this.$anime(menuAnimationWaves);
        this.$anime(menuButtonLine1)
        this.$anime(menuButtonLine2)
        this.$anime(menuButtonLine3)

        this.isOpen = false;
        // setTimeout(()=> this.isHover = false, 1500);
      }
    },
      
  }
</script>

<template>
  <div class="right">
    <div v-if="isOpen" class="close-click-zone" @click.prevent="undoTransition" @mouseenter="hoverClickZone" @mouseleave="hoverClickZone">
    </div>
    <transition     
      name="fade-in"
    >
      <MenuContents v-if="isOpen"/>
    </transition>
    <svg class="menu-wave" :class="[!isOpen && 'pointer']" viewBox="0 0 100 600" width="100%" height="100%">
      <g @mousemove="hoverMenu(true)" @mouseenter="hoverMenu(true)" @mouseleave="hoverMenu(false)" :class="isHover ? 'no-opacity' : 'opacity'" class="main-graph" transform="matrix(1,0,0,1,-748,0.00710406)">
        <path @click.prevent="makeTransition" class="menu-path " d="M799.636,0.493C799.636,0.493 784.879,57.444 771.91,125.009C766.973,150.73 762.296,177.99 758.79,204.231C755.096,231.886 752.704,258.41 752.682,280.811C752.658,305.023 755.426,336.325 759.629,369.83C763.376,399.7 768.262,431.322 773.327,461.235C785.927,535.645 799.629,599.482 799.629,599.482L799.636,0.493Z" style="stroke:black;stroke-width:1px;"/>
        <g @click.prevent="makeTransition" class="close-path" :class="[isHover ? 'no-opacity' : 'opacity']" transform="matrix(1.2346,0,0,1.81972,-184.507,-233.658)">
            <g transform="matrix(0.299497,0,0,0.286258,759.597,271.235)">
                <path class="line1 hover-button-shadow" d="M102.027,26.31C102.027,24.995 100.522,23.927 98.669,23.927L23.869,23.927C22.016,23.927 20.511,24.995 20.511,26.31L20.511,31.077C20.511,32.392 22.016,33.46 23.869,33.46L98.669,33.46C100.522,33.46 102.027,32.392 102.027,31.077L102.027,26.31Z" 
                style="fill:rgb(235,235,235);"/>
            </g>
            <g transform="matrix(0.299497,0,0,0.286258,759.597,276.807)">
                <path class="line2" d="M102.027,26.31C102.027,24.995 100.522,23.927 98.669,23.927L23.869,23.927C22.016,23.927 20.511,24.995 20.511,26.31L20.511,31.077C20.511,32.392 22.016,33.46 23.869,33.46L98.669,33.46C100.522,33.46 102.027,32.392 102.027,31.077L102.027,26.31Z" style="fill:rgb(235,235,235);"/>
            </g>
            <g transform="matrix(0.299497,0,0,0.286258,759.597,282.428)">
                <path class="line3 hover-button-shadow" d="M102.027,26.31C102.027,24.995 100.522,23.927 98.669,23.927L23.869,23.927C22.016,23.927 20.511,24.995 20.511,26.31L20.511,31.077C20.511,32.392 22.016,33.46 23.869,33.46L98.669,33.46C100.522,33.46 102.027,32.392 102.027,31.077L102.027,26.31Z" style="fill:rgb(235,235,235);"/>
            </g>
        </g>
    </g>
    </svg>



  </div>
</template>

<style lang="scss" scoped>
.right {
  right: 0;
  height: 100%;
  width: 100%;
}
.menu-button {
  position: absolute;
  right: 0;
  top: 0;
  // transform: translateY(-50%);
}
.menu-wave {
  will-change: transform;
  position: absolute;
  z-index: 2;
  // right: 0;
}
svg path {
  fill: #000;
}
.pointer {
  cursor: pointer;
}
.no-opacity {
  opacity: 1;
}
.opacity {
  opacity: .4;
}
.close-click-zone {
  position: absolute;
  top: 2rem;
  right: 0;
  height: 5rem;
  width: 5rem;
  cursor: pointer;
  z-index: 6;
}
.close-filter-svg {
    position: absolute;
  top: 0;
  right: 0;
  height: 5rem;
  width: 5rem;
  z-index: 3;
}
.close-path {
  z-index: 4;
}
.hover-button-shadow {
  //  filter: box-shadow(0px 2px 16px red);
  // border: solid 3px black;
  border-left: solid 3px transparent; 
  border-right: solid 3px transparent; 
  border-bottom: solid 3px transparent;
  // filter: drop-shadow(0 20px 30px red);
  filter: drop-shadow(10px -2px 16px white);

}
  .menu-item {
    white-space:pre;
       color: white;
    list-style-type:none;
    font-family: 'August';
    font-size: 5rem;
    z-index: 50;
    &:hover {
      filter: drop-shadow(0px -20px 16px darkred);
    }
  }
</style>