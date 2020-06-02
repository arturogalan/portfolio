
[**NoiseBox**](https://www.noise-box.es/) is an online guitar amp made with Vue and web audio: **⚠️take care with the volume if you use it with headphones⚠️**

Developed in several months as a pet project to merge two passions: Play guitar and Javascript. Webaudio ideas seeing talks and Github code accounts from great developers like [Sam Bellem](https://twitter.com/sambego?lang=es) and [Michel Buffa](https://twitter.com/micbuffa)

I wanted to do this project to learn Vue.js, Vuex, WebAudio and to try to make my first library [Noisefy](https://github.com/arturogalan/noisefy) to handle all the audio stuff. There's still a lot to work to do but the first release is out there. I would like to add more effects and a tuner.

The power of WebAudio is incredible and provides developers a great set of audio nodes that mixed together let us model amp-like sounds.
I tried to make the amp similar to my ENGL Powerball guitar amp:

![ENGLPowerball](statics/images/noise-box-first/englpowerball.jpeg#middle)

At the top of the page you will find the main control panel of the amp, with the controls of volume, gain etc... at the right you have two switches as the original amp, one is to switch on the valves and put the amp in stand by mode and the other one to switch on the amp.

![ENGLPowerball](statics/images/noise-box-first/noise-box1.jpg#middle)

Below this main controls you have some selects to change between distortions and cabinet simulators. The cabinets also have level and wet to be more or less invasive.

![ENGLPowerball](statics/images/noise-box-first/noise-box2.jpg#middle)

Finally I made a set of effect pedals that you can swith on/off to add effects to the final sound.

![ENGLPowerball](statics/images/noise-box-first/noise-box3.jpg#middle)


All the elements have been made with svg and designed as Vue components. If you are interested in Know more about the project don't hesitate to [twitter me](https://twitter.com/turugalan) and I can write more about it!