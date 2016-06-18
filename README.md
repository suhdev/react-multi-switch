#react-multi-switch

A configurable multi-switch UI component for ReactJS application written in TypeScript.

## Installation 

### with JSPM 

```bash
mydir$ jspm install npm:react-multi-switch --save 

```

### with NPM

```bash
mydir$ npm install react-multi-switch --save-
```

##Properties 
1. `itemWidth` a number representing the individual state width.
2. `states` an array of states each state is an object literal containing `label` and `key` 
3. `onChange` a function to be called when the state changes, it is passed the index of the state that has been clicked, and the state's key. 
4. `selIndex` the currently selected index, the application should change this [from the onChange function] to reflect the index of the selected state. 
5. `className` an optional parameter to set another class on the MultiSwitch root element.  

## Usage [ES6 and JSPM] 
1. Include the stylesheet either `react-multi-switch.min.css` [minified] or `react-multi-switch.css` [unminified].

   ```html
   <link rel="stylesheet" href="/path-to-css/react-multi-switch.min.css" />
   ```

2. Using JSPM 

    ```javascript 
    import {MultiSwitch} from 'react-multi-switch'; 
    const states = [{
        label:'Item 1',
        key:'item1'
    },{
        label:'Item 2',
        key:'item2'
    }];

    <MultiSwitch itemWidth={100} onChange={(idx,key)=>{}} selIndex={0} states={states} /> 

    ```

##Usage with [CommonJS modules] 

```javascript 
var MultiSwitch = require('react-multi-switch').MultiSwitch; 

const states = [{
        label:'Item 1',
        key:'item1'
    },{
        label:'Item 2',
        key:'item2'
    }];

<MultiSwitch itemWidth={100} onChange={(idx,key)=>{}} selIndex={0} states={states} />

```


