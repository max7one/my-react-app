export const add = ()=>({ type:'add'})
export const decrease =()=> ({ type:'decrease'})
export const clear = ()=>({ type:'clear'})

export const change = e =>( { type: 'change', value: e.target.value })
export const press = e =>({ type: 'press', value: e.target.value})
export const addItem = value =>({ type: 'addItem', value})
export const delItem = id =>({ type: 'delItem', id })
export const saveItem = item =>({ type: 'saveItem', item})
