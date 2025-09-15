// Nivel: 3
// Consigna: Obtener el menor de un array de números

function menorArray(arr) {
    return Math.min(...arr);
}
console.log(menorArray([5, 2, 8, 1]));

// Explicación: Utiliza Math.min y spread para encontrar el menor valor.