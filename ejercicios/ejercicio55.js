// Nivel: 6
// Consigna: Predicate esArrayDeStrings

function esArrayDeStrings(arr) {
    return Array.isArray(arr) && arr.every(x => typeof x === 'string');
}
console.log(esArrayDeStrings(['a', 'b']));

// Explicación: Verifica si todos los elementos son strings.