<script>
export default {
  name: 'Sea',
  data() {
    return {
      seaAnimations: {
        waveLines: [
          {
            topValue: 480
          },
          {
            topValue: 510
          },
          {
            topValue: 540
          },
          {
            topValue: 560
          },
          {
            topValue: 600
          },
        ]
      }
    }
  },
  mounted() {
      // Wave animation up and down
    const waveAnimationMovement = {
      targets: '.wave-path',
      translateY: ['100%', '0%'],
      opacity: [1, .7, 0],
      strokeWidth: [.1, .2, .1, .4],
      stroke: ['#FFF','#CCC'],
      // direction: 'linear',
      easing: 'easeInOutQuad',
      duration: 3500,
      endDelay: 6500,
      loop: true,
    }
    const waveAnimationWaves = {
      targets: '.wave-path',
      d: [
        {value: 'M-0.011,11.919C26.578,11.919 51.55,11.961 75.24,12.037C109.27,12.147 140.652,12.328 170.373,12.56C214.235,12.903 254.477,13.357 294.268,13.856C329.425,14.296 364.229,14.771 400.867,15.235C443.268,15.773 488.124,16.295 538.824,16.732C581.957,17.103 629.319,17.413 682.997,17.616C719.532,17.755 758.993,17.845 802.037,17.872C856.546,17.872 905.646,17.761 950.532,17.57C994.438,17.384 1034.31,17.12 1071.27,16.808C1118.37,16.41 1160.74,15.933 1200.68,15.436C1242.4,14.916 1281.48,14.373 1320.54,13.874C1352.35,13.468 1384.15,13.091 1417.38,12.779C1448.21,12.489 1480.27,12.255 1514.69,12.106C1541.46,11.99 1569.66,11.925 1599.82,11.925L1600,198L0,198C0,198 -0.011,40.919 -0.011,11.919Z',
        },
        {value: 'M-0.011,11.919C26.578,11.919 35.532,15.578 59.221,15.655C93.251,15.764 127.379,11.293 157.1,11.526C200.962,11.869 233.378,15.765 273.169,16.263C308.326,16.704 346.976,12.95 383.614,13.414C426.015,13.952 467.27,18.788 517.969,19.225C561.103,19.597 612.099,13.701 665.776,13.905C702.312,14.044 740.974,18.028 784.018,18.055C838.527,18.055 901.495,14.681 946.381,14.49C990.287,14.304 1034.06,20.656 1071.01,20.344C1118.12,19.946 1157.15,12.597 1197.09,12.099C1238.81,11.579 1280.71,17.909 1319.77,17.411C1351.58,17.004 1382.1,10.781 1415.32,10.469C1446.16,10.179 1480.52,16.549 1514.94,16.4C1541.71,16.284 1569.66,11.925 1599.82,11.925L1600,198L0,198C0,198 -0.011,40.919 -0.011,11.919Z',
        },
      ],
      direction: 'alternate',
      easing: 'easeInOutQuad',
      duration: 2500,
      loop: true,
    }
    // Foam animation made with dropshadow over the svg tag
    const slimWaveFoamAnimation = {
      targets: '.wave-foam-svg',
      filter: [
        {value: 'drop-shadow(0px -20px 6px white)', duration: 1500, delay: 2500},
        {value: 'drop-shadow(0px 0px 6px white)', duration: 2000},
        {value: 'drop-shadow(0px 0px 0px white)', duration: 4000},
      ],
      opacity: [
        {value: 1, duration: 1500, delay: 2500},
        {value: 0.2, duration: 2000},
        {value: 0, duration: 4000},
      ],
      loop: true,
      easing: 'linear',
      direction: 'normal',
    };
    // Foam curve movements
    const slimWaveMorphAnimation = {
      targets: '.wave-foam-path',
      d: [
      {value: 'M1600.02,12.917c-74.616,0 -135.482,1.799 -192.001,1.845c-82.939,0.067 -151.482,-4.68 -234.5,-4.588c-54.623,0.06 -117.113,6.48 -188.44,6.518c-54.311,0.03 -115.895,-8.047 -186.647,-8.043c-70.837,0 -133.054,4.795 -188.244,4.767c-78.486,-0.04 -142.771,3.422 -202.436,3.355c-63.658,-0.071 -123.684,-5.257 -183.633,-5.319c-46.967,-0.048 -94.088,4.782 -148.789,4.763c-23.888,-0.009 -48.679,-3.297 -75.246,-3.297l-0.182,16.999l1600.11,0c0,0 0.011,-14.35 0.011,-17Z'},
      ],
      duration: 3000,
      loop: true,
      easing: 'easeInOutQuad',
      direction: 'alternate',
    };
    this.$anime(waveAnimationMovement);
    this.$anime(waveAnimationWaves);
    this.$anime(slimWaveFoamAnimation);
    this.$anime(slimWaveMorphAnimation);
    const pennersFunctions = ['easeInOutQuad','easeInOutCubic','easeInOutQuart','easeInOutQuint','easeInOutSine','easeInOutExpo','easeInOutCirc','easeInOutBack','easeInOutBounce'];
    const strokeColors = [
      ['#FFF','#CCC'],
      ['#143C44', '#184A4E'],
      ['#143C44', '#184A4E'],
      ['#143C44', '#184A4E'],
      ['#143C44', '#184A4E'],
    ]
    const strokeWidths = [
      [.1, .2],
      [.1, 1],
      [.1, 1],
      [.1, 1],
      [.1, 1],
    ]
    this.seaAnimations.waveLines.forEach((el, index)=>{
      const firstElementIndex = ((index + 1) * 2) - 1;
      const secondElementIndex = ((index + 1) * 2);
      let seaAnimation = {
          targets: `.sea-path-${firstElementIndex}`,
          d:[
            {value: 'M-0.011,11.919C310.984,11.919 400.935,17.622 802.037,17.872C1202.04,17.872 1310.82,11.925 1599.82,11.925L1600,198L0,198C0,198 -0.011,40.919 -0.011,11.919Z'},
            {value: 'M-0.011,11.919C310.984,11.919 400.931,5.375 802.033,5.625C1202.04,5.625 1310.82,11.925 1599.82,11.925L1600,198L0,198C0,198 -0.011,40.919 -0.011,11.919Z'}
          ],
          ...(index > 0) && {opacity: [1, .7]},
          ...(index < 3) && {strokeWidth: strokeWidths[index]},
          ...(index < 3) && {stroke: strokeColors[index]},
          delay: firstElementIndex * 1000,
          easing: pennersFunctions[index],
          duration: this.$anime.random(3000,6000),
          direction: 'alternate',
          loop: true,
        };
      let seaAnimation2 = {
          targets: `.sea-path-${secondElementIndex}`,
          d:[
        {value: 'M-0.011,11.919C134.968,11.919 228.892,15.173 324.156,15.738C448.385,16.473 574.134,7.252 801.149,7.393C1087.75,7.393 1224.91,15.696 1385.92,17.529C1449.62,18.255 1517.89,11.925 1599.82,11.925L1600,198L0,198C0,198 -0.011,40.919 -0.011,11.919Z'},
        {value: 'M-0.011,11.919C134.968,11.919 229.156,6.321 324.421,6.885C448.65,7.62 575.27,14.577 802.286,14.718C1088.89,14.718 1225.48,4.24 1386.48,6.073C1450.18,6.799 1517.89,11.925 1599.82,11.925L1600,198L0,198C0,198 -0.011,40.919 -0.011,11.919Z'}
          ],
          ...(index > 0) && {opacity: [1, .7]},
          ...(index < 3) && {strokeWidth: [.1, 1]},
          ...(index < 3) && {stroke: strokeColors[index]},
          delay: firstElementIndex * 1000,
          easing: pennersFunctions[index],
          duration: 5000,
          direction: 'alternate',
          loop: true,
        };
        this.$anime(seaAnimation);
        this.$anime(seaAnimation2);

      }
    )

    // this.$anime(seaAnimation);
  },
};
</script>
<template>
<div>

