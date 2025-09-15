// Consigna: Multiplicar todos los elementos de un array por un número
// Nivel: 4

function multiplicarArray(arr, num) {
    return arr.map(x => x * num);
}
console.log(multiplicarArray([1, 2, 3], 3));

// Explicación: Usa map para multiplicar cada elemento.