import React, { useState } from 'react';

import { Campo, Label, Select, InputRadio, Boton } from './styles';

const Form = () => {

   const [ datos, setDatos ] = useState({
      marca : '',
      modelo : '',
      plan : ''
   });

   // extraer valores

   const { marca, year, plan } = datos;

   // leer datos del formulario y los guardamos en el state
   const guardarDatos = e => {
      setDatos({
         ...datos,
         [e.target.name] : e.target.value 
      })
   }

   return (
      <form>
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
               value={year}
               onChange={guardarDatos}
            >
               <option value="">-- Seleccione el modelo --</option>
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
         <Boton type="button">Cotizar</Boton>
      </form>
   )
}

export default Form
