/**
 * Created by Jacky.gao on 2016/5/24.
 */
import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';

export default class Splitter extends Component {
    _sanitizeSplitterPositionValue(position) {
        let newPosition = Math.min(position, window.innerWidth - this.minWidth);
        newPosition = Math.max(newPosition, this.minWidth);
        return newPosition;
    }

    componentDidMount() {
        const $domNode = $(ReactDOM.findDOMNode(this));
        const $splitter = $domNode.split(this.props);
        $(window).resize(function () {
            var newPosition = this._sanitizeSplitterPositionValue($splitter.position());
            if (newPosition !== $splitter.position()) {
                $splitter.position(newPosition);
            }
            let height = $(window).height();
            $domNode.css({height: height});
        }.bind(this));
        let height = $(window).height();
        $domNode.css({height: height});
    }
}