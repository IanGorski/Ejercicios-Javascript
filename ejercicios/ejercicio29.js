// Consigna: Obtener el primer número impar de un array
// Nivel: 4

function primerImpar(arr) {
    return arr.find(x => x % 2 !== 0);
}
console.log(primerImpar([2, 4, 6, 7, 8]));

// Explicación: Busca el primer elemento impar.