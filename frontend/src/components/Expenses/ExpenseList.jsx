import React, { useState, useEffect } from 'react';
import axios from "axios";
import useAuth from "../../hooks/useAuth";



const ExpenseList = (props) => {


    return ( 
        
        <table class="table table-striped">
            <thead>
                <tr>
                <th scope="col">Title</th>
                <th scope="col">Amount</th>
                <th scope="col">Category</th>
                </tr>
            </thead>
            <tbody>
                {props.expense.map((el)=>{
                    return(
                        <tr>
                        <td>{el.title.toUpperCase()}</td>
                        <td>{el.amount}</td>
                        <td>{el.category.toUpperCase()}</td>                
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