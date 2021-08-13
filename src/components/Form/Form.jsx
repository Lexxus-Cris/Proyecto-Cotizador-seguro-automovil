import React, { useState } from 'react';

import { Campo, Label, Select, InputRadio, Boton, Error } from './styles';

import { getDifferenceYear, calcularMarca, obtenerPlan } from '../../helper'

const Form = ({guardarResumen}) => {

   // Estado 
   const [ datos, setDatos ] = useState({
      marca : '',
      modelo : '',
      plan : ''
   });
   // Estado de error
   const [error, setError] = useState(false)

   // extraer valores

   const { marca, modelo, plan } = datos;

   // leer datos del formulario y los guardamos en el state
   const guardarDatos = e => {
      setDatos({
         ...datos,
         [e.target.name] : e.target.value 
      })
   }

   // Cuando el usuario presiona el boton enviar
   const handleSubmit = e => {
      e.preventDefault()
      if (marca.trim() === '' || modelo.trim() === '' || plan.trim() === '' ) {
         setError(true);
         return
      }

      setError(false);

      // Precio base del seguro 
      let precioBase = 2500;

      // obtener la diferencia de anios
      const diferencia =  getDifferenceYear(modelo);

      // por cada anio hay que restar el 3% del valor
      precioBase -= ((diferencia * 3) * precioBase) / 100;
      console.log(precioBase);

      
      // hyundai 5%
      // chevrolet 15%
      // mini 30%
      // mercedesbenz 50%
      let resultado = calcularMarca(marca) * precioBase;
      console.log(resultado);

      // Basico aumenta 20%
      // Intermedio  aumenta 35%
      // Completo aumenta 50%
      const incrementoPlan = obtenerPlan(plan);
      resultado = parseFloat(incrementoPlan * resultado).toFixed(2);
      // total

      guardarResumen({
         cotizacion: resultado,
         datos
      })
   }

   return (
      <form
         onSubmit={handleSubmit}
      >
         {error ? <Error>Todos los campos son obligatorios</Error> : null}
         <Campo>
            <Label htmlFor="">Marca</Label>
            <Select
               name="marca"
               value = {marca}
               onChange = {guardarDatos}
            >
               <option value="">-- Seleccione la marca del auto --</option>
               <option value="mercedesbenz">Mercedes-Benz</option>
               <option value="mini">Mini</option>
               <option value="chevrolet">Chevrolet</option>
               <option value="hyundai">Hyundai</option>
            </Select>
         </Campo>
         <Campo>
            <Label htmlFor="">Año</Label>
            <Select
               name="modelo"
               value={modelo}
               onChange={guardarDatos}
            >
               <option value="">-- Seleccione el modelo --</option>
               <option value="2022">2022</option>
               <option value="2021">2021</option>
               <option value="2020">2020</option>
               <option value="2019">2019</option>
               <option value="2018">2018</option>
               <option value="2017">2017</option>
               <option value="2016">2016</option>
               <option value="2015">2015</option>
               <option value="2014">2014</option>
               <option value="2013">2013</option>
               <option value="2012">2012</option>
            </Select>
         </Campo>
         <Campo>
            <Label htmlFor="">Plan</Label>
            <InputRadio
               type="radio"
               name="plan"
               value="basico"
               checked={plan === "basico"}
               onChange={guardarDatos}
            /> Básico
            <InputRadio
               type="radio"
               name="plan"
               value="intermedio"
               checked={plan === "intermedio"}
               onChange={guardarDatos}
            />Intermedio
            <InputRadio
               type="radio"
               name="plan"
               value="completo"
               checked={plan === "completo"}
               onChange={guardarDatos}
            />Completo
         </Campo>
         <Boton type="submit">Cotizar</Boton>
      </form>
   )
}

export default Form
