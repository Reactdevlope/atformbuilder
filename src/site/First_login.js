import react from "react"
import '../Css/home.css'
import pic from '../pic/logo.png'
import '../Css/first_login.css'

export default function First_login()
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
            <ul class="list-group">
  <li class="list-group-item  mb-3" >My Dashboard</li>
  <li class="list-group-item  mt-3">Saved forms</li>
  <li class="list-group-item mt-3">Create Form</li>
  <li class="list-group-item mt-3 mb-5">Logout</li>

</ul>
            </div>
            <div className='col-6'>
            <p className="text-start pf">Please check you E-mail for E-mail Verification Link and click to verify email and access your form builder dashboard.</p>
            <p className="text-start pf">If you haven’t receive verification email please click to </p>
            <p className="text-start pf2 mb-">Re-send E-mail</p>


            </div>
        </div>
          
        </div>
        </div>
    )
}