// Nivel: 5
// Consigna: Validar fortaleza de contraseña

function validarPassword(pass) {
    return /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/.test(pass);
}
console.log(validarPassword('Abc12345'));

// Explicación: Usa regex para validar contraseña fuerte.