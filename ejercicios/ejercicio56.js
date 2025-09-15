// Nivel: 6
// Consigna: Merge de objetos

function merge(obj1, obj2) {
    return { ...obj1, ...obj2 };
}
console.log(merge({ a: 1 }, { b: 2 }));

// Explicación: Une dos objetos en uno solo.