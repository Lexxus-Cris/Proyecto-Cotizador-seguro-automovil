import React, { Fragment } from 'react';

import { Contenedor, ContenedorForm } from './styles';

import Header from './components/Header/Header';
import Form from './components/Form/Form';



const App = () => {
   return (
      <Fragment>
         <Contenedor>
            <Header 
               titulo="Cotizador de seguros"
            />
            <ContenedorForm>
               <Form />
            </ContenedorForm>
         </Contenedor>
      </Fragment>
   )
}

export default App
