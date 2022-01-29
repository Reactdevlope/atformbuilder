import  react from 'react'
import '../Css/home.css'
import pic from '../pic/logo.png'
export default function Home()
{
    return(

<div>
        <div className="container">
        <div className="row">
        
          <img className="img rounded mx-auto d-block" src={pic} alt='o'></img>
        <p className="text-center fs-1 p">MAKE YOUR FROMS FOR FREE</p>
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-4 col-4 col-sm-2">
          
          <p className="text-start fs-5">Simple, Easy to Use, and Free Digital Business Card Design for Any Business </p> 
          <p className="text-start fs-5"> Create forms to collect information for your school, college, business and so on.</p>
        <p className="text-start fs-5 ">Get custom short links for free and share to collect information.</p>
        <p className="text-start fs-5">View collected information in tables</p>
        <p className="text-start fs-5 ">Export your collected data in excel format</p>
        <p className="text-start fs-5 ">Create unlimited forms with one account</p>
            
  </div>
                
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-8 col-8 col-sm-10  bg-dark border div text-white">
               
          <div className=" text-center div  mt-3">
            <label for="exampleInputEmail1" className="form-label div   text-white">START COLLECTING INFORMATION</label>  
               </div>
               <form>
  <div className="mb-3 div2 ">
    <label for="exampleInputEmail1" className="form-label">Enter Your Name</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    
  </div>
  <div className="mb-3 div2">
    <label for="exampleInputPassword1" className="form-label">Enter Your EmailID</label>
    <input type="password" className="form-control" id="exampleInputPassword1"/>
  </div>
  <div className="mb-3 form-check div2">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <div className="d-grid gap-2 col-6 mx-auto mb-3 div2">
  <button className="btn div" type="button">Signin or Signup</button>
  
</div>
 
</form>
          </div>
        </div>
      </div>
      </div> 
        
    )
}