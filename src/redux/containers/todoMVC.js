import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import '../../style/todo.scss'
import Input from '../../components/todomvc/Input'
import Datalist from '../../components/todomvc/Datalist'
import * as todomvcActions from '../actions/todomvcAction'
import Moment from 'moment';

class App extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <Input onPress={this.props.actions.onPress} />
        <br/>
        <div style={{width:'100%'}}>
          <Datalist dataSource={this.props.state.dataSource} />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.warn(state);
  return{
    state:{
      dataSource:state.todomvcReducer.dataSource
    }
  }
}


const mapDispatchToProps = dispatch=>({
  actions:bindActionCreators(todomvcActions,dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
