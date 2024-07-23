import {Routes,Route,Navigate} from 'react-router-dom'
import Signin from '../pages/Cadastros/Signin' 
import Signup from '../pages/Cadastros/Signup'
import Home from '../pages/Home/Home'
import Produtos from '../pages/Produtos/Produtos'


function RoutesComponent(){

    const isAuthenticated= true
    function loginRedirect(component) {
        if(isAuthenticated) {
          return <Navigate to='/home' replace/>
        }
    
        return component
    
      }

      return(
        <>
        <Routes>
      {/* Forma de fazer rota 1 */}
        <Route path='/login' element={loginRedirect(<Signin/>)}/>
        <Route path='cadastro' element={loginRedirect(<Signup/>)}/>
        {/* Outra forma de farota 1rota */}
        <Route path='/' Component={Home}/>
        <Route path='/produtos' Component={Produtos}/>
     </Routes>
        </>
      )
    
}

export default RoutesComponent