import React from 'react'
import Select from 'react-select'
import "../SideBar/sidebar.css"

const Dropdown = () => {
  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]


  return (  
    <Select options={options} />
    // <button class="dropbtn btn btn-success"> Categories
    //   {options.map((el)=>{
    //     return(
    //       <div>
            
    //           {el.label}
            
    //       </div>
    //     )
    //   })}
    // </button>
  );
}
 
export default Dropdown;


