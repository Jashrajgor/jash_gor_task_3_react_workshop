import React from "react";
const TaskList=({task,index,edit , deleteTask})=>{
    return(
        <div className='grocery-container'>
             <div className='grocery-list'>
                <div className="grocery-item">
                    <p>{task}</p>
                    <button type="button" className="edit-btn" onClick={()=>{edit(task,index)}}>Edit</button>
                    <button type="button" className="delete-btn" onClick={()=>{deleteTask(index)}}>Delete</button>
                </div>
             </div>
        </div>
    )
}
export default TaskList;