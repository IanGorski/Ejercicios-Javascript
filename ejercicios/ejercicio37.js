// Nivel: 5
// Consigna: Sumar edades de un array de personas

const personas = [{ edad: 20 }, { edad: 30 }];
const sumaEdades = personas.reduce((a, p) => a + p.edad, 0);
console.log(sumaEdades);

// Explicación: Suma la propiedad edad de cada objeto.