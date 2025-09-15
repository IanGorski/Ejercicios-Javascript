// Nivel: 8
// Consigna: Type guard complejo

function esPersona(obj) {
    return obj && typeof obj.nombre === 'string' && typeof obj.edad === 'number';
}
console.log(esPersona({ nombre: 'Ana', edad: 22 }));

// Explicación: Verifica si el objeto tiene las propiedades de persona.