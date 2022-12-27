import React, { useState } from 'react'

const App = () => {

const[inputvalue,setInputvalue]=useState('')
const[data,setData]=useState([])


const onhandlerchange = (e) =>{
  setInputvalue(e.target.value)
}

const onhandleclick =(e)=>{
  const newitem= [...data];
  const newdata={
title : inputvalue,
button:inputvalue.current.value,


  }

}
console.log(inputvalue)
  return (
    <div>
      <input  type='text' name='input' value={inputvalue} onChange={onhandlerchange}/>
      <button onClick={onhandleclick}>ADD</button>
    
    </div>
  )
 }

export default App
