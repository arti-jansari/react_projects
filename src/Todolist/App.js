import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const [inputvalue, setInputvalue] = useState("");
  const [title, setTitle] = useState("");
  const [data, setData] = useState([]);

  const onhandlerchange = (e) => {
    setInputvalue(e.target.value);
  };
  const onhandlerchangetitle = (e) => {
    setTitle(e.target.value);
  };

  const onhandleclick = () => {
    const newitem = [...data];
    const newdata = {
      input: inputvalue.toString().toUpperCase(),
      title: title.toString().toUpperCase(),
    };
    newitem.push(newdata);
    setData(newitem);
    setInputvalue("");
    setTitle("")
    
  };
   const onhandleeditclick = (e) =>{

   }
   const onhandledelete =(e)=>{
   
   }
 console.log(data)
  return (
    <div className="container bg-dark ">
<h1 className='text-center text-primary my-5'>CRUD Operation</h1>
            <label className="fw-bold text-light">INPUT DATA:</label>
      <input className="m-2 text-dark"
        type="text"
        name="input"
        value={inputvalue}
        onChange={onhandlerchange}
      />
      <br />
      <label className="fw-bold text-light">TITLE DATA : </label>
      <input className="m-2 "
        type="text"
        name="title "
        value={title}
        onChange={onhandlerchangetitle}
      />
      <br />
      <button className="btn btn-primary  px-4 my-3" onClick={onhandleclick}>ADD</button>


      <table class="table">
    <thead>
      <tr>
        <th scope="col">No.</th>
        <th scope="col">Inputvalue</th>
        <th scope="col">Title value</th>
        <th scope="col">Action</th>
      </tr>
    </thead>
    <tbody className="text-light fs-5">
    {data.map((value, index) => (
      <tr>
        <td>
        {index + 1}
        </td>
        <td>{value.input}</td>
        <td>{value.title}</td>
        <td><span><button value={index+1} onClick={onhandleeditclick} className="btn btn-primary px-3 mx-3">Edit</button ></span><span><button className="btn btn-primary  " value={index+1} onClick={onhandledelete} >Delete</button></span></td>
      </tr>
    ))}
    </tbody>
            </table>

      
    




      <div>
       
        <br />
      </div>
    </div>
  );
};

export default App;
