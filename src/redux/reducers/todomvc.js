import Moment from 'moment';

const InitialState = {
  dataSource: [{
    key: '1',
    time: '2016-12-24 05:14:55',
    content: '西湖区湖底公园1号'
  }, {
    key: '2',
    time: '2016-12-24 05:14:55',
    content: '西湖区湖底公园1号'
  },{
    key: '3',
    time: '2016-12-24 05:14:55',
    content: '西湖区湖底公园1号'
  }]
}

export default (state=InitialState,action)=>{
  switch (action.type) {
    case "add":{
      let dataSource = state.dataSource;
      let time = Moment().format("YYYY-MM-DD hh:mm:ss");
      let content = action.value;
      let key = String(dataSource.length+1);
      dataSource.push({ key, time, content })
      return {
        ...state,
        dataSource
      }
    }
    default: return state;
  }
}
