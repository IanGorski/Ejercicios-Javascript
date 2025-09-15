// Nivel: 5
// Consigna: Paginar un array

function paginarArray(arr, tam, pag) {
    return arr.slice((pag - 1) * tam, pag * tam);
}
console.log(paginarArray([1, 2, 3, 4, 5, 6], 2, 2));

// Explicación: Devuelve una página del array según tamaño y número.