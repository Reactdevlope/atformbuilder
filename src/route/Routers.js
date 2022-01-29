import {BrowserRouter,Routes,Route,Link} from 'react-router-dom'

import Site from '../site/Site'
import Home from '../site/Home'
export default function Routers()
{
    return(

       <BrowserRouter>
       <Routes>
           <Route path='/' element={<Site/>}>
               <Route path='home' element={<Home/>}/>

           </Route>
       </Routes>
       </BrowserRouter>
    )

}