import React from 'react';
import {Link} from 'react-router'
import {connect} from "react-redux";
import { bindActionCreators } from 'redux';
import * as newOne from '../actions/new'
import {Button} from 'antd'

class App extends React.Component {

  mypress = (e)=>{
    // console.log(e.keyCode)
    if(e.keyCode === 13){
      this.props.actions.press(e);
    }
  }
  render() {
    console.warn(this.props)
    const {value,items} = this.props.state
    const {add,decrease,change,clear,addItem} = this.props.actions
    return (
      <div style={{marginLeft:100}}>
        <h1>
          <Link to='/'>Back</Link>
        </h1>
        <h1>Hello</h1>
        <br/>
        <h3>{value}</h3>
      <input type="text" value={value} onChange={change} onKeyDown= {this.mypress}/>
        <br/><br/>
        <button onClick={add}>addNum</button>　
        <button onClick={decrease}>decreaseNum</button>　
        <button onClick={clear}>clear</button>
      <br/>
      <br/>
    <Button onClick={addItem.bind(null,value)} value={value} id={value}
      ref={
        (ref)=>{
          console.warn(ref)
          return this.myButton = ref
        }
      }
      >添加</Button>
    <ul>
      {items?items.map((item)=>(
          <li key={item.id}>
          <p style={{fontSize: 20}}>
            <input type="checkbox"/>　
            {item.text}
          </p>
        </li>
      )):""}
    </ul>
      </div>
    );
  }
}

function mapStateToProps(state){
  return{
    state: state.newOne
  }
}

function mapDispatchToProps(dispatch){
  return {
    actions: bindActionCreators(newOne,dispatch)
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(App);
