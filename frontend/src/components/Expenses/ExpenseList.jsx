import React, { useState, useEffect } from 'react';
import axios from "axios";
import useAuth from "../../hooks/useAuth";



const ExpenseList = (props) => {

    


    return ( 
        <div>
            {props.expense.map((el)=>{
                return(
                    <tr>
                        <td>{el.title}</td>
                        <td>{el.amount}</td>
                        <td>{el.category}</td>                
                    </tr>
                )
            })}

        </div>
     );
}
 
export default ExpenseList;