import {Routes,Route,BrowserRouter,Navigate} from 'react-router-dom'
// import Signin from './pages/Cadastros/Signin'
import Signup from './pages/Cadastros/Signup'
import Produtos from './pages/Produtos/Produtos'
import Home from './pages/Home/Home'

import './App.css'


function App() {

  const isAuthenticated = false

  function loginRedirect(componente) {
    if(isAuthenticated) {
      return <Navigate to='/' replace/>
    }

    return componente

  }
 

  return (
    <>
     <BrowserRouter>
     <Routes>
      {/* Forma de fazer rota 1 */}
        <Route path='/login' element={loginRedirect(<Home/>)}/>
        <Route path='cadastro' element={loginRedirect(<Signup/>)}/>
        {/* Outra forma de farota 1rota */}
        <Route path='/' Component={Home}/>
        <Route path='/produtos' Component={Produtos}/>
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
