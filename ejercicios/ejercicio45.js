// Nivel: 5
// Consigna: Mezclar (shuffle) un array

function mezclarArray(arr) {
    return arr.sort(() => Math.random() - 0.5);
}
console.log(mezclarArray([1, 2, 3, 4]));

// Explicación: Usa sort con random para mezclar el array.