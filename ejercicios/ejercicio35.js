// Nivel: 5
// Consigna: Obtener los nombres de un array de objetos persona

const personas = [{ nombre: 'Ana' }, { nombre: 'Luis' }];
const nombres = personas.map(p => p.nombre);
console.log(nombres);

// Explicación: Usa map para extraer la propiedad nombre.