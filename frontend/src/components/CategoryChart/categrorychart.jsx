import React, { useState, useEffect } from 'react';
import {Chart} from "react-google-charts"


const CategoryChart = ({expenses}) => {
    console.log("expenses",expenses);

    let onlyCategoies = expenses.filter(el=>el.category).map(el=>el.category)
    console.log("Categroy",onlyCategoies)

    

    let onlyAmount = expenses.filter(el=>el.category).map(el=>el.amount)
    console.log("Amount",onlyAmount)


    

    let amountUnderHousing = expenses.filter(el=>el.category==="Housing").map(el=>el.amount)
    console.log("Amounts under Housing",amountUnderHousing)

    let sumOfHousing = amountUnderHousing.reduce((a,b)=>{
        return a+b;
    },0);
    console.log("sum amounts under Housing",sumOfHousing)


    let amountUnderTransportation = expenses.filter(el=>el.category==="Transportation").map(el=>el.amount)
    console.log("Amounts under Transformation",amountUnderTransportation)

    let sumOfTransportation = amountUnderTransportation.reduce((a,b)=>{
        return a+b;
    },0);
    console.log("sum amounts under Transformation",sumOfTransportation)


    let amountUnderFood = expenses.filter(el=>el.category==="Food").map(el=>el.amount)
    console.log("Amounts under Food",amountUnderFood)

    let sumOfFood = amountUnderFood.reduce((a,b)=>{
        return a+b;
    },0);
    console.log("sum amounts under Food",sumOfFood)


    let amountUnderUtility = expenses.filter(el=>el.category==="Utility").map(el=>el.amount)
    console.log("Amounts under Utility",amountUnderUtility)

    let sumOfUtility = amountUnderUtility.reduce((a,b)=>{
        return a+b;
    },0);
    console.log("sum amounts under Utility",sumOfUtility)


    let amountUnderInsurance = expenses.filter(el=>el.category==="Insurance").map(el=>el.amount)
    console.log("Amounts under Insurance",amountUnderInsurance)

    let sumOfInsurance = amountUnderInsurance.reduce((a,b)=>{
        return a+b;
    },0);
    console.log("sum amounts under Insurance",sumOfInsurance)


    let amountUnderMedicalandHealthcare = expenses.filter(el=>el.category==="Medical & Healthcare").map(el=>el.amount)
    console.log("Amounts under Food",amountUnderMedicalandHealthcare)

    let sumOfMedicalandHealthcare = amountUnderMedicalandHealthcare.reduce((a,b)=>{
        return a+b;
    },0);
    console.log("sum amounts under Medical and Healthcare",sumOfMedicalandHealthcare)


    let amountUnderSavingInvestingDebt = expenses.filter(el=>el.category==="Saving, Investing, Debt Payments").map(el=>el.amount)
    console.log("Amounts under Saving, Investing, Debt Payments",amountUnderSavingInvestingDebt)

    let sumOfSavingInvestingDebt = amountUnderSavingInvestingDebt.reduce((a,b)=>{
        return a+b;
    },0);
    console.log("sum amounts under Saving Investing Debt",sumOfSavingInvestingDebt)


    let amountUnderPersonalSpending = expenses.filter(el=>el.category==="Personal Spending").map(el=>el.amount)
    console.log("Amounts under Personal Spending",amountUnderPersonalSpending)

    let sumOfPersonalSpending = amountUnderSavingInvestingDebt.reduce((a,b)=>{
        return a+b;
    },0);
    console.log("sum amounts under Personal Spending",sumOfPersonalSpending)


    let amountUnderEntertainment = expenses.filter(el=>el.category==="Entertainment").map(el=>el.amount)
    console.log("Amounts under Entertainment",amountUnderEntertainment)

    let sumOfEntertainment = amountUnderEntertainment.reduce((a,b)=>{
        return a+b;
    },0);
    console.log("sum amounts under Entertainment",sumOfEntertainment)


    let amountUnderMiscellaneous = expenses.filter(el=>el.category==="Miscellaneous").map(el=>el.amount)
    console.log("Amounts under Miscellaneous",amountUnderMiscellaneous)

    let sumOfMiscellaneous = amountUnderMiscellaneous.reduce((a,b)=>{
        return a+b;
    },0);
    console.log("sum amounts under Miscellaneous",sumOfMiscellaneous)

    



    function generateDateForChart(){

        // let newdata = unique.map(cat => {

        //     return[cat, 10,"red"]
        // })
        // console.log("newdata", newdata)

        const data = [
            ["Category", "$$$", { role: "style" }],
            ["Housing", sumOfHousing, "#14213d"],
            ["Transportation", sumOfTransportation,  "#14213d"],
            ["Food", sumOfFood,  "#14213d"],
            ["Utility", sumOfUtility,  "#14213d"],
            ["Insurance", sumOfInsurance,  "#14213d"],
            ["Medical & Healthcare", sumOfMedicalandHealthcare,  "#14213d"],
            ["Saving, Investing, Debt Payment", sumOfTransportation,  "#14213d"],
            ["Personal Spending", sumOfPersonalSpending,  "#14213d"],
            ["Entertainment", sumOfEntertainment,  "#14213d"],
            ["Miscellaneous", sumOfMiscellaneous,  "#14213d"],
            // ...newdata
          ];
          return data
    }

     
    return (
        <div style={{backgroundColor:"#14213d"}}>
            <h1 style={{textAlign:"center", marginTop:"50px",color:"#fca311"}}>Category Chart</h1>
            <h3 style={{textAlign:"center", marginTop:"30px",color:"white"}}>See where your money's going</h3>
            <Chart  style={{backgroundColor:"#14213d"}} chartType="ColumnChart" width="100%" height="400px" data={generateDateForChart()} />
        </div> );
}
 
export default CategoryChart;


// Below is how to remove duplicated from a list
//     uniq = [...new Set(array)];


    // let filteredList2 = expenses.map(el=>el.category+ " " + el.amount)
    // console.log("Category and Amount",filteredList2)



    // let unique = [...new Set(onlyCategoies)];
    // console.log("unique",unique)
