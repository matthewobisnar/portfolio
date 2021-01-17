import { resizerMixins } from '../../Store/Resizer/ResizerMixins.js';
import { myBioMixins } from '../../Store/MyBio/MyBioMixins.js';
import { Fragment } from 'vue-fragment';

export default {
     mixins: [resizerMixins, myBioMixins],
     components: { Fragment },
}