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


const todo_reducer = (state = InitialState, action)=> {
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
}

export default todo_reducer;
