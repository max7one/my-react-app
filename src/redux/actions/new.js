export const add = ()=>({ type:'add'})
export const decrease =()=> ({ type:'decrease'})
export const clear = ()=>({ type:'clear'})

export const change = (e)=>{
  return{
    type: 'change',
    value: e.target.value
  }
}

export const press = (e)=>{
  return{
    type: 'press',
    value: e.target.value
  }
}

export const addItem = (value)=>{
  return {
    type: 'addItem',
    value: value
  }
}
