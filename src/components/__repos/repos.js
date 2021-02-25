import { resizerMixins } from '../../Store/Resizer/ResizerMixins.js';
import { myBioMixins } from '../../Store/MyBio/MyBioMixins.js';
import { Repositories } from '../../Store/Repositories/RepositoryMixins.js';

export default {
    mixins: [resizerMixins, myBioMixins, Repositories],
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