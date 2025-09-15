// Nivel: 9
// Consigna: wrapAsync retorno [error, data]

async function wrapAsync(fn) {
    try {
        return [null, await fn()];
    } catch (e) {
        return [e, null];
    }
}
wrapAsync(() => Promise.resolve('ok')).then(console.log);

// Explicación: Devuelve un array con error o resultado de la promesa.