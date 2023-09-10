/**
 *  
 * 1. Crear una funcion para recibir un arreglo
 * 2. Declarar una variable que contenga la longitud del arreglo
 * 3. Crear una variable 'Sumador' para almacenar la suma
 * 4. Crar una variable 'promedio' donde se almacena la media del arreglo
 * 5. Crear un ciclo desde 0 hasta n-1
 * 6. Asignar a sumador la suma de si mismo mas el valor del arreglo en esa iteracion
 * 7. Asignar a promedio el valor de la division de sumador entre la longitud del arreglo
 * 8. Regresar el promedio
 * 
 * promedioArreglo(A[0 .. n-1])
 * // input: Array A[0 .. n-1] A[i] E Z
 * // output: the average of an Array
 * largo <- Arr.length
 * sumador <- 0
 * promedio <- 0
 * FOR i <- 0 TO largo - 1 DO:
 *   sumador <- sumador + Arr[i]
 * 
 * promedio <- sumador / largo
 * RETURN promedio
 * 
 */


function promedioArreglo(Arr){
    let largo = Arr.length;
    let sumador = 0;
    let promedio;

    for(let i = 0; i<Arr.length;i+=1){
        sumador += Arr[i];
    }
    
    promedio = sumador / largo;

    return promedio;
}

const Arr = [51, 23, 92, 10, 7, 23, 44, 55];
const media = promedioArreglo(Arr);
console.log(`El promedio del arreglo es: ${media}`);
