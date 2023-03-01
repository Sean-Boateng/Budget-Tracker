import React, { useState, useEffect } from 'react';
import axios from "axios";
import useAuth from "../../hooks/useAuth";

import { useNavigate } from 'react-router-dom';
import Sidebar from '../SideBar/sidebar';
import ExpenseList from '../Expenses/ExpenseList';
import AddProject from '../Add Project/AddProject';


const LandingPage = (props) => {
    const [project,setProject] = useState([])
    // const [projectid,setProjectid] = useState('')
    const [expense,setExpense] = useState([])
    const [saveid,setSaveid] = useState([])
    const [displayform,setDisplayForm] = useState([])
    const [user, token] = useAuth();
    const navigate = useNavigate()
    

   



    useEffect(() => {
        getAllProjects();
        getProjectExpenses();
        
      }, [token])

      async function getAllProjects (props){
        try {
          let response = await axios.get("http://127.0.0.1:8000/api/project/", {
            headers: {
              Authorization: "Bearer " + token,
            },
          });
          setProject(response.data);
          console.log(response.data)
        } catch (error) {
          console.log(error.response.data);
        }
      };

      async function getProjectExpenses(projectid){
        try {
          let response = await axios.get(`http://127.0.0.1:8000/api/project/${projectid}/expense/all`, {
            headers: {
              Authorization: "Bearer " + token,
            },
          });
          setExpense(response.data);
          setSaveid(projectid)
        } catch (error) {
          console.log(error.response.data);
        }
      };

      async function AddExpense(newEntry){
        try {
          let response = await axios.post(`http://127.0.0.1:8000/api/project/${saveid}/expense/all`,newEntry, {
            headers: {
              Authorization: "Bearer " + token,

            },
          } );
          
        } catch (error) {
          console.log(error.response.data);
        }
        
      };
      
     




    return ( 
      <div>
        <Sidebar project = {project} projectid = {getProjectExpenses} />
        <ExpenseList expense = {expense}/>
        
        


        {displayform ? <button onClick={()=>setDisplayForm(!displayform)}>Add </button>: <AddProject add = {AddExpense}/>}<br/>
              {/* <button >Add New Card</button> */}


      </div>
     );
}
// addExpense = {AddExpense}
 
export default LandingPage;

    // async function getAllExpenses(){
    //     let response = await axios.get(`http://127.0.0.1:8000/api/bi/`)
    //     console.log(response)
    // }
    // function sendToExpenseList(){
    //   navigate("/explist", {state :{projectid:projectid}})
    // }


     // <div className='row' style={{display:'flex', jusiftyContent:'space-evenly'}}>
        //   <div>
        //     {project.map((el)=>{
        //         return(
        //             <div>
        //                 {el.name}
        //             </div>
        //         )
        //     })}
        //   </div>
        //   <div>
        //   {project.map((el)=>{
        //         return(
        //             <div>
        //                 {el.budget}
        //             </div>
        //         )
        //     })}
        //   </div>
        // </div>