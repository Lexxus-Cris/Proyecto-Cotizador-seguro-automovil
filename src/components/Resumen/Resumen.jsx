import React, { Fragment } from 'react';

import { ContenedorResumen } from './styles';

import { primerMayuscula } from '../../helper';

const Resumen = ({datos}) => {

   // extraemos de datos

   const { marca, modelo, plan } = datos;

   if (marca === '' || modelo === '' || plan === '') {
      return null;
   };

   return (
      <ContenedorResumen>
         <h2>Resumen de cotizacion</h2>
         <ul>
            <li>Marca: {primerMayuscula(marca)}</li>
            <li>Modelo: {modelo}</li>
            <li>Plan: {primerMayuscula(plan)}</li>
         </ul>
      </ContenedorResumen>
   )
}

export default Resumen
