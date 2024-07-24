import {Routes,Route,Navigate} from 'react-router-dom'
import Signin from '../pages/Login' 
import Signup from '../pages/Signup'
import Home from '../pages/Home'
import Produtos from '../pages/Produtos'


function RoutesComponent(){

    const isAuthenticated= false
    
    function loginRedirect(component) {
        if(isAuthenticated) {
          return <Navigate to='/home' replace/>
        }
    
        return component
    
      }

      return(
        <>
        <Routes>
      {/* Forma de fazer rota 1  */}
        <Route path='/login' element={loginRedirect(<Signin/>)}/>
        <Route path='/cadastro' element={loginRedirect(<Signup/>)}/>
    
        {/* Outra forma de farota 1rota */}
        <Route path='/' Component={Home}/>
        <Route path='/home' Component={Home}/>
        <Route path='/produtos' Component={Produtos}/>
     </Routes>
        </>
      )
    
}

export default RoutesComponent