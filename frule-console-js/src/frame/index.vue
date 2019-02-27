<template>
    <div>
        <Loading show={true} />
            <Provider store={store}>
                <Splitter orientation='vertical' position='20%'>
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
                                <i class="rf rf-list" style="fontSize: '12pt'"></i>
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
                                <i class="rf rf-type" style="fontSize: '12pt'"></i> <b class="caret"></b>
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
                            <Tree draggable={true} />
                        </div>
                    </div>
                    <div>
                        <ComponentContainer/>
                        <FrameTab welcomePage={window._welcomePage} />
                    </div>
                </Splitter>
            </Provider>
    </div>
</template>

<script>
    import Loading from '../components/loading/component/Loading.vue';

    export default {
        components: {
            Loading
        }
    }
</script>