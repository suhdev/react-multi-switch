/// <reference path="./typings/react/react.d.ts" />

declare module 'react-multi-switch'{
    import * as React from 'react'; 

    export interface SwitchItemDef{
        key:string;
        label:string;
    }

    export interface SwitchItemProps{
        itemKey:string;
        index:number;
        label:string;
        width:number;
        onClick:Function;
    }

    export class SwitchItem extends React.Component<SwitchItemProps,any>{
        onClick(e):void;
    }

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
        onItemClick(index:number,key:string):void;
    }
} 