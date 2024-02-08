import React,{useEffect, useState} from 'react';
import TaskList from './TaskList';
import Modal from './Modal';

function App() {
  const [taskState,setTasKstate]=useState(false)
  const [task,setTask]=useState("");
  const [taskList,setTaskList]=useState([]);
  const [editState,setEditState]=useState(false);
  const[indexofedit,setIndexOfEdit]=useState();
  const [showModal,setShowModal]=useState(false);


  useEffect(()=>{
    const timout=setTimeout(()=>{
      setShowModal(false);
    },3000)
    return ()=>{
      clearTimeout(timout)
    }
  },[showModal])


  const handleSubmit=(e)=>{
    e.preventDefault();
    if(task){
      setTaskList((taskList)=>{
        return [...taskList,task];
      })
      setTask("");
      setShowModal(true);
      setTasKstate(true);
    }
    else{
      setShowModal(true);
    };
  }

  const handleChange=(e)=>{
    setTask(e.target.value);
  }

  const edit=(value,ind)=>{
    setEditState(true);
    setTask(value);
    setIndexOfEdit(ind);
  }

  const handelEdited=()=>{
    const newArr=[...taskList];
    newArr[indexofedit]=task;
    setTaskList(newArr);
    setEditState(false);
    setTask("");
  }

  const deleteTask=(ind)=>{
    setTaskList(()=>{
      return taskList.filter((val,index)=>index!==ind);
    })
  }


  return (
    <div className='section-center'>

      {
        showModal && <Modal taskState={taskState}/>
      }

      <h3 className='title'>To Do list</h3>

      <div className='form-control'>
        <form className='grocery-form' onSubmit={handleSubmit}>
        <input className='grocery' type='text'value={task} onChange={handleChange} placeholder='eg... go to market'/>
        {editState ? <button type='button' className='btn' onClick={handelEdited}>Submit Edited value</button> :
        <button type='submit' className='btn'>Submit</button>}
        </form>
      </div>
      {
        taskList.map((val,index)=>{
          console.log("index value at map method",index);
          return(
            <TaskList key={index} task={val} edit={edit} index={index} deleteTask={deleteTask}/>
          )
        })
      }
    </div>
  );
}

export default App;
