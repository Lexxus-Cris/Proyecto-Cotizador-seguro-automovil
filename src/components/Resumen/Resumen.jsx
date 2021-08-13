import React, { Fragment } from 'react'

const Resumen = ({datos}) => {

   // extraemos de datos

   const { marca, modelo, plan } = datos;

   if (marca === '' || modelo === '' || plan === '') {
      return null;
   };

   return (
      <Fragment>
         <h2>Resumen de cotizacion</h2>
         <ul>
            <li>Marca: </li>
            <li>Modelo: </li>
            <li>Plan: </li>
         </ul>
      </Fragment>
   )
}

export default Resumen
