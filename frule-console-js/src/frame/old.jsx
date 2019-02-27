/**
 * @author Jacky.gao
 * @author fred
 * 2016/5/23
 */
import '../css/iconfont.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../../node_modules/codemirror/lib/codemirror.css';
import '../../node_modules/bootstrapvalidator/dist/css/bootstrapValidator.css';
import '../bootstrap-contextmenu.js';

import React from 'react';
import ReactDOM from 'react-dom';
import {applyMiddleware, createStore} from 'redux';
import {Provider} from 'react-redux';
import * as ACTIONS from './action.js';
import reducer from './reducer.js';
import thunk from 'redux-thunk';
import Tree from '../components/tree/component/Tree.jsx';
import Splitter from '../components/splitter/component/Splitter.jsx';
import FrameTab from '../components/frametab/component/FrameTab.jsx';
import ComponentContainer from './components/ComponentContainer.jsx';
import * as event from './event.js';
import * as componentEvent from '../components/componentEvent.js';

$(document).ready(function () {
    window._types = null, window._projectName = null, window.componentEvent = componentEvent;
    const store = createStore(reducer, applyMiddleware(thunk));
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
    event.eventEmitter.on(event.PROJECT_LIST_CHANGE, projectNames => {
        const menu = $('#__project_filter_menu');
        const menuChildren = menu.children('li');
        menuChildren.each(function (index, li) {
            const $li = $(li);
            if (!$li.hasClass('_firstItem')) {
                $li.remove();
            } else {
                $li.find('a').css("margin-left", '0px');
            }
        });
        $('#_show_all_projects_i').addClass('rf rf-check');
        for (let name of projectNames) {
            const newLi = $(`<li class="p_${name}"></li>`),
                link = $(`<a href="#" style="margin-left: 22px"><i></i> ${name}</a>`);
            newLi.append(link);
            menu.append(newLi);

            link.click(function () {
                window._projectName = name;
                componentEvent.eventEmitter.emit(componentEvent.SHOW_LOADING);
                setTimeout(function () {
                    store.dispatch(ACTIONS.loadData(window._classify, window._projectName, window._types, window.searchFileName));
                    event.eventEmitter.emit(event.PROJECT_FILTER_CHANGE, name);
                    componentEvent.eventEmitter.emit(componentEvent.HIDE_LOADING);
                }, 200);
            });
        }
    });
    event.eventEmitter.on(event.PROJECT_FILTER_CHANGE, name => {
        const menu = $('#__project_filter_menu');
        const menuChildren = menu.children('li');
        menuChildren.each(function (index, li) {
            $(li).find('i').removeClass('rf rf-check');
            $(li).find('a').css('margin-left', '22px');
        });
        const li = menu.find(`.p_${name}`);
        li.find('a').css('margin-left', '0px');
        li.find('i').addClass('rf rf-check');
    });

    function searchFile() {
        const searchFileName = $('.fileSearchText').val();
        window.searchFileName = searchFileName;
        store.dispatch(ACTIONS.loadData(window._classify, window._projectName, window._types, window.searchFileName));
    }

    event.eventEmitter.on(event.EXPAND_TREE_NODE, (nodeData) => {
        const $span = $('#node-' + nodeData.id).parent("li");
        let $liChildren = $span.parent('li.parent_li').find(' > ul > li');
        $liChildren.show('fast');
        $span.children('i:first').addClass('rf-minus').removeClass('rf-plus');
    })
});

