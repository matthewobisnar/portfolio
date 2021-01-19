import { resizerMixins } from '../../Store/Resizer/ResizerMixins.js';
import { myBioMixins } from '../../Store/MyBio/MyBioMixins.js';

export default {
    mixins: [resizerMixins, myBioMixins],
    data(){
        return {
            repositories:[
                {
                    id:1,
                    "title_h2":"2014 - Present",
                    "title_p":"Title, Company",
                    "body":"Hello world"
                },
                {
                    id:2,
                    "title_h2":"2014 - Present",
                    "title_p":"Title, Company",
                    "body":"Hello world"
                },
                {
                    id:3,
                    "title_h2":"2014 - Present",
                    "title_p":"Title, Company",
                    "body":"Hello world"
                }
            ]
        }
    }
    
}