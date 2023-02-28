const Sidebar = (props) => {


    return ( 
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Projects</th>
                    </tr>
                </thead>

                <tbody>
                    {props.project.map((el)=>{
                        return(
                            <tr onClick={()=>{props.projectid(el.id)}}>
                                <td>                                
                                    {el.id} {el.name}                                                         
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>

            
        </div>
     );


}
export default Sidebar;

