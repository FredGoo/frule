<template>
    <div>
        <slot></slot>
    </div>
</template>

<script>
    import '../css/jquery.splitter.css';
    import './jquery-splitter.js';

    export default {
        name: 'Splitter',
        props: [
            'frOrientation',
            'frPosition'
        ],
        mounted: function () {
            const $domNode = $(this.$el);
            const $splitter = $domNode.split({
                orientation: this.frOrientation,
                position: this.frPosition
            });

            $(window).resize(function () {
                const newPosition = this._sanitizeSplitterPositionValue($splitter.position());
                if (newPosition !== $splitter.position()) {
                    $splitter.position(newPosition);
                }
                let height = $(window).height();
                $domNode.css({height: height});
            }.bind(this));

            let height = $(window).height();
            $domNode.css({height: height});
        },
        methods: {
            _sanitizeSplitterPositionValue(position) {
                let newPosition = Math.min(position, window.innerWidth - this.minWidth);
                newPosition = Math.max(newPosition, this.minWidth);
                return newPosition;
            }
        }
    }
</script>