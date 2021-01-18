import { resizerMixins } from '../../Store/Resizer/ResizerMixins.js';
import { myBioMixins } from '../../Store/MyBio/MyBioMixins.js';

export default {
    mixins: [resizerMixins, myBioMixins],
    data(){
        return {
            hello: "ss"
        }
    }
    
}