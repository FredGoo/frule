import React from 'react';
import ReactDOM from 'react-dom';
import {applyMiddleware, createStore} from 'redux';
import {Provider} from 'react-redux';
import * as ACTIONS from './action.js';
import reducer from './reducer.js';
import thunk from 'redux-thunk';
import Tree from '../components/tree/component/Tree.jsx';
import FrameTab from '../components/frametab/component/FrameTab.jsx';

$(document).ready(function () {
    // 创建store
    const store = createStore(reducer, applyMiddleware(thunk));
    // 执行异步任务
    store.dispatch(ACTIONS.loadData());

    const documentHeight = $(document).height() + 'px';
    event.eventEmitter.on(event.CHANGE_CLASSIFY, classify => {
        window._classify = classify;
        if (classify) {
            $('#__classify_display').html('<i class="rf rf-check"></i> 分类展示');
            $('#__no_classify_display').html('&nbsp;&nbsp;&nbsp;&nbsp;集中展示');
        } else {
            $('#__classify_display').html('&nbsp;&nbsp;&nbsp;&nbsp;分类展示');
            $('#__no_classify_display').html('<i class="rf rf-check"></i> 集中展示');
        }
    });

    function searchFile() {
        const searchFileName = $('.fileSearchText').val();
        window.searchFileName = searchFileName;
        store.dispatch(ACTIONS.loadData(window._classify, window._projectName, window._types, window.searchFileName));
    }

});

