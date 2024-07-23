import {BrowserRouter as Router} from 'react-router-dom'
import './App.css'
import RoutesComponent from './Routes/Routes'


function App() {

  const isAuthenticated = true
  return (
    <>
     <Router>
      {isAuthenticated ?
      (
        <div className='gridcontainer'>
          
          
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
