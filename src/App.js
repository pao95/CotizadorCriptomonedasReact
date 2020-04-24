import React, { useState, useEffect } from 'react';
import image from './cryptomonedas.png'
import Formulario from './components/Formulario';
import axios from 'axios';
import Cotizacion from './components/Cotizacion'
function App() {


  const [moneda, guardarMoneda] = useState(" ");
  const [criptomoneda, guardarCriptomoneda] = useState(" ");
  const [resultado, guardarResultado] = useState({});

  useEffect(() => {


    const cotizarCripto = async () => {
      if (moneda === " " || criptomoneda === " ") return


      const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`
      const resultado = await axios.get(url);
      guardarResultado(resultado.data.DISPLAY[criptomoneda][moneda])

    }

    cotizarCripto()


  }, [moneda, criptomoneda])

  return (
      <div className="contenido">
        <div className="row">
         
          <div className="col-sm">
            <img src={image}></img>
          </div>
          <div className="col-sm">
            <h1> Cotiza Criptomonedas</h1>
            <Formulario
              guardarMoneda={guardarMoneda}
              guardarCriptomoneda={guardarCriptomoneda}
            ></Formulario>
            <Cotizacion resultado={resultado}></Cotizacion>
          </div>
        </div>

      </div>

  );
}

export default App;
