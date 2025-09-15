// Nivel: 5
// Consigna: Crear un slug URL-friendly

function crearSlug(texto) {
    return texto.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
}
console.log(crearSlug('Hola Mundo JS!'));

// Explicación: Convierte texto en slug para URL.