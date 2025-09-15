// Nivel: 5
// Consigna: Agrupar elementos de un array (groupBy)

function groupBy(arr, fn) {
  return arr.reduce((acc, el) => {
    const key = fn(el);
    acc[key] = acc[key] || [];
    acc[key].push(el);
    return acc;
  }, {});
}
console.log(groupBy([1, 2, 3, 4], x => (x % 2 === 0 ? 'par' : 'impar')));

// Explicación: Agrupa elementos según la función dada.