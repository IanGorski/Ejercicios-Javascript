// Nivel: 10
// Consigna: memoizeAsync con TTL

function memoizeAsync(fn, ttl) {
    let cache = {};
    return async function (key) {
        if (cache[key] && Date.now() - cache[key].time < ttl) {
            return cache[key].value;
        }
        const value = await fn(key);
        cache[key] = { value, time: Date.now() };
        return value;
    };
}

// Explicación: Memoiza el resultado de la función asíncrona por tiempo.