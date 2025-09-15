// Nivel: 5
// Consigna: Formatear fecha a string simple

function formatearFecha(fecha) {
    return fecha.toISOString().split('T')[0];
}
console.log(formatearFecha(new Date()));

// Explicación: Convierte la fecha a formato YYYY-MM-DD.