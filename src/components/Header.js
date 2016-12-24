import React from 'react';

const Header = ({title,value,onChange,onAdd,mulDel}) =>(
    <div>
        <h1>{title}</h1>
        <input type="text" defaultValue={value} onChange={onChange}/>
        <button onClick={onAdd} value={value}>add</button>
        <button onClick={mulDel} value={value}>del</button>
    </div>
)

export default Header;
