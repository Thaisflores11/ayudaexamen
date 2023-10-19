import React from 'react';
import './Styles/Opciones.css';
function Opciones(props) {
    const carta=props.carta;
    const imgcheck=carta.imgcheck;
    console.log(imgcheck);

    return (
    <div>
        <img src={carta.imgcheck} alt="" />
      
    </div>
  )
}

export default Opciones;

