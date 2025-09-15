// Nivel: 4
// Consigna: Crear un array con los cuadrados de los números del 1 al 10

const cuadrados = Array.from({ length: 10 }, (_, i) => (i + 1) ** 2);
console.log(cuadrados);

// Explicación: Genera un array y calcula el cuadrado de cada número.