<div>
  <svg class="wave-foam-svg">
    <!-- <g> -->
      <g transform="matrix(2.3,0,0,1,0,0)">

    <path class="wave-foam-path" d="M1600.02,13.089c-74.616,0 -136.509,0.03 -193.028,0.075c-82.939,0.068 -154.305,0.169 -237.323,0.261c-54.623,0.06 -114.29,0.116 -185.616,0.154c-54.311,0.03 -115.383,0.049 -186.134,0.053c-70.837,0 -132.541,-0.017 -187.731,-0.045c-78.486,-0.04 -143.797,-0.102 -203.463,-0.169c-63.657,-0.071 -120.889,-0.148 -180.838,-0.21c-46.967,-0.048 -95.603,-0.087 -150.304,-0.106c-23.888,-0.008 -48.932,-0.013 -75.499,-0.013l-0.182,17l1600.11,0c0,0 0.011,-14.351 0.011,-17Z" style="fill:url(#_Linear1);"/>
      </g>
      <defs>
        <linearGradient id="_Linear1" x1="0" y1="0" x2="1" y2="0" gradientUnits="userSpaceOnUse" gradientTransform="matrix(1.34527e-14,219.699,-219.699,1.34527e-14,800,-21.6992)"><stop offset="0" style="stop-color:rgb(28, 87, 90);stop-opacity:0.75"/><stop offset="1" style="stop-color:rgb(1,88,113);stop-opacity:1"/></linearGradient>
        <filter id="f1" x="0" y="0">
          <feGaussianBlur in="SourceGraphic" stdDeviation="155" />
        </filter>
      </defs>
    </svg>
