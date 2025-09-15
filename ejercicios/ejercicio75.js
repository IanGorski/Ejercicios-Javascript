// Nivel: 9
// Consigna: Tipo MiAwaited recursivo

async function miAwaited(p) {
    return await p;
}
miAwaited(Promise.resolve('valor')).then(console.log);

// Explicación: Espera el resultado de la promesa.