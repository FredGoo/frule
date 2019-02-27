import React, {Component, PropTypes} from 'react';

export default class Loading extends Component {
    constructor() {
        super();
        this.state = {content: '数据加载中...'};
    }

    componentDidMount() {
        event.eventEmitter.on(event.SHOW_LOADING, content => {
            const $window = $(window);
            const width = $window.width();
            const height = $window.height();
            if (content) {
                this.setState({content});
            } else {
                this.setState({content: '数据加载中...'});
            }
            $('.loading-cover').css({height: height, width: width}).fadeIn();
        });
        event.eventEmitter.on(event.HIDE_LOADING, () => {
            $('.loading-cover').fadeOut();
        });
    }

    componentWillUnmount() {
        event.eventEmitter.removeAllListeners(event.SHOW_LOADING);
        event.eventEmitter.removeAllListeners(event.HIDE_LOADING);
    }

    render() {
        const $window = $(window);
        const width = $window.width();
        const height = $window.height();
        const show = this.props.show;
        const styleObj = {width: width, height: height, display: show ? 'block' : 'none'};
        const coverTop = (height / 2) - 20;
        const coverLeft = (width / 2) - 20;
        const loadStyle = {marginTop: coverTop, marginLeft: coverLeft, width: '40px', height: '40px'};
        return (
        );
    }
}
