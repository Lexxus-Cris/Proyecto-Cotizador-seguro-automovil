// Obtiene diferencia de anios
export function getDifferenceYear(year) {
   return new Date().getFullYear() - year;
}

// Calcula el total a pagar segun la marca
export function calcularMarca(marca) {
   let incremento = 0;

   switch (marca) {
      case 'hyundai':
         incremento = 1.05;
         break;
      case 'chevrolet':
         incremento = 1.15;
         break;

      case 'mini':
         incremento = 1.30;
         break;
      case 'mercedesbenz':
         incremento = 1.50;
         break;
      default:
         break;
   }
   return incremento;
}

//Calcular el tipo de plan

export function obtenerPlan(plan) {
   if (plan === 'basico') {
      return 1.20;
   } else if (plan === 'intermedio') {
      return 1.35;
   }
   return 1.50;
}

// Muesstra la primer letra mayuscula
export function primerMayuscula(texto) {
   return texto.charAt(0).toUpperCase() + texto.slice(1);
}