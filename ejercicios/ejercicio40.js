// Nivel: 5
// Consigna: Obtener la suma de los dígitos de un número

function sumaDigitos(num) {
    return num.toString().split('').reduce((a, d) => a + Number(d), 0);
}
console.log(sumaDigitos(1234));

// Explicación: Convierte el número a string y suma sus dígitos.