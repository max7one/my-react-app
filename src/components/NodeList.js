import React from 'react';

const Node = ({onDel,children}) =>{
  return (
    <li>
        <button onClick={onDel}>del11111111</button>
        <input type="checkbox"/* checked={checked}*//>
        {children}
    </li>
  )
}

const Content = ({items, onDel}) =>(
    <ul style={{listStyleType:'none',padding:0}}>
        {items.map((item)=>
            <Node key={item.id} checked={item.checked} onDel={onDel.bind(this,item.id)}>
                 {item.text}
            </Node>
        )}
    </ul>
)

export default Content;
