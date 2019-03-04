<template>
    <div>
        <Loading show="true"/>
        <Splitter fr-orientation='vertical' fr-position='20%'>
            <div>
                <div style="border: 1px solid #ddd; height: 35px; background: #f5f5f5; padding: 5px 10px">
                            <span class="dropdown" style="margin: 5px">
                            <a href="#" class="dropdown-toggle" data-toggle="dropdown" title="知识库内容展示方式">
                                <i class="rf rf-display" style="font-size: 12pt"></i>
                                <b class="caret"></b>
                            </a>
                            <ul class="dropdown-menu">
                                <li><a href="#" id="__classify_display" onClick="
                                    componentEvent.eventEmitter.emit(componentEvent.SHOW_LOADING);
                                    setTimeout(function () {
                                    store.dispatch(ACTIONS.loadData(true, window._projectName, window._types));
                                    componentEvent.eventEmitter.emit(componentEvent.HIDE_LOADING);
                                    }, 200);">✔&nbsp;分类展示</a></li>
                                <li><a href="#" id="__no_classify_display" onClick="
                                    componentEvent.eventEmitter.emit(componentEvent.SHOW_LOADING);
                                    setTimeout(function () {
                                    store.dispatch(ACTIONS.loadData(false, window._projectName, window._types));
                                    componentEvent.eventEmitter.emit(componentEvent.HIDE_LOADING);
                                    }, 200);"
                                >&nbsp;&nbsp;&nbsp;&nbsp;集中展示</a></li>
                            </ul>
                            </span>

                    <span class="dropdown" style="margin: 5px">
                            <a href="#" class="dropdown-toggle" data-toggle="dropdown" title="项目过滤">
                                <i class="rf rf-list" style="font-size: 12pt"></i>
                                <b class="caret"></b>
                            </a>
                            <ul class="dropdown-menu" id="__project_filter_menu">
                                <li class="_firstItem">
                                    <a href="#" onClick="
                                       componentEvent.eventEmitter.emit(componentEvent.SHOW_LOADING);
                                       setTimeout(function () {
                                       store.dispatch(ACTIONS.loadData(window._classify));
                                       componentEvent.eventEmitter.emit(componentEvent.HIDE_LOADING);
                                       }, 200);
                                       const menu=$('#__project_filter_menu');
                                       const menuChildren=menu.children('li');
                                       menuChildren.each(function (index, li) {
                                       $(li).find('i').removeClass('rf rf-check');
                                    $(li).find('a').css('margin-left', '22px');
                                    });
                                    $(this).css('margin-left', '0px');
                                    $('#_show_all_projects_i').addClass('rf rf-check');
                                    window._projectName = null;
                                    "><i id="_show_all_projects_i"></i> 显示所有项目
                                    </a>
                                </li>
                            </ul>
                            </span>

                    <span class="dropdown" style="margin: 5px">
                            <a href="#" class="dropdown-toggle" data-toggle="dropdown" title="文件类型过滤">
                                <i class="rf rf-type" style="font-size: 12pt"></i> <b class="caret"></b>
                            </a>
                            <ul class="dropdown-menu">
                                <li><a href="#" onClick="
                                       componentEvent.eventEmitter.emit(componentEvent.SHOW_LOADING);
                                       window._types='all' ;
                                       setTimeout(function () {
                                       store.dispatch(ACTIONS.loadData(window._classify, window._projectName,
                                       window._types));
                                       componentEvent.eventEmitter.emit(componentEvent.HIDE_LOADING);
                                       }, 200);
                                       $('.filter_file').removeClass('rf rf-check');
                                    $(e.target).children('.filter_file').addClass('rf rf-check');
                                    "><i class="filter_file rf rf-check"></i>
                                    <i class="glyphicon glyphicon-th"></i> 显示所有文件</a></li>
                                <li>
                                    <a href="#" onClick="
                                       componentEvent.eventEmitter.emit(componentEvent.SHOW_LOADING);
                                       window._types='lib' ;
                                       setTimeout(function () {
                                       store.dispatch(ACTIONS.loadData(window._classify, window._projectName,
                                       window._types));
                                       componentEvent.eventEmitter.emit(componentEvent.HIDE_LOADING);
                                       }, 200);
                                       $('.filter_file').removeClass('rf rf-check');
                                    $(e.target).children('.filter_file').addClass('rf rf-check');
                                    "><i class="filter_file"></i> <i class="rf rf-library"></i> 库文件</a>
                                </li>
                                <li>
                                    <a href="#" onClick="
                                       componentEvent.eventEmitter.emit(componentEvent.SHOW_LOADING);
                                       window._types='rule' ;
                                       setTimeout(function () {
                                       store.dispatch(ACTIONS.loadData(window._classify, window._projectName,
                                       window._types));
                                       componentEvent.eventEmitter.emit(componentEvent.HIDE_LOADING);
                                       }, 200);
                                       $('.filter_file').removeClass('rf rf-check');
                                    $(e.target).children('.filter_file').addClass('rf rf-check');
                                    "><i class="filter_file"></i> <i class="rf rf-rule"></i> 决策集</a>
                                </li>
                                <li>
                                    <a href="#" onClick="
                                       componentEvent.eventEmitter.emit(componentEvent.SHOW_LOADING);
                                       window._types='table' ;
                                       setTimeout(function () {
                                       store.dispatch(ACTIONS.loadData(window._classify, window._projectName,
                                       window._types));
                                       componentEvent.eventEmitter.emit(componentEvent.HIDE_LOADING);
                                       }, 200);
                                       $('.filter_file').removeClass('rf rf-check');
                                    $(e.target).children('.filter_file').addClass('rf rf-check');
                                    "><i class="filter_file"></i> <i class="rf rf-table"></i> 决策表</a>
                                </li>
                                <li>
                                    <a href="#" onClick="
                                       componentEvent.eventEmitter.emit(componentEvent.SHOW_LOADING);
                                       window._types='tree' ;
                                       setTimeout(function () {
                                       store.dispatch(ACTIONS.loadData(window._classify, window._projectName,
                                       window._types));
                                       componentEvent.eventEmitter.emit(componentEvent.HIDE_LOADING);
                                       }, 200);
                                       $('.filter_file').removeClass('rf rf-check');
                                    $(e.target).children('.filter_file').addClass('rf rf-check');
                                    "><i class="filter_file"></i> <i class="rf rf-tree"></i> 决策树</a>
                                </li>
                                <li>
                                    <a href="#" onClick="
                                       componentEvent.eventEmitter.emit(componentEvent.SHOW_LOADING);
                                       window._types='flow' ;
                                       setTimeout(function () {
                                       store.dispatch(ACTIONS.loadData(window._classify, window._projectName,
                                       window._types));
                                       componentEvent.eventEmitter.emit(componentEvent.HIDE_LOADING);
                                       }, 200);
                                       $('.filter_file').removeClass('rf rf-check');
                                    $(e.target).children('.filter_file').addClass('rf rf-check');
                                    "><i class="filter_file"></i> <i class="rf rf-flow"></i> 决策流</a>
                                </li>
                            </ul>
                            </span>

                    <span class="dropdown" style="margin: 5px">
                            <a href="#" class="dropdown-toggle" data-toggle="dropdown" title="权限配置">
                                <i class="rf rf-authority" style="font-size: 12pt"/>
                                <b class="caret"/></a>
                            <ul class="dropdown-menu" id="__authority_config_menu">
                                <li>
                                    <a href="#" onClick="
                                       const url=window._server + '/permission';
                                    componentEvent.eventEmitter.emit(componentEvent.TREE_NODE_CLICK, {
                                    id: 'security_config_',
                                    name: '资源权限配置',
                                    fullPath: 'security_config_',
                                    path: url
                                    });
                                    "><i/> 资源权限配置
                                    </a>
                                </li>
                            </ul>
                            </span>
                </div>
                <div class='tree' style="margin-left: 10px">
                    <div style="margin: 10px 0 5px 2px">
                        <input type="text" class="form-control fileSearchText" placeholder="输入要查询的文件名..."
                               style="display: inline-block; width: 170px"/>
                        <a href="#" onClick={searchFile} style="margin: 6px; font-size: 16px">
                            <i class="glyphicon glyphicon-search"></i>
                        </a>
                    </div>
                    <Tree draggable="true"/>
                </div>
            </div>
            <div>
                <ComponentContainer/>
                <FrameTab welcomePage="window._welcomePage"/>
            </div>
        </Splitter>
    </div>
