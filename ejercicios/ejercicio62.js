// Nivel: 8
// Consigna: Currificar función de dos parámetros

function currificar(fn) {
    return a => b => fn(a, b);
}
const suma = (a, b) => a + b;
const sumaCurried = currificar(suma);
console.log(sumaCurried(2)(3));

// Explicación: Currifica una función binaria.