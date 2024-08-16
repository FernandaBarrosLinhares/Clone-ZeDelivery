// import { useEffect, useState } from "react";
import Header from "../components/Header"
import Hero from '../components/Hero.jsx'
import Produtos from "../components/Produtos.jsx"
// import ModalComponent from "../components/Modal.jsx";
import './Home.css';


function Home(){

//     const [showModal, setShowModal] = useState(true);

//   const handleCloseModal = () => {
//     setShowModal(false);
//   };

//   useEffect(() => {
//     setShowModal(true);
//   }, []);


    return(
        <>
    {/* <div className="home-container">
      {showModal && <ModalComponent onClose={handleCloseModal} />}
      <h1>Bem-vindo à Página Home</h1>
      <p>Conteúdo da página...</p>
    </div> */}
        <Header/>
        <Hero/>
        <Produtos/>
        </>
    )
}

export default Home