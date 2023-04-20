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
                <form onSubmit={handleSubmit} style={{marginLeft:"10px",color:"white"}}>
                    <label style={{paddingBottom:'1rem' ,paddingRight:'1em'}}>Description </label>
                    <input style={{backgroundColor:"white", color:"black", borderRadius:"5px", display:"block", maxHeight:"3.6em", lineHeight:"1.8em" }} type='string' for ={title} onChange={(event)=>setTitle(event.target.value )}/><br/>
                    <label style={{paddingBottom:'1rem' ,paddingRight:'1em'}}>Amount </label>
                    <input style={{backgroundColor:"white", color:"black", borderRadius:"5px"}} type='int' for ={amount} onChange={(event)=>setAmount(event.target.value )}/><br/>
                    <label style={{paddingBottom:'1rem' ,paddingRight:'1em'}}>Category</label>

                    <select value = {category} onChange = {e => setCategory(e.target.value)} style={{backgroundColor:"white", color:"black", }}>
                            <option></option>
                            <option>Housing</option>
                            <option>Transportation</option>
                            <option>Food</option>
                            <option>Utility</option>
                            <option>Medical & Healthcare</option>
                            <option>Saving, Investing, Debt Payments</option>
                            <option>Personal Spending</option>
                            <option>Entertainment</option>
                            <option>Miscellaneous</option>

                        </select><br/>
                    <button class="btn btn-primary" style={{margin:"10px",backgroundColor:"#fca311",border:"#fca311"}} >Add</button>
                    <button class="btn btn-primary" type="reset" value="Reset" style={{margin:"10px",backgroundColor:"#fca311",border:"#fca311"}}>Reset</button>
                    <button class="btn btn-primary" onClick={() => setIsOpen(false)} style={{margin:"10px",backgroundColor:"#fca311", border:"#fca311"}}>Close</button>
                    
                </form>
                :
                <div onClick={() => setIsOpen(true)} style={{display:"flex", justifyContent:"center", color:"white"}}>Add Expense</div>
                }

                {console.log(isopen)}


            
        </div>


    )
}

export default AddProject;

