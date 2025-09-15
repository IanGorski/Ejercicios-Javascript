// Nivel: 3
// Consigna: Contar cuántas veces aparece un número en un array

function contarNumero(arr, num) {
    return arr.filter(x => x === num).length;
}
console.log(contarNumero([1, 2, 3, 2, 2, 4], 2));

// Explicación: Filtra el array por el número y cuenta coincidencias.