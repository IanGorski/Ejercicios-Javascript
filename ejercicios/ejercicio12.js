// Nivel: 3
// Consigna: Contar vocales en un string

function contarVocales(str) {
    return (str.match(/[aeiou]/gi) || []).length;
}
console.log(contarVocales('Hola mundo'));

// Explicación: Usa regex para contar vocales en el texto.