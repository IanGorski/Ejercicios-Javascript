// Consigna: Contar palabras en una frase
// Nivel: 4

function contarPalabras(frase) {
    return frase.trim().split(/\s+/).length;
}
console.log(contarPalabras('Hola mundo JS'));

// Explicación: Divide la frase por espacios y cuenta.