import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Content from '../../components/NodeList';
import Header from '../../components/Header';
import * as TodoActions from '../actions/todoAction'


const App = props =>{
  console.log(props);
  return (
    <div>
      <Header title={props.title} value={props.value} onAdd={props.actions.onAdd} onChange={props.actions.onChange} />
      <Content items={props.items} onDel={props.actions.onDel}/>
    </div>
  )
}

function mapStateToProps(state) {
  const _state = state.todoReducer;
  return{
    title: _state.title,
    value: _state.value,
    items: _state.items,
  }
}

// const mapStateToProps = state=>({
//   state: {
//     title:state.title,
//     value:state.value,
//     items:state.items
//   }
// })

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(TodoActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
