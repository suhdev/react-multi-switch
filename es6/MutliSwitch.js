import * as React from 'react';
import { SwitchItem } from './SwitchItem';
export class MultiSwitch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selState: props.selState
        };
    }
    componentWillReceiveProps(nextProps) {
        this.setState({
            selState: nextProps.selState
        });
    }
    shouldComponentUpdate(props, state) {
        return props.className !== this.props.className ||
            props.selState !== this.props.selState ||
            props.states !== this.props.states ||
            state.selState !== this.state.selState;
    }
    render() {
        let items = this.props.states.map((e, i) => {
            return (React.createElement(SwitchItem, {key: e.key, itemKey: e.key, label: e.label, onClick: this.props.onChange, index: i}));
        }), clz = this.props.className || "";
        return (React.createElement("div", {className: "of-switch " + clz, "data-state": this.state.selState}, items));
    }
}
//# sourceMappingURL=MutliSwitch.js.map