import {
    GET_REPOSITORIES,
    SET_REPOSITORIES,
} from './namespaced.js';

import { 
    mapGetters, 
    mapActions
} from 'vuex';

import axios from 'axios';

export const Repositories = {

    created() {
        this.fetch_fata();
    },

    computed: {
        ...mapGetters({
            GET_REPOSITORIES,
        })
    },

    methods: {
        ...mapActions({
            SET_REPOSITORIES,
        }),
        fetch_fata() {
            axios.get('https://api.github.com/users/matthewobisnar/repos')
            .then(response => response.data)
            .then(items => {
                this.SET_REPOSITORIES(items);
            })
        }
    }
}