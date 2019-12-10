import React, {useEffect, useRef} from 'react';

function Modal({details, setModal}) {

    const modalRef = useRef();
    const hideModal = () =>{
        setModal();
    }
    const closeModal = (e) => {
      if(!modalRef.current.contains(e.target)){
        setModal();
      }
    }
    useEffect (()=> {
      document.addEventListener('click', closeModal)
      return () => document.removeEventListener('click', closeModal);
      
    })
  return (
    <div className="modal" ref={modalRef}>
        <h1>{details}</h1>
        <button className="close" onClick={()=> hideModal()}>&times;</button>
    </div>
  );
}

export default Modal;
