import React, { Fragment, useEffect, useState } from 'react';
import useMoneda from '../hooks/useMoneda';
import useCriptomoneda from '../hooks/useCriptomoneda';
import axios from 'axios';
import Error from './Error'

const Formulario = ({guardarMoneda, guardarCriptomoneda}) => {

    const [listaCripto, guardarCriptomonedas] = useState([]);
    const [error, guardarError] = useState(false);

    const MONEDAS = [

        {codigo: "USD", nombre: "Dolar de Estados Unidos"},
        {codigo: "MXN", nombre: "Peso Mexicano"},
        {codigo: "EUR", nombre: "Euro"},
        {codigo: "GBP", nombre: "Libra Esterlina"},
    ]

    const  [moneda, SelectMonedas, ]= useMoneda("Elije tu moneda", ' ', MONEDAS);
    const [criptomoneda, SelectCripto] = useCriptomoneda("Elije tu criptomoneda", ' ', listaCripto);

    //ejecutar llamado a la api 

    useEffect(() => {
        const consultarApi = async() => {
                const url = "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD";
                const result = await axios.get(url);

                guardarCriptomonedas(result.data.Data)
            }   
            consultarApi();
    }, []);

const cotizarMoneda = e =>{
    e.preventDefault();

    if(moneda === ' ' || criptomoneda === ' '){
       
        guardarError(true);
        return;
    }
    guardarError(false);

    guardarMoneda(moneda)
    guardarCriptomoneda(criptomoneda)
}



    return (  
        <form onSubmit= {cotizarMoneda}>

            {error ? <Error mensaje="Se deben completar todos los campos!"></Error> : null}

        <SelectMonedas ></SelectMonedas>
             <SelectCripto></SelectCripto>
        <button type="submit"  className=" btn btn-color btn-lg btn-block">Calcular</button>

        </form>
     
     );
}
 
export default Formulario;