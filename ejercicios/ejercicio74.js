// Nivel: 9
// Consigna: withTimeout para promesas lentas

function withTimeout(promise, ms) {
    return Promise.race([
        promise,
        new Promise((_, rej) => setTimeout(() => rej('Timeout'), ms))
    ]);
}
withTimeout(Promise.resolve('ok'), 1000).then(console.log).catch(console.error);

// Explicación: Rechaza la promesa si tarda más del tiempo indicado.