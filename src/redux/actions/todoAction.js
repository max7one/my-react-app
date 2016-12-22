export const onChange = (e)=> ({ type:'change', value: e.target.value })
export const onAdd = (e)=> ({ type:'add', value: e.target.value })
export const onDel = (index)=> ({ type:'del', index: index })
