import React from 'react';
import Modal from './Modal';

function Item({name, details, setModal}) {
    
    const renderModal = (details) =>{
       const modal = <Modal details={details} setModal={setModal}/>;
       setModal(modal);
    }
  return (
    <div className="item">
        <h1>{name}</h1>
        <p onClick={()=>renderModal(details)}>{details}</p>
    </div>
  );
}

export default Item;
