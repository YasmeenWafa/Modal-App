import React, {useState, useEffect} from 'react';
import './App.css';
import Item from './Item';


function App() {

  const [items] = useState([{name: "item 1", details: "Hi I am yasmeen"}, {name: "item 2", details: "And you are?"}]);

  const [modal, setModal] = useState("");

  const itemsList = items.map((item, index)=> <Item key={index} name={item.name} details={item.details} setModal={setModal}/>)

  // const closeModal = (e) => {
  //  if(modal && e.target.tagName === "HTML"){
  //     setModal();
  //  }
  // }
  // useEffect(() => {
  //   window.addEventListener("click", closeModal);
  // });

  return (
    <div className="App">     
      {itemsList}   
      {modal}
    </div>
  );
}

export default App;
