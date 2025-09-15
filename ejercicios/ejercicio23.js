// Consigna: Sumar solo los números positivos de un array
// Nivel: 4

function sumaPositivos(arr) {
    return arr.filter(x => x > 0).reduce((a, b) => a + b, 0);
}
console.log(sumaPositivos([-1, 2, 3, -4, 5]));

// Explicación: Filtra positivos y suma con reduce.