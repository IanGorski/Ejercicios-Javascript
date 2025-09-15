// Nivel: 10
// Consigna: Extraer literales de union discriminada

function extraerLiterales(arr) {
    return arr.filter(x => typeof x === 'string');
}
console.log(extraerLiterales(['a', 1, 'b', 2]));

// Explicación: Extrae los valores string de un array.