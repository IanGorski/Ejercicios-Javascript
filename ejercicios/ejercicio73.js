// Nivel: 9
// Consigna: retryAsync con intentos y delay

async function retryAsync(fn, intentos, delay) {
    for (let i = 0; i < intentos; i++) {
        try {
            return await fn();
        } catch (e) {
            if (i === intentos - 1) throw e;
            await new Promise(res => setTimeout(res, delay));
        }
    }
}
// Explicación: Reintenta la función asíncrona con delay entre intentos.