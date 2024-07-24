import {BrowserRouter as Router} from 'react-router-dom'
import './App.css'
import RoutesComponent from './Routes/Routes'
import Login from './pages/Login'


function App() {

  const isAuthenticated = false
  return (
    <>
     <Router>
      {isAuthenticated ?
      (
        <div className='grid-container'>
          <Login/>
          
          <RoutesComponent/>

        </div>
      )
    :(
      <RoutesComponent />
    )}
     </Router>
    </>
  )
}

export default App
