

import { Outlet,Link } from 'react-router-dom'

export default function Site()
{return(
    <div>
       <nav className="navbar navbar-light bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand"></a>
  </div>
</nav>

    
    
    
        <Outlet/>
        <footer>
        
        <p className="text-start">Devloped by-Arnav Techosys</p>
       
        <p className="text-end"> Powered By-ATJIONPVD LTD</p></footer>
    </div>

)
}