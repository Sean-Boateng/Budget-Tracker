import React, { useState, useEffect } from 'react';
import axios from "axios";
import useAuth from "../../hooks/useAuth";

import { useNavigate } from 'react-router-dom';
import Sidebar from '../SideBar/sidebar';
import ExpenseList from '../Expenses/ExpenseList';
import AddExpenses from '../Expenses/AddExpenses';
import AddProject from '../Project/AddProject';
import "./landingpage.css"
import DisplayBudget from '../Project/DisplayBudget';




const LandingPage = (props) => {
    const [project,setProject] = useState([])
    const [expense,setExpense] = useState([])
    const [saveid,setSaveid] = useState([])
    const [expenseform,setExpenseForm] = useState([])   
    const [projectform,setProjectForm] = useState([])   
    const [pbudget,setPBudget] = useState([])    
    const [sum, setSum] = useState([])
    const [deleteid, setDeleteId] = useState([])
    const [user, token] = useAuth();
    const navigate = useNavigate()
    

   



    useEffect(() => {
        getAllProjects();
        // getProjectExpenses();
      }, [token])

      async function getAllProjects (props){
        try {
          let response = await axios.get(`http://127.0.0.1:8000/api/project/all`, {
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


      // function mapProjects(){
      //   let response = project.map(function(el){
      //     return{
      //       id:el.id,
      //       name:el.name,
      //       budget:el.budget
      //     }
      //   })
      //   setPBudget(response.data)
      //   console.log(response.data)
      // }


      async function addProject (newEntry){
        try {
          let response = await axios.post(`http://127.0.0.1:8000/api/project/all`, newEntry,{
            headers: {
              Authorization: "Bearer " + token,
            },
          });
          console.log(response.data)
          getAllProjects();
        } catch (error) {
          console.log(error.response.data);
        }
      };

      // async function deleteMember(id){
      //   let response = await axios.delete(`http://127.0.0.1:8000/api/project/3/`);
      //   if (response.status === 204){
      //       return('Delete Successful')
      //   } }

      async function deleteProject (){
        try {
          let response = await axios.delete(`http://127.0.0.1:8000/api/project/${deleteid}/`,{
            headers: {
              Authorization: "Bearer " + token,
            },
          });
          console.log(response.data)
          getAllProjects();
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
          console.log(response.data)
          setSaveid(projectid)
          
          let newresponse = (response.data).map(function(el){
            return{
              amount:el.amount
            } 
          })
          console.log(newresponse);
          sumOfExpenses(newresponse);
          
        } 
        catch (error) {
          console.log(error.response.data);
        }
      };


      function sumOfExpenses(entry){
        let total = 0;
        for (let i = 0; i < entry.length; i++) {
          total += entry[i].amount
        }
        console.log(total)
        setSum(total)
      }


      async function addExpense(newEntry){
        try {
          let response = await axios.post(`http://127.0.0.1:8000/api/project/${saveid}/expense/all`,newEntry, {
            headers: {
              Authorization: "Bearer " + token,
            },
          } );
          getProjectExpenses(saveid);
        } catch (error) {
          console.log(error.response.data);
        }
        
      };
  



    return ( 
      <div>



        <div className=' row page pagepic hover'>

            <div className=' ' style={{marginBottom:'20px'}}>
              <Sidebar project = {project} projectid = {getProjectExpenses} deleteid = {setDeleteId} budget = {setPBudget} />
                {console.log(pbudget)}
                {console.log(deleteid)}
              </div>
        </div> 

        <div className=' row page pagepic hover' >
              <div className='col-4'>
              <div className='casing'>
                <DisplayBudget budgetinfo = {pbudget.toLocaleString("en-US")} /> 
              </div>
              </div>

              <div className='col-4'>
                <div className='casing'>
                  ${(pbudget - sum).toLocaleString("en-US")} Remaining
                </div>
              </div>

              <div className='col-4'>
                <div className=' casing'>
                  ${sum.toLocaleString("en-US")} Spent
                </div>
              </div>
        </div>
            <div >
              <ExpenseList expense = {expense}/>
            </div>

       
        

        <div>
        {expenseform ? <button onClick={()=>setExpenseForm(!expenseform)}>Add Expense</button>: <AddExpenses addexpense = {addExpense}/>}<br/>
        </div>
        <div>
        {projectform ? <button onClick={()=>setProjectForm(!projectform)}>Add Project</button>: <AddProject addproject = {addProject}/>}
        </div>

        <button onClick={deleteProject}>Delete</button><br/>
        
        


      </div>
     );
}

 
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