// Nivel: 10
// Consigna: Mini sistema de validación con Infer

function validar(obj, reglas) {
    return Object.keys(reglas).every(key => reglas[key](obj[key]));
}
const reglas = { nombre: x => typeof x === 'string', edad: x => typeof x === 'number' };
console.log(validar({ nombre: 'Ana', edad: 22 }, reglas));

// Explicación: Valida un objeto según reglas dadas.