import React from "react";
const Modal =({taskState})=>{
    if(taskState===false){
        return(
            <div className="alert">
                <h5>Please Enter Value</h5>
            </div>
        )
    }
    else{
        return(
            <div className="alert">
                <h5>Your value Added</h5>
            </div>
        )
    }
}
export default Modal;