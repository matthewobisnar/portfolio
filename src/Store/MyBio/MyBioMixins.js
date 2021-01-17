import { SOCIAL, ABOUTME, PICTURE } from '../../data/data.aboutme.js';
import { TECHSTACK } from '../../data/data.techstack.js';
import { PROJECTS } from '../../data/data.myproject.js';
import {CONTENTS} from '../../data/data.contents.js';

import { mapActions, mapGetters } from 'vuex';
import {
    SET_ABOUTME,
    SET_PICTURE,
    SET_SOCIALS,
    SET_TECH_STACK,
    SET_MY_PROJECTS,
    SET_CONTENTS,

    GET_ABOUTME,
    GET_PICTURE,
    GET_SOCIALS,
    GET_TECH_STACK,
    GET_MY_PROJECTS,
    GET_CONTENTS
} from './namespaced.js';

export const myBioMixins = {
    created() {
        this.SET_ABOUTME(ABOUTME);
        this.SET_PICTURE(PICTURE);
        this.SET_SOCIALS(SOCIAL);
        this.SET_TECH_STACK(TECHSTACK);
        this.SET_MY_PROJECTS(PROJECTS);
        this.SET_CONTENTS(CONTENTS);
    },
    computed: {
        ...mapGetters({
            GET_ABOUTME,
            GET_PICTURE,
            GET_SOCIALS,
            GET_TECH_STACK,
            GET_MY_PROJECTS,
            GET_CONTENTS
        })
    },
    methods: {
        ...mapActions({
            SET_ABOUTME,
            SET_PICTURE,
            SET_SOCIALS,
            SET_TECH_STACK,
            SET_MY_PROJECTS,
            SET_CONTENTS
        })
    },
}