import React, { useEffect, useState } from 'react'
import todo from "../images/pic.jpeg";
import "../App.css";


const getLocalStorage =()=>{
  let list = localStorage.getItem('lists');

  if(list){
    return JSON.parse(list);
  }else{
    return [];
  }
};

const Todo = () => {
  const [text, setText] =useState('add some tasks');
  const [task, setTask] =useState(getLocalStorage);

  const handleChange = (e)=>{
    setText(e.target.value);
  };
  const handleSubmit = (e)=>{
    e.preventDefault();
    if(text){
      setTask([...task,text]);
      setText("");
    }
    
  }

  const removeTask = (index)=>{
    const finalData = task.filter((value, ind)=>{
      return ind !==index;
    })
    setTask(finalData);
  };
  useEffect(()=>{
    localStorage.setItem('lists',JSON.stringify(task));
  },[task])


  return (
    <div className='container'>
        <div className='card  my-5'>
          <img className='img' src={todo} alt="Logo img"/>
            <div className="card-body">
                <h5 className="card-title  text-center text-light">Enter Todo List here...</h5>
            <form onSubmit={handleSubmit}>
                <div className='row d-flex'>
                    <div className="col-10">
                        <input type="text" placeholder="enter-text-here" value={text} onChange={handleChange}/>
                    </div>
                    <div className="col col-2">
                        <input type="submit" value="+" id='submit'/>
                    </div>
                </div>
            </form>
            <div className="container pb-2">
              <div className="row">
                {
                  task.map((value,ind)=>{
                    return(
                      <div key={ind}>
                      <li className="list-group-item list-class d-flex justify-content-between align-items-center">
                          <span>{value}</span>
                          <i className="far fa-trash-alt delete" onClick={()=>removeTask(ind)}></i>
                     </li>
                      </div>
                    )
                  })
                }
              </div>
            </div>
          </div>
        </div>
      </div>
  )
};

export default Todo;