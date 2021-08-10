import React from 'react'

const Form = () => {
   return (
      <form>
         <div>
            <label htmlFor="">Marca</label>
            <select name="marca" id="">
               <option value="">-- Seleccione la marca del auto --</option>
               <option value="mercedesbenz">Mercedes-Benz</option>
               <option value="mini">Mini</option>
               <option value="chevrolet">Chevrolet</option>
               <option value="hyundai">Hyundai</option>
            </select>
         </div>
         <div>
            <label htmlFor="">Año</label>
            <select name="modelo" id="">
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
            </select>
         </div>
         <div>
            <label htmlFor="">Plan</label>
            <input
               type="radio"
               name="plan"
               value="basico"
            /> Básico
            <input
               type="radio"
               name="plan"
               value="intermedio"
            />Intermedio
            <input
               type="radio"
               name="plan"
               value="completo"
            />Completo
            <button type="button">Cotizar</button>
         </div>
      </form>
   )
}

export default Form
