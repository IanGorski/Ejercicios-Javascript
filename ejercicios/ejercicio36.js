// Nivel: 5
// Consigna: Buscar un objeto por nombre en un array

const personas = [{ nombre: 'Ana' }, { nombre: 'Luis' }];
const buscarPorNombre = (arr, nombre) => arr.find(p => p.nombre === nombre);
console.log(buscarPorNombre(personas, 'Luis'));

// Explicación: Busca el objeto con el nombre indicado.