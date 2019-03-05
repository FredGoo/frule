import Vue from 'vue'
import Vuex from 'vuex'

import Frame from './frame';
import store from './store'

Vue.use(Vuex);

new Vue({
    el: '#container',
    store,
    render: h => h(Frame)
});