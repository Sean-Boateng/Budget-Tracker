import React, { useState } from 'react';
import Dropdown from '../DropDownCategory/Dropdown';


const AddProject = (props)=>{
    const[title,setTitle]= useState('')
    const[amount,setAmount]= useState('')
    const[category,setCategory]= useState('')
    const[isopen,setIsOpen]= useState(false)


    // const options = [
    //     { value: 'utility', label: 'Utility' },
    //     { value: 'transportation', label: 'Transportation' },
    //     { value: 'savings', label: 'Savings' },
    //     { value: 'food', label: 'Food' }
    //   ]



    

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
                    <label style={{paddingBottom:'1rem' ,paddingRight:'1em'}}>Description </label>
                    <input type='string' for ={title} onChange={(event)=>setTitle(event.target.value )}/><br/>
                    <label style={{paddingBottom:'1rem' ,paddingRight:'1em'}}>Amount </label>
                    <input type='int' for ={amount} onChange={(event)=>setAmount(event.target.value )}/><br/>
                    <label style={{paddingBottom:'1rem' ,paddingRight:'1em'}}>Category</label>

                    <select value = {category} onChange = {e => setCategory(e.target.value)}>
                            <option></option>
                            <option>Housing</option>
                            <option>Transportation</option>
                            <option>Food</option>
                            <option>Utilities</option>
                            <option>Medical & Healthcare</option>
                            <option>Saving, Investing, Debt Payments</option>
                            <option>Personal Spending</option>
                            <option>Entertainment</option>
                            <option>Miscellaneous</option>

                        </select><br/>
                    <button class="btn btn-primary" style={{margin:"10px",backgroundColor:"#fca311"}} >Add</button>
                    <button class="btn btn-primary" type="reset" value="Reset" style={{margin:"10px",backgroundColor:"#fca311"}}>Reset</button>
                    <button class="btn btn-primary" onClick={() => setIsOpen(false)} style={{margin:"10px",backgroundColor:"#fca311"}}>Close</button>
                    
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