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
            
                <form onSubmit={handleSubmit}>
                    <label style={{paddingBottom:'1rem' ,paddingRight:'1em'}}>Name </label>
                    <input type='string' value ={name} onChange={(event)=>setName(event.target.value )}/><br/>
                    <label style={{paddingBottom:'1rem' ,paddingRight:'1em'}}>Budget </label>
                    <input type='string' value ={budget} onChange={(event)=>setBudget(event.target.value )}/><br/>
                    <button >Add</button>
                    <button onClick={() => setIsOpen(false)}>Close</button>
                </form>
                :
                <div  onClick={() => setIsOpen(true)} style={{display:"flex", justifyContent:"center"}}>Create New Envelope</div>
            }
        </div>
    )
}

export default AddProject;