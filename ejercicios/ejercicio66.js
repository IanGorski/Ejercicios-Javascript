// Nivel: 8
// Consigna: Inferir tipo de retorno (ReturnType)

function tipoRetorno(fn) {
    return typeof fn();
}
console.log(tipoRetorno(() => 123));

// Explicación: Devuelve el tipo del valor retornado por la función.