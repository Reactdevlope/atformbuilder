import react from "react"
import pic from '../pic/logo.png'
import '../Css/first_login.css'
import { Link } from "react-router-dom"

export default function Create_form()
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
          <a className="nav-link active" aria-current="page" href="/home">LogOut</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
            </div>
            </div>
            </div>
            
        <div className='container-fluid'> 
        <div className='row'>
            <div className='col-4'>
     
            <div className="d-flex flex-column align-items-start align-items-sm-start px-3 pt-2 text-white min-vh-100">
            
                <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                    <li className="nav-item">
                    <a className="nav-link a" aria-current="page"  href="/userdash1">My Dashboard</a>
                    </li>
                    <li>
                    <a className="nav-link a" aria-current="page"  href="/createform">Save Forms </a>
                    </li>
                    <li>
                    <a className="nav-link a" aria-current="page"  href="/createform">Create Forms</a> 
                    </li>
                    <li><a className="nav-link a" aria-current="page"  href="/home">LogOut</a>
                        </li>
                </ul>
                <hr/>  
            </div>
    
            </div>
            
            <div className='col-6 rounded'>
            <div className=" text-center div  mt-3 "><Link to="/home">
            <label for="exampleInputEmail1" className="form-label div   text-white">CREATE FROM</label>  </Link>
               </div>
               <form >
               <div className="mb-3  text-white div2 ">
    <label for="exampleInputEmail1" className="form-label justify-content-centre">Field Tittle</label>
    <input type="email" className="form-control " id="exampleInputEmail1" aria-describedby="emailHelp"/>
  
  <div className="form-outline mb-4">
  <label className="form-label" for="form4Example2">Field Description</label>
    <textarea className="form-control" id="form4Example3" rows="4"></textarea>
   
  </div>
<hr className=' border-5 border-top border-secondary' />
<div className="d-grid  col-8 mx-auto ">
  <button className="btn div mb-3" type="button">Save and create forms</button>
</div>
</div> 
        <div className='row'>
            <div className='col-2'></div>
            </div>
</form>

          </div>
            </div>
        </div> 
        </div>
        
    )
}