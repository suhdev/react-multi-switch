import * as React from 'react';
import { SwitchItem } from './SwitchItem';
export class MultiSwitch extends React.Component {
    constructor(props) {
        super(props);
        this.onItemClick = this.onItemClick.bind(this);
        this.state = {
            selIndex: props.selIndex
        };
    }
    componentWillReceiveProps(nextProps) {
        this.setState({
            selIndex: nextProps.selIndex
        });
    }
    onItemClick(index, key) {
        this.setState({
            selIndex: index
        }, () => {
            this.props.onChange(index, key);
        });
    }
    shouldComponentUpdate(props, state) {
        return props.className !== this.props.className ||
            props.selIndex !== this.props.selIndex ||
            props.states !== this.props.states ||
            state.selIndex !== this.state.selIndex;
    }
    render() {
        let props = this.props, state = this.state, itemWidth = props.itemWidth, knobLeft = state.selIndex * (props.itemWidth + props.gutter), transform = 'translate(' + [knobLeft + 'px', '0px'] + ')', style = {
            '-webkit-transform': transform,
            '-moz-transform': transform,
            '-o-transform': transform,
            '-ms-transform': transform,
            'transform': transform,
            width: itemWidth + 'px'
        }, items = this.props.states.map((e, i) => {
            return (React.createElement(SwitchItem, {key: e.key, itemKey: e.key, label: e.label, width: itemWidth, onClick: this.onItemClick, index: i}));
        }), clz = this.props.className || "";
        return (React.createElement("div", {className: "react-multi-switch " + clz, "data-state": this.state.selIndex}, items, React.createElement("div", {className: "rms-knob", style: style})));
    }
}
//# sourceMappingURL=MultiSwitch.js.map