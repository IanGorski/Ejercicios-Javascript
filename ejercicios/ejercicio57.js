// Nivel: 7
// Consigna: Render estado (union discriminada)

function renderEstado(estado) {
    if (estado === 'ok') return 'Todo bien';
    if (estado === 'error') return 'Hubo un error';
    return 'Estado desconocido';
}
console.log(renderEstado('ok'));

// Explicación: Devuelve mensaje según estado.