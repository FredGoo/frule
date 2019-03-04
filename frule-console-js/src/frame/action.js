import Styles from '../Styles.js';
import * as event from './event.js';
import * as componentEvent from '../components/componentEvent.js';

export const ADD = 'add';
export const DEL = 'del';
export const UPDATE = 'upload';
export const LOAD_END = 'load_end';
export const FILE_RENAME = 'file_rename';
export const CREATE_NEW_PROJECT = 'create_new_project';
export const CREATE_NEW_FILE = 'create_new_file';

export function createNewFile(newFileName, fileType, parentNodeData) {
    return function (dispatch) {
        const url = window._server + '/frame/createFile';
        const fileName = newFileName + "." + fileType;
        const path = parentNodeData.fullPath + "/" + fileName;
        $.ajax({
            url,
            data: {path: encodeURI(parentNodeData.fullPath + "/" + fileName), type: fileType},
            type: 'POST',
            success: function (newFileInfo) {
                const newFileData = {
                    id: newFileInfo.id,
                    name: fileName,
                    type: newFileInfo.type,
                    fullPath: path,
                    contextMenu: buildFileContextMenu()
                };
                buildData(newFileData, 1);
                dispatch({
                    parentNodeData,
                    newFileData,
                    type: CREATE_NEW_FILE
                });
                const targetURL = window._server + newFileData.editorPath + "?file=" + newFileData.fullPath;
                componentEvent.eventEmitter.emit(componentEvent.TREE_NODE_CLICK, {
                    id: newFileData.id,
                    name: newFileData.name,
                    path: targetURL,
                    fullPath: path,
                    active: true
                });
                event.eventEmitter.emit(event.EXPAND_TREE_NODE, parentNodeData);
                event.eventEmitter.emit(event.CLOSE_CREATE_FILE_DIALOG);
            },
            error: function (response) {
                if (response.status === 401) {
                    bootbox.alert("权限不足，不能进行此操作.");
                } else {
                    if (response && response.responseText) {
                        bootbox.alert("<span style='color: red'>服务端错误：" + response.responseText + "</span>");
                    } else {
                        bootbox.alert("<span style='color: red'>服务端出错</span>");
                    }
                }
            }
        });
    }
}

export function rename(path, newPath) {
    return function (dispatch) {
        const url = window._server + '/frame/fileRename';
        $.ajax({
            url,
            type: 'POST',
            data: {
                path: path,
                newPath: newPath,
                classify: window._classify,
                projectName: window._projectName,
                types: window._types
            },
            success: function (data) {
                const rootFile = data.repo.rootFile;
                buildData(rootFile, 1);
                dispatch({data: rootFile, type: LOAD_END});
                event.eventEmitter.emit(event.HIDE_RENAME_DIALOG);
                componentEvent.eventEmitter.emit(componentEvent.HIDE_LOADING);
            },
            error: function (response) {
                if (response.status === 401) {
                    bootbox.alert("权限不足，不能进行此操作.");
                } else {
                    if (response && response.responseText) {
                        bootbox.alert("<span style='color: red'>服务端错误：" + response.responseText + "</span>");
                    } else {
                        bootbox.alert("<span style='color: red'>服务端出错</span>");
                    }
                }
            }
        });
    }
}

export function createNewProject(newProjectName, parentNodeData) {
    return function (dispatch) {
        const url = window._server + '/frame/createProject';
        $.ajax({
            url,
            type: 'POST',
            data: {newProjectName: newProjectName},
            success: function (newProjectData) {
                buildData(newProjectData, 1);
                dispatch({type: CREATE_NEW_PROJECT, newProjectData, parentNodeData});
                event.eventEmitter.emit(event.CLOSE_NEW_PROJECT_DIALOG);
                componentEvent.eventEmitter.emit(componentEvent.HIDE_LOADING);
            },
            error: function (response) {
                if (response.status === 401) {
                    bootbox.alert("权限不足，不能进行此操作.");
                } else {
                    if (response && response.responseText) {
                        bootbox.alert("<span style='color: red'>服务端错误：" + response.responseText + "</span>");
                    } else {
                        bootbox.alert("<span style='color: red'>服务端出错</span>");
                    }
                }
            }
        });
    };
}

export function createNewFolder(newFolderName, parentNodeData) {
    const fullFolderName = parentNodeData.fullPath + '/' + newFolderName;
    return function (dispatch) {
        const url = window._server + '/frame/createFolder';
        $.ajax({
            url,
            type: 'POST',
            data: {
                fullFolderName: fullFolderName,
                classify: window._classify,
                projectName: window._projectName,
                types: window._types
            },
            success: function (data) {
                const rootFile = data.repo.rootFile;
                buildData(rootFile, 1);
                dispatch({data: rootFile, type: LOAD_END});
                event.eventEmitter.emit(event.CLOSE_CREATE_FOLDER_DIALOG);
                componentEvent.eventEmitter.emit(componentEvent.HIDE_LOADING);
            },
            error: function (response) {
                if (response.status === 401) {
                    bootbox.alert("权限不足，不能进行此操作.");
                } else {
                    if (response && response.responseText) {
                        bootbox.alert("<span style='color: red'>服务端错误：" + response.responseText + "</span>");
                    } else {
                        bootbox.alert("<span style='color: red'>服务端出错</span>");
                    }
                }
            }
        });
    };
}

