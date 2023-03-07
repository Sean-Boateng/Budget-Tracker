const DisplayBudget = (props) => {

    return ( 
        <div>
            {props.projectinfo.map((el)=>{
                console.log(props.projectinfo)
                return(
                    <div>
                        {el.name}
                    </div>
                )
            })}
        </div>
     );
}
 
export default DisplayBudget;