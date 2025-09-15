// Nivel: 5
// Consigna: Reemplazar todas las apariciones de una palabra en un texto

function reemplazarPalabra(texto, palabra, reemplazo) {
    return texto.replaceAll(palabra, reemplazo);
}
console.log(reemplazarPalabra('hola mundo mundo', 'mundo', 'JS'));

// Explicación: Usa replaceAll para reemplazar todas las apariciones.