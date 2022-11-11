import React from "react-dom";
import './NewElementAdder.css';
import { useState } from 'react';



function NewElementAdder(props){

    const [task,setTask]=useState('');
    const [job,setJob]=useState('');
    const [des,setDes]=useState('');
    
    function setNewDes(Event){
        setDes(Event.target.value);
        

    }
    function setNewTask(Event){
        setTask(Event.target.value);
        

    }
    function setNewJob(Event){
        setJob(Event.target.value);
        

    }
    function newElementSubmitted(Event){
        Event.preventDefault();
        if (task!=='') {
        const data= {
            task: task,
            job: job,
            des: des} ;
        props.onCalled(data);
       
        setDes('');
        setJob('');
        setTask('');
        }
       
    }

    return(
        <form onSubmit={newElementSubmitted} className="new-element-container">
            <div className="new-element-top">
                <div className="add-title"><input type='text' className="add-title-textbox" placeholder="Enter Task Name" onChange={setNewTask} value={task}></input> </div>    
                <div className="add-description" ><input type='text' className="add-description-textbox" placeholder="Enter Job Name" onChange={setNewJob} value={job}></input></div>
             </div>
            <div className="new-element-bottom">  
                        <div className="add-title"><input type='text' className="add-title-textbox" placeholder="Enter Task Description"onChange={setNewDes} value={des}></input> </div>
                        <div className="add-description" ><button type='submit' className="add-button" >Submit</button></div>          
            </div>
        </form>
    );

}
export default NewElementAdder;