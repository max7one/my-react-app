// export const onChange = (e)=> ({ type:'change', value: e.target.value })
export const onAdd = (e)=> ({ type:'add', value: e.target.value })
export const onDel = (index)=> ({ type:'del', index: index })

export const onChange = (e)=>{
  const value = e.target.value;
  return function (dispatch) {
    fetchData();
    setTimeout(function () {
      console.log(value);
      dispatch({ type:'change', value: value })
    }, 1000)
  }
}

function fetchData() {
  fetch('https://github.com/', {
    method: 'GET',
    mode: 'no-cors',
    cache: 'default'
  }).then(res=>{
    console.log(res);
  }).then(data =>{
    console.log(data)
  }).catch(e => console.log("error", e))
}
