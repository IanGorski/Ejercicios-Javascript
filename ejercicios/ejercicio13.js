// Nivel: 3
// Consigna: Invertir un string

function invertirString(str) {
    return str.split('').reverse().join('');
}
console.log(invertirString('JavaScript'));

// Explicación: Convierte el string en array, lo invierte y lo une.