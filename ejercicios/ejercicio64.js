// Nivel: 8
// Consigna: DeepReadonly recursivo básico

function deepReadonly(obj) {
    Object.freeze(obj);
    Object.keys(obj).forEach(key => {
        if (typeof obj[key] === 'object' && obj[key] !== null) {
            deepReadonly(obj[key]);
        }
    });
    return obj;
}
const ejemplo = deepReadonly({ a: 1, b: { c: 2 } });

// Explicación: Aplica freeze recursivo a un objeto.