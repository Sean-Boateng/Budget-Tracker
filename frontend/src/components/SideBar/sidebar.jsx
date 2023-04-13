import "./sidebar.css"

const Sidebar = (props) => {

    function myFunction() {
        document.getElementById("myDropdown").classList.toggle("show");
      }
      
      // Close the dropdown if the user clicks outside of it
      window.onclick = function(event) {
        if (!event.target.matches('.dropbtn')) {
          var dropdowns = document.getElementsByClassName("dropdown-content");
          var i;
          for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
              openDropdown.classList.remove('show');
            }
          }
        }
      }
    return ( 


            <div class="dropdown">
                <button onClick={myFunction} class="dropbtn btn btn-success" style={{backgroundColor:"#fca311"}}>Projects</button>
                <div id="myDropdown" class="dropdown-content">
                {props.project.map((el)=>{
                        return(
                            <div onClick={()=>{props.projectid(el.id); props.budget(el.budget); props.deleteid(el.id)}}>
                                <section>                                
                                    {el.id} {el.name}                                                         
                                </section>
                            </div>
                        );
                    })}
                    {/* <section>Home</section>
                    <section>Home</section>
                    <section>Home</section> */}
                </div>
            </div>


        // <div>
        //     <table>
        //         <thead>
        //             <tr>
        //                 <th>Projects</th>
        //             </tr>
        //         </thead>
        //         <tbody>
        //             {props.project.map((el)=>{
        //                 return(
        //                     <tr onClick={()=>{props.projectid(el.id); props.budget(el.budget); props.deleteid(el.id)}}>
        //                         <td>                                
        //                             {el.id} {el.name}                                                         
        //                         </td>
        //                     </tr>
        //                 );
        //             })}
        //         </tbody>
        //     </table>

            
        // </div>
     );


}
export default Sidebar;

