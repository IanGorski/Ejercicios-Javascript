// Nivel: 5
// Consigna: Verificar si todos los números de un array son positivos

function todosPositivos(arr) {
    return arr.every(x => x > 0);
}
console.log(todosPositivos([1, 2, 3]));

// Explicación: Usa every para verificar si todos son positivos.