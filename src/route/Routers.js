import {BrowserRouter,Routes,Route,Link} from 'react-router-dom'

import Site from '../site/Site'
import Home from '../site/Home'
import First_login from '../site/First_login'
import User_dash1 from '../site/User_dash1'
import Create_form from '../site/Create_form'
import User_dash_first_time from '../site/User_dash_first_time'
import User_dash2 from '../site/User_dash2'
import Form_pre from '../site/Form_pre'
import Form_pre1 from '../site/Form_pre1'
export default function Routers()
{
    return(

       <BrowserRouter>
       <Routes>
           <Route path='/' element={<Site/>}>
               <Route path='home' element={<Home/>}/>
               <Route path='firstlogin' element={<First_login/>}/>
                <Route path='userdash1' element={<User_dash1/>}/>
                <Route path='createform' element={<Create_form/>}/>
                <Route path='userdashfirsttime' element={<User_dash_first_time/>}/>
                <Route path='userdash2' element={<User_dash2/>}/>
                <Route path='formpre' element={<Form_pre/>}/>
                <Route path='formpre1' element={<Form_pre1/>}/>
           </Route>
       </Routes>
       </BrowserRouter>
    )

}