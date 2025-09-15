// Consigna: Verificar si un string es palíndromo
// Nivel: 4

function esPalindromo(str) {
    const limpio = str.replace(/\s/g, '').toLowerCase();
    return limpio === limpio.split('').reverse().join('');
}
console.log(esPalindromo('Anita lava la tina'));

// Explicación: Limpia el string y compara con su reverso.