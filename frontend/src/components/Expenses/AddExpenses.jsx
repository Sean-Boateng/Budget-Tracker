import React, { useState, useEffect } from 'react';


const AddProject = (props)=>{
    const[title,setTitle]= useState('')
    const[amount,setAmount]= useState('')
    const[category,setCategory]= useState('')


    

    function handleSubmit(project){
        project.preventDefault();
        let newEntry={
            title: title,
            amount:amount,
            category:category
        };
        
        console.log(newEntry)
        props.addexpense(newEntry)

    
    }
    return(
        <form onSubmit={handleSubmit}>
            <label style={{paddingBottom:'1rem' ,paddingRight:'1em'}}>Title </label>
            <input type='string' value ={title} onChange={(event)=>setTitle(event.target.value )}/><br/>
            <label style={{paddingBottom:'1rem' ,paddingRight:'1em'}}>Amount </label>
            <input type='int' value ={amount} onChange={(event)=>setAmount(event.target.value )}/><br/>
            <label style={{paddingBottom:'1rem' ,paddingRight:'1em'}}>Category</label>
            <input type='string' value ={category} onChange={(event)=>setCategory(event.target.value )}/><br/>
            <button>Add</button>
        </form>
    )
}

export default AddProject;