import AppTyped from '../__shared/Typed/Typed.vue';
import Navigation from '../__shared/Navigation/Navigation.vue';
import Particles from '../__shared/Particles/Particles.vue';
import ArrowNavigation from '../__shared/Navigation/ArrowNavigation.vue';
import Lightbulb from '../__shared/Lightbulb/Lightbulb.vue';
import { resizerMixins } from '../../Store/Resizer/ResizerMixins.js';

var components = {
    appTyped: AppTyped,
    appNavigation: Navigation,
    appParticles: Particles,
    appArrowNavigation: ArrowNavigation,
    appLightbulb: Lightbulb
}

export default {
    mixins: [resizerMixins],
    components,
}