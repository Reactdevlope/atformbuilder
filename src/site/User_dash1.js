import react from "react"
import '../Css/home.css'
import pic from '../pic/logo.png'
import '../Css/first_login.css'
import User_dash1 from '../site/User-dash1'

export default function User_dash1()
{
    return(
    <div>
        <div className='container-fluid'> 
        <div className='row'>
            <div className='col-4'>
            <img className="img rounded  d-block" src={pic} alt='o'></img>
            </div>
            <div className='col-8'>
            <nav className="navbar navbar-expand-lg navbar-light bg-light mt-3">
  <div className="container">
    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Welcome[user-name]</a>
        </li>
        <li className="nav-item pf">
          <a className="nav-link active" aria-current="page" href="#">LogOut</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
            </div>
            </div>
            </div>
            <div className='container'> 
        <div className='row'>
            <div className='col-4'>
            
            </div>
            <div className='col-8'>
            <p className="text-start fs-5  p">WELCOME TO ATFORMS FORM BUILDER</p>
            </div>
            </div>
            </div>
            
        <div className='container-fluid'> 
        <div className='row'>
            <div className='col-4'>
     
            <div className="d-flex flex-column align-items-start align-items-sm-start px-3 pt-2 text-white min-vh-100">
            
                <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                    <li className="nav-item">
                    <a href="#submenu1" data-bs-toggle="collapse" className="nav-link px-0 align-middle a">
                            <i className="fs-4 bi-house"></i> <span className="ms-1 d-none d-sm-inline a">My Dashboard</span>
                        </a>
                    </li>
                    <li>
                        <a href="#submenu1" data-bs-toggle="collapse" className="nav-link px-0 align-middle a">
                            <i className="fs-4 bi-speedometer2"></i> <span className="ms-1 d-none d-sm-inline">save forms</span> </a>
                    </li>
                    <li>
                        <a href="#submenu2" data-bs-toggle="collapse" className="nav-link px-0 align-middle a">
                            <i className="fs-4 bi-bootstrap"></i> <span className="ms-1 d-none d-sm-inline">Create Forms</span></a> 
                    </li>
                    <li>
                        <a href="#submenu3" data-bs-toggle="collapse" className="nav-link px-0 align-middle a ">
                            <i className="fs-4 bi-grid"></i> <span className="ms-1 d-none d-sm-inline">LogOut</span> </a>       
                    </li>   
                </ul>
                <hr/>  
            </div>
    
            </div>
            <div className='col-6'>
            <p className="text-start pf">Please check you E-mail for E-mail Verification Link and click to verify email and access your form builder dashboard.</p>
            <p className="text-start pf">If you haven’t receive verification email please click to </p>
            <p className="text-start pf2">Re-send E-mail</p>
            </div>
        </div> 
        </div>
        </div>
    )
}