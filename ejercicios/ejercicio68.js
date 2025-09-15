// Nivel: 8
// Consigna: Builder pattern simple

function Builder() {
    this.obj = {};
    this.set = function (key, value) {
        this.obj[key] = value;
        return this;
    };
    this.build = function () {
        return this.obj;
    };
}
const b = new Builder().set('a', 1).set('b', 2).build();
console.log(b);

// Explicación: Implementa un patrón builder básico.