export function fileRename(itemData, newName) {
    return function (dispatch) {
        var fullPath = itemData.fullPath;
        var namePos = fullPath.lastIndexOf(itemData.name);
        var basePath = fullPath.substring(0, namePos);
        var newFullPath = basePath + newName;
        var url = window._server + "/frame/fileRename";
        $.ajax({
            url,
            type: 'POST',
            data: {
                path: fullPath,
                newPath: newFullPath,
                classify: window._classify,
                projectName: window._projectName,
                types: window._types
            },
            success: function (data) {
                const pos = newName.indexOf('.');
                if (pos !== -1) {
                    itemData.fullPath = newFullPath;
                    itemData.name = newName;
                    dispatch({data: itemData, type: FILE_RENAME});
                } else {
                    const rootFile = data.repo.rootFile;
                    buildData(rootFile, 1);
                    dispatch({data: rootFile, type: LOAD_END});
                }
                event.eventEmitter.emit(event.CLOSE_UPDATE_PROJECT_DIALOG);
                componentEvent.eventEmitter.emit(componentEvent.HIDE_LOADING);
            },
            error: function (response) {
                componentEvent.eventEmitter.emit(componentEvent.HIDE_LOADING);
                if (response.status === 401) {
                    bootbox.alert("权限不足，不能进行此操作.");
                } else {
                    if (response && response.responseText) {
                        bootbox.alert("<span style='color: red'>服务端错误：" + response.responseText + "</span>");
                    } else {
                        bootbox.alert("<span style='color: red'>服务端出错</span>");
                    }
                }
            }
        });
    }
}

function moveFile(path, newPath, dispatch) {
    var url = window._server + "/frame/fileRename";
    $.ajax({
        url,
        type: 'POST',
        data: {path, newPath, classify: window._classify, projectName: window._projectName, types: window._types},
        success: function (data) {
            const rootFile = data.repo.rootFile;
            buildData(rootFile, 1);
            dispatch({data: rootFile, type: LOAD_END});
            event.eventEmitter.emit(event.CLOSE_UPDATE_PROJECT_DIALOG);
            componentEvent.eventEmitter.emit(componentEvent.HIDE_LOADING);
        },
        error: function (response) {
            componentEvent.eventEmitter.emit(componentEvent.HIDE_LOADING);
            if (response.status === 401) {
                bootbox.alert("权限不足，不能进行此操作.");
            } else {
                if (response && response.responseText) {
                    bootbox.alert("<span style='color: red'>服务端错误：" + response.responseText + "</span>");
                } else {
                    bootbox.alert("<span style='color: red'>服务端出错</span>");
                }
            }
        }
    });
}

export function add(data) {
    return {data, type: ADD};
}

export function del(index) {
    return {index, type: DEL};
}

export function update(index, data) {
    return {index, data, type: UPDATE};
}

export function loadData() {
}

export function buildType(fileType) {
    let pos = fileType.indexOf(':');
    if (pos > -1) {
        fileType = fileType.substring(0, pos);
    }
    let type;
    switch (fileType) {
        case 'vl.xml':
            type = "变量库";
            break;
        case 'cl.xml':
            type = '常量库';
            break;
        case 'pl.xml':
            type = '参数库';
            break;
        case 'al.xml':
            type = '动作库';
            break;
        case 'rs.xml':
            type = '向导式决策集';
            break;
        case 'ul':
            type = '脚本式决策集';
            break;
        case 'dt.xml':
            type = '决策表';
            break;
        case 'dts.xml':
            type = '脚本式决策表';
            break;
        case 'rl.xml':
            type = '决策流';
            break;
        case 'dtree.xml':
            type = '决策树';
            break;
        case "sc":
            type = "评分卡";
            break;
        case "知识包":
            type = 'package';
            break;
    }
    if (!type) {
        const info = "Unknow file type :" + fileType;
        alert(info);
        throw info;
    }
    return type;
}

