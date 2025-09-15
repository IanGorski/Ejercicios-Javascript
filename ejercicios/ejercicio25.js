// Consigna: Obtener el promedio de un array de números
// Nivel: 4

function promedio(arr) {
    return arr.reduce((a, b) => a + b, 0) / arr.length;
}
console.log(promedio([2, 4, 6, 8]));

// Explicación: Suma los elementos y divide por la cantidad.