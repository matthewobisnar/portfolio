import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios'
import VueAxios from 'vue-axios'

import  ResizerModule  from './Resizer/ResizeModule.js';
import MyBioModule from './MyBio/MyBioModule.js';
import Repositories from './Repositories/RespositoryModule.js';


Vue.use(Vuex);
Vue.use(VueAxios, axios)

export default new Vuex.Store({
    modules: {
        MyBioModule,
        ResizerModule,
        Repositories
    }
})