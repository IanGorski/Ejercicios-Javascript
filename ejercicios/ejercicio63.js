// Nivel: 8
// Consigna: Compose de funciones unarias

function compose(...fns) {
    return x => fns.reduceRight((v, f) => f(v), x);
}
const doble = x => x * 2;
const sumarUno = x => x + 1;
const compuesta = compose(doble, sumarUno);
console.log(compuesta(3));

// Explicación: Compone funciones unarias de derecha a izquierda.