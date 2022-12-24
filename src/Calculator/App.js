import React, { useState } from 'react';
import './App.css'


const App = () => {
  const [result ,setResult] =useState('');
  // const [newdata ,setNewdata] =useState('');

  const onhandlechange = (e)=>{
setResult(e.target.value)
  }
 const onhandleclick = (e)=>{

  setResult(result.concat(e.target.value))
  // console.log(result)
 } 
 const handleclear = ()=>{
  setResult('')
 }
 const handlecalculate = ()=>{
  setResult(eval(result))
 }

 const handleclearvalue = ()=>{
 
 const newdata=result.split('').pop()
 setResult(result.toString())
 console.log(result)
//  setResult(result)
 }


 
  return (
    <div className='calc'>
      <input type="text" name='input' placeholder='0' value ={result} id='input' onChange={onhandlechange} />
      <input type='button' className='button' value='7'  onClick={onhandleclick} />
      <input type='button' className='button' value='8'  onClick={onhandleclick} />
      <input type='button' className='button' value='9'  onClick={onhandleclick} />
      <input type='button' className='button' value='*'  onClick={onhandleclick} />
      <input type='button' className='button' value='4'  onClick={onhandleclick} />
      <input type='button' className='button' value='5'  onClick={onhandleclick} />
      <input type='button' className='button' value='6'  onClick={onhandleclick} />
      <input type='button' className='button' value='+'  onClick={onhandleclick} />
      <input type='button' className='button' value='1'  onClick={onhandleclick} />
      <input type='button' className='button' value='2'  onClick={onhandleclick} />
      <input type='button' className='button' value='3'  onClick={onhandleclick} />
      <input type='button' className='button' value='-'  onClick={onhandleclick} />
      <input type='button'  className='button' value='AC'  onClick={handleclear} />
      <input type='button' className='button' value='/'  onClick={onhandleclick} />
      <input type='button' className='button' value='='  onClick={handlecalculate} />
      <input type='button' className='button' value='Clear'  onClick={handleclearvalue} />
      
     
    </div>
  )
}

export default App
