import React from 'react'
import '../Estilos/Contador.css'

const Contador = ({numClics}) => {
  return (
    <div className='contador'>
        {numClics}
    </div>
  )
}

export default Contador