export function lockFile(file, dispatch) {
    componentEvent.eventEmitter.emit(componentEvent.SHOW_LOADING);
    var url = window._server + "/frame/lockFile";
    $.ajax({
        url,
        type: "POST",
        data: {file},
        success: function (data) {
            const rootFile = data.repo.rootFile;
            buildData(rootFile, 1);
            dispatch({data: rootFile, type: LOAD_END});
            componentEvent.eventEmitter.emit(componentEvent.HIDE_LOADING);
            bootbox.alert('锁定成功!');
        },
        error: function (response) {
            componentEvent.eventEmitter.emit(componentEvent.HIDE_LOADING);
            if (response.status === 401) {
                bootbox.alert("权限不足，不能进行此操作.");
            } else {
                if (response && response.responseText) {
                    bootbox.alert("<span style='color: red'>服务端错误：" + response.responseText + "</span>");
                } else {
                    bootbox.alert("<span style='color: red'>服务端出错</span>");
                }
            }
        }
    });
}

export function unlockFile(file, dispatch) {
    componentEvent.eventEmitter.emit(componentEvent.SHOW_LOADING);
    var url = window._server + "/frame/unlockFile";
    $.ajax({
        url,
        type: "POST",
        data: {file},
        success: function (data) {
            const rootFile = data.repo.rootFile;
            buildData(rootFile, 1);
            dispatch({data: rootFile, type: LOAD_END});
            componentEvent.eventEmitter.emit(componentEvent.HIDE_LOADING);
            bootbox.alert('解锁成功!');
        },
        error: function (response) {
            componentEvent.eventEmitter.emit(componentEvent.HIDE_LOADING);
            if (response.status === 401) {
                bootbox.alert("权限不足，不能进行此操作.");
            } else {
                if (response && response.responseText) {
                    bootbox.alert("<span style='color: red'>服务端错误：" + response.responseText + "</span>");
                } else {
                    bootbox.alert("<span style='color: red'>服务端出错</span>");
                }
            }
        }
    });
}

export function saveFileSource(file, content) {
    content = encodeURIComponent(content);
    var url = window._server + "/common/saveFile";
    $.ajax({
        url,
        type: 'POST',
        data: {file, content},
        success: function () {
            bootbox.alert('保存成功!');
        },
        error: function (response) {
            if (response.status === 401) {
                bootbox.alert("权限不足，不能进行此操作.");
            } else {
                if (response && response.responseText) {
                    bootbox.alert("<span style='color: red'>服务端错误：" + response.responseText + "</span>");
                } else {
                    bootbox.alert("<span style='color: red'>服务端出错</span>");
                }
            }
        }
    });
}

export function seeFileSource(data) {
    var url = window._server + "/frame/fileSource";
    $.ajax({
        url,
        type: 'POST',
        data: {path: data.fullPath},
        success: function (result) {
            event.eventEmitter.emit(event.OPEN_SOURCE_DIALOG, data.fullPath, result.content);
        },
        error: function (response) {
            if (response.status === 401) {
                bootbox.alert("权限不足，不能进行此操作.");
            } else {
                if (response && response.responseText) {
                    bootbox.alert("<span style='color: red'>服务端错误：" + response.responseText + "</span>");
                } else {
                    bootbox.alert("<span style='color: red'>服务端出错</span>");
                }
            }
        }
    });
}

function seeFileVersions(data) {
    var url = window._server + "/frame/fileVersions";
    $.ajax({
        url,
        type: 'POST',
        data: {path: data.fullPath},
        success: function (list) {
            event.eventEmitter.emit(event.OPEN_FILE_VERSION_DIALOG, {list, data});
        },
        error: function (response) {
            if (response.status === 401) {
                bootbox.alert("权限不足，不能进行此操作.");
            } else {
                if (response && response.responseText) {
                    bootbox.alert("<span style='color: red'>服务端错误：" + response.responseText + "</span>");
                } else {
                    bootbox.alert("<span style='color: red'>服务端出错</span>");
                }
            }
        }
    });
}

function fileDelete(item, dispatch, isFolder) {
    componentEvent.eventEmitter.emit(componentEvent.SHOW_LOADING);
    setTimeout(function () {
        var url = window._server + "/frame/deleteFile";
        $.ajax({
            url,
            type: 'POST',
            data: {
                isFolder,
                path: item.fullPath,
                classify: window._classify,
                projectName: window._projectName,
                types: window._types
            },
            success: function (data) {
                if (!isFolder) {
                    dispatch({data: item, type: DEL});
                } else {
                    const rootFile = data.repo.rootFile;
                    buildData(rootFile, 1);
                    dispatch({data: rootFile, type: LOAD_END});
                }
                componentEvent.eventEmitter.emit(componentEvent.HIDE_LOADING);
            },
            error: function (response) {
                componentEvent.eventEmitter.emit(componentEvent.HIDE_LOADING);
                if (response.status === 401) {
                    bootbox.alert("权限不足，不能进行此操作.");
                } else {
                    if (response && response.responseText) {
                        bootbox.alert("<span style='color: red'>服务端错误：" + response.responseText + "</span>");
                    } else {
                        bootbox.alert("<span style='color: red'>服务端出错</span>");
                    }
                }
            }
        });
    }, 150);
}
