import React from 'react';
import { render } from 'react-dom';
import { connect,Provider } from 'react-redux';
import { createStore, bindActionCreators } from 'redux';
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
  return {
    title:state.title,
    value:state.value,
    items:state.items
  }
}

export const ReduxApp = connect(
  mapStateToProps,
  dispatch => ({
    actions: bindActionCreators(TodoActions, dispatch)
  })
)(App);
