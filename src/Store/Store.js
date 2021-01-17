import Vue from 'vue';
import Vuex from 'vuex';
import  ResizerModule  from './Resizer/ResizeModule.js';
import MyBioModule from './MyBio/MyBioModule.js';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        MyBioModule,
        ResizerModule
    }
})