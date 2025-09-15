// Nivel: 5
// Consigna: Frecuencia de palabras en un texto

function frecuenciaPalabras(texto) {
    return texto.split(/\s+/).reduce((acc, palabra) => {
        acc[palabra] = (acc[palabra] || 0) + 1;
        return acc;
    }, {});
}
console.log(frecuenciaPalabras('hola mundo hola'));

// Explicación: Cuenta cuántas veces aparece cada palabra.