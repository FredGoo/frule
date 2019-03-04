import React from 'react';
import ReactDOM from 'react-dom';
import {applyMiddleware, createStore} from 'redux';
import {Provider} from 'react-redux';
import * as ACTIONS from './action.js';
import Tree from '../components/tree/component/Tree.jsx';
import FrameTab from '../components/frametab/component/FrameTab.jsx';

$(document).ready(function () {
    function searchFile() {
        const searchFileName = $('.fileSearchText').val();
        window.searchFileName = searchFileName;
        store.dispatch(ACTIONS.loadData(window._classify, window._projectName, window._types, window.searchFileName));
    }

});

