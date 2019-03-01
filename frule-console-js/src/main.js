import Vue from 'vue'
import Vuex from 'vuex'

import Frame from './frame';

Vue.use(Vuex);

new Vue({
    el: '#container',
    render: h => h(Frame)
});