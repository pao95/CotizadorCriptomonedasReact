import React from 'react';
import image from './cryptomonedas.png'
import Formulario from './components/Formulario';

function App() {
  return (
    <div className="container">
      <div className="contenido">
      <div className="row">
        <div className="col-sm">
          <img src={image}></img>
    </div>
        <div className="col-sm">
        <h1> Cotiza Criptomonedas</h1>   
        <Formulario></Formulario>

         </div>
      </div>
       
      </div>

    </div>
  );
}

export default App;
