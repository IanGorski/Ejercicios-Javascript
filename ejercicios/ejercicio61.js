// Nivel: 8
// Consigna: EventEmitter básico

class EventEmitter {
    constructor() {
        this.eventos = {};
    }
    on(evento, fn) {
        this.eventos[evento] = this.eventos[evento] || [];
        this.eventos[evento].push(fn);
    }
    emit(evento, ...args) {
        (this.eventos[evento] || []).forEach(fn => fn(...args));
    }
}
const em = new EventEmitter();
em.on('saludo', nombre => console.log('Hola', nombre));
em.emit('saludo', 'Juan');

// Explicación: Implementa un EventEmitter simple.