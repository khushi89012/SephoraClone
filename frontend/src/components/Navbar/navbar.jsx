

export const Navbar = ()=>{



    
    return (
        <div>

            < nav>
            
               {localStorage.getItem('user') ? `Welcome ${JSON.parse( localStorage.getItem('user')).name}` : 'Login'}
              
            </nav>

            <button onClick={()=>{
                localStorage.removeItem('user');
                window.location.reload();
            }   
            }>Logout</button>


          





            {/* <nav>
                {localStorage.getItem('user') ? `welcome ${JSON.parse(localStorage.getItem('user')).name}` : ""}
            </nav>
            <p
            onClick={()=>{
                localStorage.removeItem('user');
            }
            }
            >
                {localStorage.getItem('user') ? "LOGOUT" : "LOGIN"}

            </p>

           */}








          

            
                                       




        </div>

    )

}
