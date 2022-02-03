import react from "react"
import pic from '../pic/logo.png'
import '../Css/first_login.css'

export default function Form_pre1()
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
                            <i className="fs-4 bi-grid"></i> <span className="ms-1 d-none d-sm-inline ">LogOut</span> </a>   
                   
                    </li>   
                </ul>
                <hr/>  
            </div>
    
            </div>
            
            <div className='col-6 rounded'>
            <div className=" text-center div  mt-3 ">
            <label for="exampleInputEmail1" className="form-label div   text-white"> FORM NAME FORM FIELDS</label>  
               </div>
               <form >
               <div className="mb-3   text-white div2 ">
    <label for="exampleInputEmail1" className="form-label">Generates Link</label>
    <input type="email" className="form-control " id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <label for="exampleInputEmail1" className="form-label">Create Custome Link</label>
    <input type="email" className="form-control " id="exampleInputEmail1" aria-describedby="emailHelp"/>
   
  <div>
  </div>
<hr className=' border-5 border-top border-secondary' />
<div className="d-grid  col-8 mx-auto ">
  <button className="btn div mb-3" type="button">SAVE LINK</button>
  <button className="btn div mb-3" type="button">PUBLISH LINK</button>
 
</div>
</div>
</form>
<div className='row'>
            <div className='col-2'></div>
            </div>
          </div>
            </div>
        </div> 
        </div>
        
    )
}