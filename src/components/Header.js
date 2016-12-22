import React from 'react';

const Header = props =>(
    <div>
        <h1>{props.title}</h1>
        <input type="text" defaultValue={props.value} onChange={props.onChange}/>
        <button onClick={props.onAdd} value={props.value}>add</button>
        <button onClick={props.mulDel} value={props.value}>del</button>
    </div>
)

export default Header;
