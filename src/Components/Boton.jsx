import React from 'react'
import '../Estilos/Boton.css'

const Boton = ({texto, BotonDeClic, manejarClic}) => {
  return (
    <button 
    className={BotonDeClic ? 'boton-clic' : 'boton-reiniciar'}
    onClick={manejarClic}>
        {texto}
    </button>
  )
}

export default Boton;