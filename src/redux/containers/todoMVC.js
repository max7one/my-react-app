import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import '../../style/todo.scss'
import Todomvc from '../../components/todomvc/Todomvc'
import Datalist from '../../components/todomvc/Datalist'
import * as todomvcActions from '../actions/todomvcAction'
import Moment from 'moment';

class App extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <Todomvc onPress={this.props.actions.onPress} />
        <br/>
        <div style={{width:'62%'}}>
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
