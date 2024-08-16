import {BrowserRouter as Router} from 'react-router-dom'
import './App.css'
import {useState} from 'react'
import RoutesComponent from './Routes/Routes'
import Login from './pages/Login'
import Modal from './components/Modal'
import Produtos from './components/Produtos'

function App() {

  const [showModal, setShowModal] = useState(true);
  const [isAdult, setIsAdult] = useState(false);

  const handleConfirm = () => {
    setIsAdult(true);
    setShowModal(false);
  };

  const handleClose = () => {
    setIsAdult(false);
    setShowModal(false);
  };
  const isAuthenticated = false
  return (
    <>
     <Modal show={showModal} onClose={handleClose} onConfirm={handleConfirm} />
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
     {isAdult && <Produtos />}
    </>
  )
}

export default App
