<template>
    <div class="app__particlejs">
        <div id="prtl" class="prtl"></div>
        <div id="prtl2" class="prtl2"></div>
    </div>
</template>
<script>
import 'particles.js';
import { particlesConfig } from './particlesjs-config.js';

var methods = {
    initialParticles () {
          window.particlesJS("prtl", particlesConfig);
          window.particlesJS("prtl2", particlesConfig);
    },
}
export default {
    mounted () {
         this.initialParticles();
    },
    methods,
}
</script>
<style scoped>
    .prtl, .prtl2 {
        position: absolute;
        overflow: hidden;
    }
    .prtl2 {
        right:0;
        bottom:0
    }
</style>