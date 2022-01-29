import  react from 'react'

export default function Home()
{
    return(
    
       
        <div className="container">
        <div className="row">
        
          
        <p className="text-center">MAKE YOUR FROMS FOR FREE</p>
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-4 col-4 col-sm-2">
          
          <p className="text-start">Simple, Easy to Use, and Free Digital Business Card Design for Any Business </p> 
          <p className="text-start"> Create forms to collect information for your school, college, business and so on.</p>
        <p className="text-start">Get custom short links for free and share to collect information.</p>
        <p className="text-start">View collected information in tables</p>
        <p className="text-start">Export your collected data in excel format</p>
        <p className="text-start">Create unlimited forms with one account</p>
    
    <p className="text-justify"></p>
  </div>
                
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-8 col-8 col-sm-10  bg-dark border border-primary text-white">
               
          <div className=" text-center bg-primary mt-3">
            <label for="exampleInputEmail1" className="form-label   bg-primary text-white">START COLLECTING INFORMATION</label>  
               </div>
               <form>
  <div className="mb-3 ">
    <label for="exampleInputEmail1" className="form-label">Enter Your Name</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Enter Your EmailID</label>
    <input type="password" className="form-control" id="exampleInputPassword1"/>
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <div className="d-grid gap-2 col-6 mx-auto mb-3">
  <button className="btn btn-primary" type="button">Signin or Signup</button>
  
</div>
 
</form>
          </div>
        </div>
      </div>
  
        
    )
}