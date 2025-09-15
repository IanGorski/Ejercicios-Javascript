// Nivel: 8
// Consigna: Inferir parámetros de función

function parametrosDe(fn) {
    return fn.length;
}
console.log(parametrosDe((a, b, c) => a + b + c));

// Explicación: Devuelve la cantidad de parámetros de la función.