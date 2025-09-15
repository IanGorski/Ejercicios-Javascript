// Nivel: 7
// Consigna: Aplicar Partial a objeto (opcional)

function partial(obj, props) {
    const res = {};
    props.forEach(p => (res[p] = obj[p]));
    return res;
}
console.log(partial({ a: 1, b: 2, c: 3 }, ['a', 'c']));

// Explicación: Devuelve un objeto con solo las propiedades indicadas.