

import { Outlet} from 'react-router-dom'
import Css from '../Css/home.css'

export default function Site()
{return(
    <div>
       <nav className="navbar navbar-light bg-dark">
  <div className="container">
    <a className="navbar-brand"></a>
  </div>
</nav>
        <Outlet/>
      
        <footer >
          <div className='container'>
            <div className='row'>
            <hr className=' border-5 border-top border-dark' />
              <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-4 col-4 col-sm-2 text-start">Devloped by-Arnav Techosys</div>
              <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-4 col-4 col-sm-2 text-end">Powered By-ATJIONPVD LTD</div>
              </div>
          </div>
        </footer>
    </div>

)
}