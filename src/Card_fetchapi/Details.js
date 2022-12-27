import React, { useEffect, useState } from 'react'
import { useParams ,Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

const Details = (props) => {
  const params = useParams()
const[postvalue ,setPostvalue]=useState()
useEffect(() => {
  fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
    .then((response) => response.json())
    .then((data) => setPostvalue(data));
}, []);




  return postvalue  ? (  
    
      <div className="card">
      <div className="card-body ">
        <h5 className="card-title">{postvalue.body}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{postvalue.title}</h6>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
     {<Link to='/' >Go to Back</Link>}
      
       
      </div>
    </div>
  
    ): null;
  
  }



export default Details
