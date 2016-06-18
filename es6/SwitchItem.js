import * as React from 'react';
export class SwitchItem extends React.Component {
    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
    }
    onClick(e) {
        this.props.onClick(this.props.index, this.props.itemKey);
    }
    shouldComponentUpdate(props) {
        return props.index !== this.props.index ||
            props.itemKey !== this.props.itemKey ||
            props.label !== this.props.label;
    }
    render() {
        let e = this.props;
        return (React.createElement("div", {className: "rms-state", style: { width: e.width + 'px' }, onClick: this.onClick, "data-index": e.index}, e.label));
    }
}
//# sourceMappingURL=SwitchItem.js.map