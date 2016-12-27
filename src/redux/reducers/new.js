const InitialState = {
  value: 0,
  items : [
    { id: 0,text:'111'},
    { id: 1,text:'222'},
    { id: 2,text:'333'}
  ]
}

function newOne(state = InitialState, action) {
  switch (action.type){
    case "add":{
      return {
        ...state,
        value: ++state.value
      }
    }
    case 'decrease':{
      return {
        ...state,
        value: --state.value
      }
    }
    case 'change':{
      return {
        ...state,
        value: action.value
      }
    }
    case 'clear':{
      return{
        ...state,
        value:""
      }
    }

    case 'addItem':{
      return {
        ...state,
        items: state.items.concat({
          id:state.items.length+1,
          text:action.value
        })
      }
    }

    case 'press':{
      return {
        ...state,
        items: state.items.concat({
          id:state.items.length+1,
          text:action.value
        })
      }
    }

    case 'delItem':{
      return {
        ...state,
        items: state.items.filter(item=>item.id!==action.id)
      }
    }

    case 'saveItem':{
      const id = action.item.id;
      state.items[id].text = action.item.value;
      return state;
    }

    default: return state;
  }
}

export default newOne;
