// Nivel: 9
// Consigna: Promise.all tipado con tuplas

async function promesasTupla(...fns) {
    return await Promise.all(fns.map(fn => fn()));
}
promesasTupla(() => Promise.resolve(1), () => Promise.resolve(2)).then(console.log);

// Explicación: Ejecuta varias promesas y devuelve los resultados en array.