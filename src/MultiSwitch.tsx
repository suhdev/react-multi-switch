import * as React from 'react'; 
import {SwitchItem,SwitchItemDef} from './SwitchItem';

export interface MultiSwitchProps {
    states:SwitchItemDef[];
    onChange:Function;
    selIndex:number;
    className?:string;
    itemWidth:number;
    gutter?:number;
}

export interface MultiSwitchState {
    selIndex:number;
}

export class MultiSwitch extends React.Component<MultiSwitchProps,MultiSwitchState>{
    constructor(props:MultiSwitchProps){
        super(props);
        this.onItemClick = this.onItemClick.bind(this);
        this.state = {
            selIndex:props.selIndex
        };
    }

    componentWillReceiveProps(nextProps:MultiSwitchProps){
        this.setState({
            selIndex:nextProps.selIndex
        });
    }

    onItemClick(index:number,key:string){
        this.setState({
            selIndex:index
        },()=>{
            this.props.onChange(index,key);
        });
    }

    shouldComponentUpdate(props:MultiSwitchProps,state:MultiSwitchState){
        return props.className !== this.props.className ||
            props.selIndex !== this.props.selIndex ||
            props.states !== this.props.states ||
            state.selIndex !== this.state.selIndex;
    }

    render(){
        let props = this.props,
            state = this.state,
            itemWidth = props.itemWidth, 
            knobLeft = state.selIndex * (props.itemWidth +props.gutter),
            transform = 'translate('+[knobLeft+'px','0px']+')',
            style = {
                '-webkit-transform':transform,
                '-moz-transform':transform,
                '-o-transform':transform,
                '-ms-transform':transform,
                'transform':transform,
                width:itemWidth+'px'
            },
            items = this.props.states.map((e,i)=>{
            return (
                <SwitchItem 
                    key={e.key} 
                    itemKey={e.key} 
                    label={e.label} 
                    width={itemWidth}
                    onClick={this.onItemClick} 
                    index={i} />
            );
        }),
            clz = this.props.className||"";
        return (
            <div className={"react-multi-switch "+clz} data-state={this.state.selIndex}>
                {items}
                <div className="rms-knob" style={style}></div>
            </div>
        );
    }
}