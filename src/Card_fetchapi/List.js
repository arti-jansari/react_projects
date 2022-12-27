import React from 'react'
import {useState, useEffect } from 'react';
import {Link} from 'react-router-dom'
import Details from './Details';

const List = () => {
  const[post,setPost]=useState([]);
  const[postid,setPostid]=useState();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => 
      setPost(data));
  }, []);
 
const onhandlebacktolist = () =>{
  setPostid(undefined)
}


  if(postid > 0){
    return  (<Details 
      post={post.find((post)=>post.id === postid)}
      onBacktolist ={onhandlebacktolist}
      
      />)
  }
 

  

  return post.length ? (
    <table class="table">
    <thead>
      <tr>
        <th scope="col">UserId</th>
        <th scope="col">Id</th>
        <th scope="col">Title</th>
        <th scope="col">Action</th>
      </tr>
    </thead>
    <tbody>
      {post.map((value)=>(
        <tr>
        <th >{value.userid}</th>
        <td>{value.id}</td>
        <td>{value.title}</td>
        <td>
          {<Link to={`/${value.id}`}> View Detail</Link>}
        </td>
      </tr>
      ))}
      
      
    </tbody>
  </table>
  ) :null;
}

export default List
