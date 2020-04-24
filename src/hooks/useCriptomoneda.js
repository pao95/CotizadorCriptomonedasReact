import React, {Fragment, useState} from 'react';

const useCriptomoneda = (label, stateInicial, opciones) =>{

    const [state, actualizarState] = useState(stateInicial);
    const SelectCripto = () => (
            <Fragment>
                <label>{label}
                </label>
                <select className="form-control" onChange={ e=> actualizarState(e.target.value)} value={state}>
                    <option value=" ">-Seleccione-</option>
                    {opciones.map(opcion => (
                        <option key={opcion.CoinInfo.Id} value ={opcion.CoinInfo.Name}>
                            {opcion.CoinInfo.Name}
                        </option>
                    ))}
                </select>
            </Fragment>
    );

    return[state, SelectCripto, actualizarState];
}

export default useCriptomoneda;
