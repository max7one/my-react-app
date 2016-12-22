import React from 'react';

const Node = props =>(
    <li>
        <button onClick={props.onDel}>del</button>
        <input type="checkbox"/* checked={props.checked}*//>
        {props.children}
    </li>
)

const Content = props =>(
    <ul style={{listStyleType:'none',padding:0}}>
        {props.items.map((item)=>
            <Node key={item.id} checked={item.checked} onDel={props.onDel.bind(this,item.id)}>
                 {item.text}
            </Node>
        )}
    </ul>
)

export default Content;
