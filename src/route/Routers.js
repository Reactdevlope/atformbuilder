import {BrowserRouter,Routes,Route,Link} from 'react-router-dom'

import Site from '../site/Site'
import Home from '../site/Home'
import First_login from '../site/First_login'
export default function Routers()
{
    return(

       <BrowserRouter>
       <Routes>
           <Route path='/' element={<Site/>}>
               <Route path='home' element={<Home/>}/>
               <Route path='firstlogin' element={<First_login/>}/>

           </Route>
       </Routes>
       </BrowserRouter>
    )

}