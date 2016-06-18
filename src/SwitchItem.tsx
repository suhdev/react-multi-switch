import * as React from 'react'; 
export interface SwitchItemDef{
    key:string;
    label:string;
}

export interface SwitchItemProps{
    itemKey:string;
    index:number;
    label:string;
    onClick:Function;
}

export class SwitchItem extends React.Component<SwitchItemProps,any>{
    constructor(props:SwitchItemProps){
        super(props); 
        this.onClick = this.onClick.bind(this);
    }

    onClick(e){
        this.props.onClick(this.props.index,this.props.itemKey);
    }

    shouldComponentUpdate(props:SwitchItemProps){
        return props.index !== this.props.index ||
            props.itemKey !== this.props.itemKey ||
            props.label !== this.props.label;
    }

    render(){
        let e = this.props; 
        return (
            <div className="of-switch-state" onClick={this.onClick} data-index={e.index} >{e.label}</div>
        );
    }
}