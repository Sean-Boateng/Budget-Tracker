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
                <button onClick={myFunction} class="dropbtn btn btn-success" style={{backgroundColor:"#fca311", border:"#fca311"}}>Envelopes</button>
                <div id="myDropdown" class="dropdown-content">
                {props.project.map((el)=>{
                        return(
                            <div onClick={()=>{props.projectid(el.id); props.budget(el.budget); props.deleteid(el.id); props.setbudgetname(el.name) }}>
                                <section style={{background:"#8d99ae",marginTop:"5px", borderRadius:"5px"}}>                                
                                     {el.name}                                                         
                                </section>
                            </div>
                        );
                    })}
                    
                </div>
            </div>


       
     );


}
export default Sidebar;

