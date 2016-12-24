import React from 'react';
import {Input} from 'antd';
import '../../style/todo.scss'
import Todomvc from './todomvc'
import Datalist from './datalist'

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.press = this.press.bind(this);
  }
  press(){
    console.log(11111);
  }
  render() {
    return (
      <div className="wrapper">
        <Todomvc onPress={this.press}/>
        <br/>
        <Datalist />
      </div>
    );
  }
}

export default Todo;

// ({value}) => (
//   <div className="wrapper">
//     <Todomvc onPress=""/>
//   </div>
// )
