import React, { Fragment, useState } from 'react';

import { Contenedor, ContenedorForm } from './styles';

import Header from './components/Header/Header';
import Form from './components/Form/Form';
import Resumen from './components/Resumen/Resumen';
import Resultado from './components/Resultado/Resultado';
import Spinner from './components/Spinner/Spinner';

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

   const [ spinner, setSpinner ] = useState(false);

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
                  setSpinner={setSpinner}
               />
               { spinner ? <Spinner /> : null }
               
               <Resumen
                  datos={datos}
               />
               { !spinner 
                  ?
                  <Resultado 
                  cotizacion={cotizacion}
                  />
                  : null
               }
            </ContenedorForm>
         </Contenedor>
      </Fragment>
   )
}

export default App
