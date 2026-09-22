"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Computador {
    nome = "nome";
    ram = 8;
    cpu = 16;
    ligado = true;
    constructor(nome, ram, cpu, ligado) {
        this.nome = nome;
        this.ram = ram;
        this.cpu = cpu;
        this.ligado = ligado;
    }
}
const comp1 = new Computador("Sansung", 16, 128.5, true);
const comp2 = new Computador("Apple", 32, 124.3, false);
const comp3 = new Computador("Microsoft", 8, 134.5, true);
console.log(comp1.nome);
console.log(comp1.ram);
console.log(comp1.cpu);
console.log(comp1.ligado);
//# sourceMappingURL=Computador.js.map