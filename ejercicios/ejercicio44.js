// Nivel: 5
// Consigna: Ordenar por múltiples campos

const personas = [
    { nombre: 'Ana', edad: 20 },
    { nombre: 'Luis', edad: 18 },
    { nombre: 'Ana', edad: 22 }
];
personas.sort((a, b) => a.nombre.localeCompare(b.nombre) || a.edad - b.edad);
console.log(personas);

// Explicación: Ordena primero por nombre y luego por edad.