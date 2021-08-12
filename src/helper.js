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