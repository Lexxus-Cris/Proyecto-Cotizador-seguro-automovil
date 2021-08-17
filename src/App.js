import React, { Fragment, useState } from 'react';

import { Contenedor, ContenedorForm } from './styles';

import Header from './components/Header/Header';
import Form from './components/Form/Form';
import Resumen from './components/Resumen/Resumen';
import Resultado from './components/Resultado/Resultado';

const App = () => {

   // state en donde guardaremos el resumen de la cotizacion
   const [ resumen, setResumen ] = useState({
      cotizacion: 0,
      datos: {
         marca: '',
         modelo: '',
         plan: ''
      }
   });

   // extraer datos y cotizacion
   const { datos, cotizacion } = resumen;

   return (
      <Fragment>
         <Contenedor>
            <Header 
               titulo="Cotizador de seguros"
            />
            <ContenedorForm>
               <Form 
                  guardarResumen={setResumen}
               />
               <Resumen
                  datos={datos}
               />
               <Resultado 
               cotizacion={cotizacion}
               />
            </ContenedorForm>
         </Contenedor>
      </Fragment>
   )
}

export default App
