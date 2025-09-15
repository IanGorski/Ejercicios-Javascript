// Nivel: 5
// Consigna: Eliminar duplicados de un array

function eliminarDuplicados(arr) {
    return [...new Set(arr)];
}
console.log(eliminarDuplicados([1, 2, 2, 3, 1]));

// Explicación: Usa Set para eliminar duplicados.