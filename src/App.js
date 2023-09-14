import './App.css';
import Boton from './Components/Boton';
import Imagen0 from './img/random-logo.png'
import Contador from './Components/Contador';
import { useState } from 'react';


function App() {
  const [numClics, setNumClics] = useState(0);
  
  const multiplicarNum = () =>{
    setNumClics(numClics * 2)
  }
  const restarNum = () => {
    setNumClics(numClics - 1);
  }

  const manejarClic = () => {
    setNumClics(numClics + 1);
  }

  const reiniciarContador = () => {
    setNumClics(0);
  }



  return (
    <div className="App">
      <div className='contenedor-principal'>
        <Contador
        numClics={numClics} />
        <Boton 
        texto='Clic'
        BotonDeClic={true}
        manejarClic={manejarClic}/>
        <Boton
        texto='resetear'
        BotonDeClic={false}
        manejarClic={reiniciarContador}/>
        <Boton
        texto='Restar 1'
        BotonDeClic={true}
        manejarClic={restarNum}/>
        <Boton
        texto='Multiplicar'
        BotonDeClic={false}
        manejarClic={multiplicarNum}/>
      </div>
    </div>
  );
}

export default App;
