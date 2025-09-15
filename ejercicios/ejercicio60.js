// Nivel: 7
// Consigna: Acceso seguro a tupla con flag

function accesoSeguro(arr, idx) {
    return arr[idx] !== undefined ? arr[idx] : null;
}
console.log(accesoSeguro([1, 2, 3], 5));

// Explicación: Devuelve el valor si existe, si no null.