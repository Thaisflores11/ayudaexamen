import React from 'react'
import './Styles/Carta.css'
function Carta(props) {
    const carta=props.carta;
    const imgcheck=carta.imgcheck;
    return (
        <section >
            <img src={carta.imgurll}  />
            <h2>{carta.titulo}</h2>
            <p>{carta.parrafo}</p>
            <div className='check'>
                <img className='imgg' src={carta.imgcheck} alt="" />
                <p className='checks'>
                    {carta.parrafo2}
                </p>
                
            </div>
            <div className='check'>
                <img className='imgg' src={carta.imgcheck} alt="" />
                <p className='checks'>
                    {carta.parrafo2}
                </p>
                
            </div>
            <div className='check'>
                <img className='imgg' src={carta.imgcheck} alt="" />
                <p className='checks'>
                    {carta.parrafo2}
                </p>
                
            </div>
            
        </section>
  )
}

export default Carta
