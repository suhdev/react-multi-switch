import * as React from 'react'; 
import {SwitchItem,SwitchItemDef} from './SwitchItem';

export interface MultiSwitchProps {
    states:SwitchItemDef[];
    onChange:Function;
    selState:number;
    className?:string;
}

export interface MultiSwitchState {
    selState:number;
}

export class MultiSwitch extends React.Component<MultiSwitchProps,MultiSwitchState>{
    constructor(props:MultiSwitchProps){
        super(props);
        this.state = {
            selState:props.selState
        };
    }

    componentWillReceiveProps(nextProps:MultiSwitchProps){
        this.setState({
            selState:nextProps.selState
        });
    }

    shouldComponentUpdate(props:MultiSwitchProps,state:MultiSwitchState){
        return props.className !== this.props.className ||
            props.selState !== this.props.selState ||
            props.states !== this.props.states ||
            state.selState !== this.state.selState;
    }

    render(){
        let items = this.props.states.map((e,i)=>{
            return (
                <SwitchItem key={e.key} itemKey={e.key} label={e.label} onClick={this.props.onChange} index={i} />
            );
        }),
            clz = this.props.className||"";
        return (
            <div className={"of-switch "+clz} data-state={this.state.selState}>
                {items}
            </div>
        );
    }
}