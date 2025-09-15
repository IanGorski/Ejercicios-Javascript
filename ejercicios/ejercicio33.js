// Nivel: 4
// Consigna: Parámetros REST

function sumarTodo(...nums) {
  return nums.reduce((a, b) => a + b, 0);
}
console.log(sumarTodo(1, 2, 3, 4));

// Explicación: Usa parámetros REST para sumar todos los argumentos.