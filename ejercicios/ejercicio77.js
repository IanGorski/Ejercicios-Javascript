// Nivel: 10
// Consigna: pipelineAsync secuencial

async function pipelineAsync(valor, ...fns) {
    let res = valor;
    for (const fn of fns) {
        res = await fn(res);
    }
    return res;
}
pipelineAsync(2, x => Promise.resolve(x + 1), x => Promise.resolve(x * 2)).then(console.log);

// Explicación: Ejecuta funciones asíncronas en secuencia.