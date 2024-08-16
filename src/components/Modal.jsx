import './Modal.css'


const Modal = ({ show, onClose, onConfirm }) => {
  if (!show) {
    return null;
  }
  

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <img src="https://www.ze.delivery/_next/image?url=https%3A%2F%2Fcourier-images-web.imgix.net%2Fstatic%2Fimg%2Fsmall-logo.png%3Fauto%3Dcompress%2Cformat%26fit%3Dmax%26w%3D83%26h%3D83%26dpr%3D2%26fm%3Dpng&w=96&q=75" alt="logo Zé delivery" />
        <h2>Você tem mais de 18 anos?</h2>
        <div className="modal-btn">
          <button className='modal-btnY' onClick={onConfirm}>Sim</button>
          <button className='modal-btnN' onClick={onClose}>Não</button>
        </div>
      </div>
    </div>
  );
};

export default Modal