</template>

<script>
    import '../css/iconfont.css';
    import '../../node_modules/bootstrap/dist/css/bootstrap.css';
    import '../../node_modules/codemirror/lib/codemirror.css';
    import '../../node_modules/bootstrapvalidator/dist/css/bootstrapValidator.css';

    import '../bootstrap-contextmenu.js';
    import * as ACTIONS from './action.js';
    import * as componentEvent from '../components/componentEvent.js';
    import * as event from './event.js';
    import Loading from '../components/loading/component/Loading.vue';
    import Splitter from '../components/splitter/component/Splitter.vue';
    import Tree from '../components/tree/component/Tree.vue';

    export default {
        mounted: function () {
            window._types = null;
            window._projectName = null;
            window.componentEvent = componentEvent;
            // const documentHeight = $(document).height() + 'px';

            // 加载菜单
            this.$store.dispatch('loadData').catch(() => {
                console.log('load data error');
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
            event.eventEmitter.on(event.EXPAND_TREE_NODE, (nodeData) => {
                const $span = $('#node-' + nodeData.id).parent("li");
                let $liChildren = $span.parent('li.parent_li').find(' > ul > li');
                $liChildren.show('fast');
                $span.children('i:first').addClass('rf-minus').removeClass('rf-plus');
            });
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
        },
        components: {
            Loading,
            Splitter,
            Tree
        }
    }
</script>