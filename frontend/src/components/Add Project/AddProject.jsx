import React, { useState, useEffect } from 'react';


const AddProject = (props)=>{
    const[name,setName]= useState('')
    const[budget,setBudget]= useState('')
  

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
        <form onSubmit={handleSubmit}>
            <label style={{paddingBottom:'1rem' ,paddingRight:'1em'}}>Name </label>
            <input type='string' value ={name} onChange={(event)=>setName(event.target.value )}/><br/>
            <label style={{paddingBottom:'1rem' ,paddingRight:'1em'}}>Budget </label>
            <input type='string' value ={budget} onChange={(event)=>setBudget(event.target.value )}/><br/>
            <button >Add</button>
        </form>
    )
}

export default AddProject;