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

const state = {
    aboutme: '',
    picture: '',
    socialLinks: [],
    techstack: [],
    myprojects: [],
    contents: [],
}

const getters = {
    [GET_ABOUTME] (state) {
        return state.aboutme;
    },
    [GET_PICTURE] (state) {
        return state.picture;
    },
    [GET_SOCIALS] (state) {
        return state.socialLinks;
    },
    [GET_TECH_STACK] (state) {
        return state.techstack
    },
    [GET_MY_PROJECTS] (state) {
        return state.myprojects
    },
    [GET_CONTENTS] (state) {
        return state.contents
    }
}


const mutations = {
    
    // Set is to mutate initial value;
    
    [SET_ABOUTME] (state, payload) {
        state.aboutme = payload;
    },
    [SET_PICTURE] (state, payload) {
        state.picture = payload
    },
    [SET_SOCIALS] (state, payload) {
        state.socialLinks = payload
    },
    [SET_TECH_STACK] (state, payload) {
        state.techstack  = payload
    },
    [SET_MY_PROJECTS] (state, payload) {
        state.myprojects = payload
    },
    [SET_CONTENTS] (state, payload) {
        state.contents = payload
    }

}

const actions = {

    // SET is for initial action call.
    
    async [SET_ABOUTME] ({ commit }, payload) {
        await commit(SET_ABOUTME, payload);
    },
    async [SET_PICTURE] ({ commit }, payload) {
        await commit(SET_PICTURE, payload);
    },
    async [SET_SOCIALS] ({commit}, payload) {
        await commit(SET_SOCIALS, payload);
    },
    async [SET_TECH_STACK] ({commit}, payload) {
        await commit(SET_TECH_STACK, payload);
    },
    async [SET_MY_PROJECTS] ({commit}, payload) {
        await commit(SET_MY_PROJECTS, payload);
    },
    async [SET_CONTENTS] ({commit}, payload) {
        await commit(SET_CONTENTS, payload)
    }
    
}

export default {
    state,
    getters,
    mutations,
    actions,
}