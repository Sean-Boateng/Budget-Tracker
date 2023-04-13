import React, { useState } from 'react';


const AddProject = (props)=>{
    const[title,setTitle]= useState('')
    const[amount,setAmount]= useState('')
    const[category,setCategory]= useState('')
    const[isopen,setIsOpen]= useState(false)



    

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
        <div>


        

{
    isopen ? 
    <form onSubmit={handleSubmit}>
        <label style={{paddingBottom:'1rem' ,paddingRight:'1em'}}>Title </label>
        <input type='string' value ={title} onChange={(event)=>setTitle(event.target.value )}/><br/>
        <label style={{paddingBottom:'1rem' ,paddingRight:'1em'}}>Amount </label>
        <input type='int' value ={amount} onChange={(event)=>setAmount(event.target.value )}/><br/>
        <label style={{paddingBottom:'1rem' ,paddingRight:'1em'}}>Category</label>
        <input type='string' value ={category} onChange={(event)=>setCategory(event.target.value )}/><br/>
        <button>Add</button>
        <button onClick={() => setIsOpen(false)}>Done</button>
    </form>
    :
    <div onClick={() => setIsOpen(true)} style={{display:"flex", justifyContent:"center"}}>Add Expense</div>
}


    
    
    {console.log(isopen)}
        </div>
    )
}

export default AddProject;

// {
//     isopen ? 
//     <form onSubmit={handleSubmit}>
//         <label style={{paddingBottom:'1rem' ,paddingRight:'1em'}}>Title </label>
//         <input type='string' value ={title} onChange={(event)=>setTitle(event.target.value )}/><br/>
//         <label style={{paddingBottom:'1rem' ,paddingRight:'1em'}}>Amount </label>
//         <input type='int' value ={amount} onChange={(event)=>setAmount(event.target.value )}/><br/>
//         <label style={{paddingBottom:'1rem' ,paddingRight:'1em'}}>Category</label>
//         <input type='string' value ={category} onChange={(event)=>setCategory(event.target.value )}/><br/>
//         <button>Add</button>
//         <button onClick={() => setIsOpen(false)}>Done</button>
//     </form>
//     :
//     <button type='submit' onClick={() => setIsOpen(true)}>Add Expense</button>
// }


    
    
//     {console.log(isopen)}