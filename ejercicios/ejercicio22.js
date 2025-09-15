// Consigna: Suma de array
// Nivel: 4

function sumaArray(arr) {
    return arr.reduce((a, b) => a + b, 0);
}
console.log(sumaArray([1, 2, 3, 4]));

// Explicación: Usa reduce para sumar los elementos del array.