</div>
  <div>
    <svg class="wave-svg z-index-3">
      <g>
        <path
          class="wave-path"
          d="M-0.011,11.919C26.578,11.919 51.55,11.961 75.24,12.037C109.27,12.147 140.652,12.328 170.373,12.56C214.235,12.903 254.477,13.357 294.268,13.856C329.425,14.296 364.229,14.771 400.867,15.235C443.268,15.773 488.124,16.295 538.824,16.732C581.957,17.103 629.319,17.413 682.997,17.616C719.532,17.755 758.993,17.845 802.037,17.872C856.546,17.872 905.646,17.761 950.532,17.57C994.438,17.384 1034.31,17.12 1071.27,16.808C1118.37,16.41 1160.74,15.933 1200.68,15.436C1242.4,14.916 1281.48,14.373 1320.54,13.874C1352.35,13.468 1384.15,13.091 1417.38,12.779C1448.21,12.489 1480.27,12.255 1514.69,12.106C1541.46,11.99 1569.66,11.925 1599.82,11.925L1600,198L0,198C0,198 -0.011,40.919 -0.011,11.919Z" style="fill:url(#_Linear1);"
        />
      </g>
      <defs>
        <linearGradient id="_Linear1" x1="0" y1="0" x2="1" y2="0" gradientUnits="userSpaceOnUse" gradientTransform="matrix(1.34527e-14,219.699,-219.699,1.34527e-14,800,-21.6992)"><stop offset="0" style="stop-color:rgb(28, 87, 90);stop-opacity:0.75"/><stop offset="1" style="stop-color:rgb(1,88,113);stop-opacity:1"/></linearGradient>
      </defs>
    </svg>
</div>

