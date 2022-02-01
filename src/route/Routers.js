import {BrowserRouter,Routes,Route,Link} from 'react-router-dom'

import Site from '../site/Site'
import Home from '../site/Home'
import First_login from '../site/First_login'
import User_dash1 from '../site/User_dash1'
export default function Routers()
{
    return(

       <BrowserRouter>
       <Routes>
           <Route path='/' element={<Site/>}>
               <Route path='home' element={<Home/>}/>
               <Route path='firstlogin' element={<First_login/>}/>
                <Route path='userdash1' element={<User_dash1/>}/>

           </Route>
       </Routes>
       </BrowserRouter>
    )

}