import React from 'react'
import {Route ,Routes} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import List from './List';
import Details from './Details';
// import Details from './Details'


const App = () => {
  return (
    
    <Routes>
      <Route path='/' element={<List />} />
      <Route path='/:id' element={<Details />} />
    </Routes>
  
  
  )
}

export default App ;
