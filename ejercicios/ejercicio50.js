// Nivel: 5
// Consigna: Ejecutar función con captura de error

function ejecutarConError(fn) {
    try {
        return fn();
    } catch (e) {
        return 'Error: ' + e.message;
    }
}
console.log(
    ejecutarConError(() => {
        throw new Error('Fallo');
    })
);

// Explicación: Ejecuta la función y captura errores.