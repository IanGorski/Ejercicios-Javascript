// Nivel: 6
// Consigna: Extraer propiedad genérica

function extraerPropiedad(obj, prop) {
    return obj[prop];
}
console.log(extraerPropiedad({ a: 1, b: 2 }, 'b'));

// Explicación: Devuelve el valor de la propiedad indicada.