<div>
    <!-- at the same line as foam -->
    <svg width="100%" height="100%" class="sea-svg">

      <g v-for="(waveLine, index) in seaAnimations.waveLines" :key="index" :transform="`matrix(1,0,0,${index === 0 ? '1.3' : '1'},0,${waveLine.topValue})`">
        <path
          :class="`sea-path-${((index + 1) * 2) - 1}`"
          d="M-0.011,11.919C310.984,11.919 400.935,17.622 802.037,17.872C1202.04,17.872 1310.82,11.925 1599.82,11.925L1600,198L0,198C0,198 -0.011,40.919 -0.011,11.919Z"
          :style="`fill:url(#_Linear${index+1});`"
        />
        <path
          :class="`sea-path-${((index + 1) * 2)}`" 
          d="M-0.011,11.919C134.968,11.919 228.892,15.173 324.156,15.738C448.385,16.473 574.134,7.252 801.149,7.393C1087.75,7.393 1224.91,15.696 1385.92,17.529C1449.62,18.255 1517.89,11.925 1599.82,11.925L1600,198L0,198C0,198 -0.011,40.919 -0.011,11.919Z"
          :style="`fill:url(#_Linear${index+1});`"
        />
      </g>
      <defs>
        <linearGradient id="_Linear1" x1="0" y1="0" x2="1" y2="0" gradientUnits="userSpaceOnUse" gradientTransform="matrix(1.34527e-14,219.699,-219.699,1.34527e-14,800,-21.6992)"><stop offset="0" style="stop-color:rgb(28, 87, 90);stop-opacity:0.1"/><stop offset="1" style="stop-color:rgb(1,88,113);stop-opacity:.3"/></linearGradient>
        <linearGradient id="_Linear2" x1="0" y1="0" x2="1" y2="0" gradientUnits="userSpaceOnUse" gradientTransform="matrix(1.34527e-14,219.699,-219.699,1.34527e-14,800,-21.6992)"><stop offset="0" style="stop-color:rgb(26, 80, 84);stop-opacity:0.75"/><stop offset="1" style="stop-color:rgb(1,88,113);stop-opacity:1"/></linearGradient>
        <linearGradient id="_Linear3" x1="0" y1="0" x2="1" y2="0" gradientUnits="userSpaceOnUse" gradientTransform="matrix(1.34527e-14,219.699,-219.699,1.34527e-14,800,-21.6992)"><stop offset="0" style="stop-color:rgb(24, 74, 78);stop-opacity:0.75"/><stop offset="1" style="stop-color:rgb(1,88,113);stop-opacity:1"/></linearGradient>
        <linearGradient id="_Linear4" x1="0" y1="0" x2="1" y2="0" gradientUnits="userSpaceOnUse" gradientTransform="matrix(1.34527e-14,219.699,-219.699,1.34527e-14,800,-21.6992)"><stop offset="0" style="stop-color:rgb(22, 68, 72);stop-opacity:0.75"/><stop offset="1" style="stop-color:rgb(1,88,113);stop-opacity:1"/></linearGradient>
        <linearGradient id="_Linear5" x1="0" y1="0" x2="1" y2="0" gradientUnits="userSpaceOnUse" gradientTransform="matrix(1.34527e-14,219.699,-219.699,1.34527e-14,800,-21.6992)"><stop offset="0" style="stop-color:rgb(20, 60, 68);stop-opacity:0.75"/><stop offset="1" style="stop-color:rgb(1,88,113);stop-opacity:1"/></linearGradient>
      </defs>
    </svg>
  </div>
</div>

</template>

<style lang="scss" scoped>
.sea-svg {
  position: absolute;
  left: 0;
}
.wave-foam-svg {
  width: 100%;
  // height: 25%;
  bottom: 0;
  left: 0;
  position: absolute;
  pointer-events: none;
  opacity: 0;
}
.wave-svg {
  width: 100%;
  // height: 100%;
  bottom: 0;
  left: 0;
  position: absolute;
  opacity: .6;
  // z-index: 5;
}
.ocean {
  // height: 5%;
  width: 100%;
  position:absolute;
  bottom: 0;
  left: 0;
  // background: #015871;
}
</style>
