import React, { useState, useEffect } from 'react';
import axios from "axios";
import useAuth from "../../hooks/useAuth";



const ExpenseList = (props) => {


    return ( 
        
        <table class="table table-striped ">
            <thead>
                <tr>
                <th style={{textAlign:"center"}} scope="col-4">Title</th>
                <th style={{textAlign:"center"}} scope="col-4">Amount</th>
                <th style={{textAlign:"center"}} scope="col-4">Category</th>
                </tr>
            </thead>
            <tbody className='container'>
                {props.expense.map((el)=>{
                    return(
                        <tr>
                        <td style={{textAlign:"center"}}>{el.title.toUpperCase()}</td>
                        <td style={{textAlign:"center"}}>${el.amount.toLocaleString("en-US")}</td>
                        <td style={{textAlign:"center"}}>{el.category.toUpperCase()}</td>                
                    </tr> 
                    )
                })}
            </tbody>

        </table>
     );
}
 
export default ExpenseList;

{/* <div>
            {props.expense.map((el)=>{
                return(
                    <tr>
                        
                        <td>{el.title}</td>
                        <td>{el.amount}</td>
                        <td>{el.category}</td>                
                    </tr>
                )
            })}

        </div> */}