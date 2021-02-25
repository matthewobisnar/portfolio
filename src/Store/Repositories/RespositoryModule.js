import {
    GET_REPOSITORIES,
    SET_REPOSITORIES,
} from './namespaced.js';

const state = {
    repositories: [],
}

const getters = {
    [GET_REPOSITORIES] (state) {
        return state.repositories;
    }
}

const mutations = {
    [SET_REPOSITORIES] (state, payload) {
        state.repositories = payload;
    }
}

const actions = {
   async [SET_REPOSITORIES] ({commit}, payload) {
        await commit(SET_REPOSITORIES, payload);
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}