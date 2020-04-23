import React, { Fragment } from 'react';
import useMoneda from '../hooks/useMoneda';


const Formulario = () => {

    const MONEDAS = [

        {codigo: "USD", nombre: "Dolar de Estados Unidos"},
        {codigo: "MXN", nombre: "Peso Mexicano"},
        {codigo: "EUR", nombre: "Euro"},
        {codigo: "GBP", nombre: "Libra Esterlina"},
    ]

    const  [moneda, SelectMonedas, ]= useMoneda("Elije tu moneda"," ", MONEDAS);
    return (  
        <Fragment>

<SelectMonedas ></SelectMonedas>
        <button type="button" class=" btn btn-color btn-lg btn-block">Calcular</button>

        </Fragment>
     
     );
}
 
export default Formulario;