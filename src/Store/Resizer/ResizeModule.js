import { 
    SET_DIMENSIONS, 
    GET_DIMENTSIONS,
    GET_LAPTOP_DIMENSIONS,
    GET_TABLET_DIMENSIONS,
    GET_MOBILE_DIMENSIONS,
    SET_SCROLL_HEIGHT,
    GET_SCROLL_HEIGHT,
 } from './namespaced.js';

const state = {
    width: window.innerWidth,
    height: window.innerHeight,
    laptop: 1120,
    tablet: 995,
    mobile: 500,
    scrollHeight: 0,
    scrollBottom: false
}

const getters = {
    [GET_DIMENTSIONS] (state) {
        return {
            width: state.width,
            height: state.height
        };
    },

    [GET_LAPTOP_DIMENSIONS] (state) {
        return state.laptop
    },
    [GET_TABLET_DIMENSIONS] (state) {
        return state.tablet
    },
    [GET_MOBILE_DIMENSIONS] (state) {
        return state.mobile
    },
    [GET_SCROLL_HEIGHT] (state) {
        return {
            scrollHeight: state.scrollHeight,
            isBottom: state.scrollBottom
        }
    }
}

const mutations = {
    [SET_DIMENSIONS] (state, { width, height }) {
        state.width = width;
        state.height = height;
    },
    [SET_SCROLL_HEIGHT] ( state, { height, bottom }) {
        state.scrollHeight = height
        state.scrollBottom = bottom
    },
}

const actions = {
    async [SET_DIMENSIONS] ({commit}, payload) {
       await commit(SET_DIMENSIONS, payload)
    },
    async [SET_SCROLL_HEIGHT] ({ commit } , payload) {
        await commit(SET_SCROLL_HEIGHT, payload)
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}