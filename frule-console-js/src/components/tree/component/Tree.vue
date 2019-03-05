<template>
    <ul style='padding-left: 20px'>
        <TreeItem data={data} dispatch={dispatch} expandLevel={this.props.expandLevel}
                  draggable={draggable} />
    </ul>
</template>
<script>
    import '../css/tree.css';
    import '../../../css/iconfont.css';

    export default {
        name: 'Tree',
        props: ['draggable']
    }
</script>