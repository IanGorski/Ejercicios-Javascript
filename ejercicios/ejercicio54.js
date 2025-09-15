// Nivel: 6
// Consigna: Describir valor según su tipo

function describir(valor) {
    if (typeof valor === 'string') return 'Es un string';
    if (typeof valor === 'number') return 'Es un número';
    if (typeof valor === 'boolean') return 'Es booleano';
    return 'Tipo desconocido';
}
console.log(describir(true));

// Explicación: Devuelve una descripción según el tipo de valor.