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
  edit = (id)=>{
    console.log(id)
    console.log(this)
  }
  save = (id)=>{
    const value = this.refs[`input${id}`].value
    this.props.actions.saveItem({id,value})
  }
  render() {
    console.warn(this.props)
    const {value,items} = this.props.state
    const {add,decrease,change,clear,addItem,delItem,editItem,fetchData} = this.props.actions

    return (
      <div style={{marginLeft:100}}>
        <h1>
          <Link to='/'>Back</Link>
        </h1>
        <h1>Hello</h1>
        {/* <h1>Fetch</h1> */}
        <h1>
          <a href="#" onClick={fetchData}>Fetch</a>
        </h1>
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
          return this.myButton = ref
        }
      }
      >添加</Button>
      <br/>
    <br/>
    <ul>
      {items?items.map((item)=>(
          <li key={item.id}>
          <p style={{fontSize: 20}}>
            <button onClick={delItem.bind(null,item.id)}>del</button>　
            <button onClick={this.edit.bind(null,item.id)}>edit</button>　
            <button onClick={this.save.bind(null,item.id)}>save</button>　
            <input type="checkbox"/>　
            <input type="text" defaultValue={item.text} ref={`input${item.id}`}/>
          </p>
          <br/>
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
