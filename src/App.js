import Header from './Header';
import './App.css';
import NewElementAdder from './NewElementAdder';
import Mytodolist from './Mytodolist';
import { useState } from 'react';
import Myheading from './Myheading';

function App() {
  const dummyJobs=
  [
    {task:'dummy task',
    job:'dummy job' ,
    des:'dummy description'}
   ] 
  
  const [totalJob ,setTotaljob]=useState(dummyJobs);

  function Runthisfun(props){
    console.log("called");
    setTotaljob((prevtotalJob)=>{return [props, ...prevtotalJob]});
    console.log(totalJob);
  }
  return (   
        
        <div className='main-container'>
          <Header></Header>
          <NewElementAdder onCalled={Runthisfun}></NewElementAdder>
          <Myheading></Myheading>
          {totalJob.map((items)=>(<Mytodolist task={items.task} job={items.job} des={items.des}></Mytodolist>))}
        </div>   
  );
}

export default App;
