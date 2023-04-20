import React, { useState, useEffect } from 'react';


const AddProject = (props)=>{
    const[name,setName]= useState('')
    const[budget,setBudget]= useState('')
    const[isopen,setIsOpen]= useState(false)
  

    function handleSubmit(project){
        // project.preventDefault();
        let newEntry={
            name: name,
            budget:budget,
            
        };
        
        console.log(newEntry)
        props.addproject(newEntry)

    
    }
    return(
        <div>
            {
                isopen ?
            
                <form onSubmit={handleSubmit} style={{marginLeft:"10px"}}>
                    <label style={{paddingBottom:'1rem' ,paddingRight:'1em', color:"white"}}>Name </label>
                    <input style={{backgroundColor:"white", color:"black", borderRadius:"5px"}} type='string' value ={name} onChange={(event)=>setName(event.target.value )}/><br/>
                    <label style={{paddingBottom:'1rem' ,paddingRight:'1em',color:"white"}}>Budget </label>
                    <input style={{backgroundColor:"white", color:"black", borderRadius:"5px"}} type='string' value ={budget} onChange={(event)=>setBudget(event.target.value )}/><br/>
                    <button class="btn btn-primary" style={{backgroundColor:"#fca311", border:"#fca311"}}>Add</button>
                    <button onClick={() => setIsOpen(false)} class="btn btn-primary" style={{marginLeft:"5px", backgroundColor:"#fca311", border:"#fca311"}}>Close</button>
                </form>
                :
                <button class="btn btn-primary" onClick={() => setIsOpen(true)} style={{marginLeft:"10px",backgroundColor:"#fca311", border:"#fca311"}}>+</button>
            }
        </div>
    )
}

export default AddProject;