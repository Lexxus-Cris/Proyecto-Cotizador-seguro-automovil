import React from 'react';

import { Mensaje, ResultadoCotizacion, TextoCotizacion } from './styles';

const Resultado = ({cotizacion}) => {
   return (
      (cotizacion === 0 ) 
         ? <Mensaje>Elige marca, año y tipo de seguro</Mensaje> 
         : (
            <ResultadoCotizacion>
               <TextoCotizacion>El total es: $ {cotizacion}</TextoCotizacion>
            </ResultadoCotizacion>
         )
   )
}

export default Resultado
