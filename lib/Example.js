"use strict";
const React = require('react');
const ReactDOM = require('react-dom');
const MultiSwitch_1 = require('./MultiSwitch');
const items = [{
        label: 'Item 1',
        key: 'item1'
    }, {
        label: 'Item 2',
        key: 'item2'
    }, {
        label: 'Item 3',
        key: 'item3'
    }];
class Example extends React.Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
        this.state = {
            selIndex: 0,
        };
    }
    onChange(idx, key) {
        this.setState({
            selIndex: idx
        });
    }
    render() {
        return (React.createElement(MultiSwitch_1.MultiSwitch, {onChange: this.onChange, states: items, itemWidth: 40, gutter: 4, selIndex: this.state.selIndex}));
    }
}
(function main() {
    let v = ReactDOM.render(React.createElement(Example, null), document.getElementById('SiteContainer'));
}());
//# sourceMappingURL=Example.js.map