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
import CategoryChart from '../CategoryChart/categrorychart';
import Navbar from '../NavBar/NavBar';





const LandingPage = (props) => {
    const [project,setProject] = useState([])
    const [expense,setExpense] = useState([])
    const [saveid,setSaveid] = useState([])
    const [expenseform,setExpenseForm] = useState(2)   
    const [projectform,setProjectForm] = useState([])   
    const [pbudget,setPBudget] = useState([])    
    const [budgetname,setBudgetName] = useState([])    
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
          
          setExpense((response.data).reverse());
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



      async function addExpense(newEntry){
        try {
          let response = await axios.post(`http://127.0.0.1:8000/api/project/${saveid}/expense/all`,newEntry, {
            headers: {
              Authorization: "Bearer " + token,
            },

          } );
          alert("New Expense Added")
          getProjectExpenses(saveid);
        } catch (error) {
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
  



    return ( 
      <div>
        


        <div className=' row page pagepic hover'>
          <div className='navcss'>
              <div className=' ' style={{marginBottom:'20px', display:"flex", }}>
                <Sidebar project = {project} projectid = {getProjectExpenses} deleteid = {setDeleteId} budget = {setPBudget} setbudgetname = {setBudgetName} />
                  {console.log(pbudget)}
                  {console.log(deleteid)} 
                <AddProject addproject = {addProject}/> 
              </div>
              <h1 style={{color:"white"}}>{user.username}'s Expense Tracker!</h1>
              <div>
                <Navbar/>
              </div>
          </div>
            
        </div> 

        <div style={{textAlign:"Center", marginTop:"20px", marginBottom:"20px", fontSize:"45px", color:"#fca311"}}>
            {budgetname}
          </div>

        <div className=' row page pagepic hover' style={{marginBottom:"20px"}} >
              <div className='col-4'>
              <div className='casing' style={{ color:"white", backgroundColor:"#e5e5e5"}}>
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

       
        
        <div className='row' style={{display:"flex", justifyContent:"space-evenly", marginBottom:"30px", marginTop:"40px"}}>
            {/* <div className='col-4'>
               <AddProject addproject = {addProject}/>
            </div> */}

            <div className='col-6'>
              <AddExpenses addexpense = {addExpense} rerun = {getProjectExpenses} />
            </div>

            <div className='col-6' style={{display:"flex", justifyContent:"center", color:"white"}} onClick={deleteProject}>Delete This Envelope</div><br/>
        </div>

        <div>
          <ExpenseList expense = {expense}/>
        </div>
        
        
        <CategoryChart expenses={expense}/>

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