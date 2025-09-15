// Nivel: 8
// Consigna: DeepPartial recursivo básico

function deepPartial(obj, keys) {
    const res = { ...obj };
    keys.forEach(k => {
        if (typeof res[k] === 'object' && res[k] !== null) {
            res[k] = deepPartial(res[k], Object.keys(res[k]));
        } else {
            res[k] = undefined;
        }
    });
    return res;
}
console.log(deepPartial({ a: 1, b: { c: 2 } }, ['b']));

// Explicación: Hace undefined las claves indicadas, recursivamente.