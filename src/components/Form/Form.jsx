import React from 'react';

import { Campo, Label, Select, InputRadio } from './styles';

const Form = () => {
   return (
      <form>
         <Campo>
            <Label htmlFor="">Marca</Label>
            <Select name="marca" id="">
               <option value="">-- Seleccione la marca del auto --</option>
               <option value="mercedesbenz">Mercedes-Benz</option>
               <option value="mini">Mini</option>
               <option value="chevrolet">Chevrolet</option>
               <option value="hyundai">Hyundai</option>
            </Select>
         </Campo>
         <Campo>
            <Label htmlFor="">Año</Label>
            <Select name="modelo" id="">
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
            /> Básico
            <InputRadio
               type="radio"
               name="plan"
               value="intermedio"
            />Intermedio
            <InputRadio
               type="radio"
               name="plan"
               value="completo"
            />Completo
         </Campo>
         <button type="button">Cotizar</button>
      </form>
   )
}

export default Form
