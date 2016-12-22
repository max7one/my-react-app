import React from 'react';
import { render } from 'react-dom';
import { connect,Provider } from 'react-redux';
import { createStore, bindActionCreators } from 'redux';

const InitialState = {
    title: 'hello',
    value: 'hello',
    items: [
        {id:0,text:'123', checked:false},
        {id:1,text:'sdfdsf', checked:true},
        {id:2,text:'ghj', checked:true},
        {id:3,text:'yuiyui', checked:false}
    ]
}

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

const Header = props =>(
    <div>
        <h1>{props.title}</h1>
        <input type="text" defaultValue={props.value} onChange={props.onChange}/>
        <button onClick={props.onAdd} value={props.value}>add</button>
        <button onClick={props.mulDel} value={props.value}>del</button>
    </div>
)

const Demo = props =>{
    console.log(props);
    return (
        <div>
            <Header title={props.title} value={props.value} onAdd={props.actions.onAdd} onChange={props.actions.onChange} />
            <Content items={props.items} onDel={props.actions.onDel}/>
        </div>
    )
}

// map redux to Component props
const ReduxApp = connect(
    state=>({
        title:state.title,
        value:state.value,
        items:state.items
    }),
    dispatch => ({
        actions: bindActionCreators({
            onChange: (e)=> ({
                type:'change',
                value: e.target.value
            }),
            onAdd: (e)=> ({
                type:'add',
                value: e.target.value
            }),
            onDel: (index)=> ({
                type:'del',
                index: index
            })
        }, dispatch)
    })
)(Demo);

//得到新state
const store = createStore((state = InitialState, action)=> {
    switch (action.type) {
        case 'change':{
            return {
                ...state,
                title: action.value,
                value: action.value
            };
        }
        case 'add':{
            console.log(state.items.concat({text:action.value, checked:false}));
            let id = state.items.length;
            return {
                ...state,
                items: state.items.concat({id ,text:action.value, checked:false})
            }
        }
        case 'del':{
            let values = state.items;
            values.splice(action.index,1)
            return {...state,items:[...values]}
        }
        default:{
            return state;
        }
    }
})

export {store, ReduxApp};
