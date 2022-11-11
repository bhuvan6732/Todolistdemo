import React from "react";
import './Mytodolist.css';

function Mytodolist(datas){
    return(
        <div className="one-task-container">
            <input type="checkbox" className="check-box"></input>
            <div className="task-name"> {datas.task} </div>
            <div className="job-name"> {datas.job}</div>
            <div className="task-description"> {datas.des}</div>
        </div>
    );
}
export default Mytodolist;