import React, { Fragment, useState } from 'react';

import { Contenedor, ContenedorForm } from './styles';

import Header from './components/Header/Header';
import Form from './components/Form/Form';
import Resumen from './components/Resumen/Resumen';
import Resultado from './components/Resultado/Resultado';



const App = () => {
   
   const [ resumen, setResumen ] = useState({
      cotizacion: 0,
      datos: {
         marca: '',
         modelo: '',
         plan: ''
      }
   });

   // extraer datos
   const { datos } = resumen;
   
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
            </ContenedorForm>
         </Contenedor>
      </Fragment>
   )
}

export default App
