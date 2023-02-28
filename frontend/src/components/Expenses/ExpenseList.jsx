import React, { useState, useEffect } from 'react';



const ExpenseList = (props) => {




    return ( 
        <div>
            {props.expense.map((el)=>{
                return(
                    <div>
                        {el.title}
                        {el.amount}
                        {el.category}
                    </div>
                )
            })}

        </div>
     );
}
 
export default ExpenseList;