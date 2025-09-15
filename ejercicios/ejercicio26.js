// Consigna: Obtener los números mayores a un valor dado
// Nivel: 4

function mayoresQue(arr, valor) {
    return arr.filter(x => x > valor);
}
console.log(mayoresQue([1, 5, 8, 3], 4));

// Explicación: Filtra los números mayores al valor dado.