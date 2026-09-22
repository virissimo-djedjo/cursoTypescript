"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Computador {
    nome;
    ram;
    cpu;
    ligado;
    constructor(nome, ram, cpu, ligado) {
        this.nome = nome;
        this.ram = ram;
        this.cpu = cpu;
        this.ligado = ligado;
    }
    informacao() {
        console.log("Nome: " + this.nome);
        console.log("Ram: " + this.ram);
        console.log("CPU: " + this.cpu);
        console.log("Ligado: " + this.ligado);
        console.log("------------------------");
    }
    ligar() {
        this.ligado = true;
    }
    desligar() {
        this.ligado = false;
    }
}
const comp1 = new Computador("Sansung", 16, 128.5, true);
const comp2 = new Computador("Apple", 32, 124.3, false);
const comp3 = new Computador("Microsoft", 8, 134.5, true);
comp1.informacao();
comp2.informacao();
comp3.informacao();
comp1.ligar();
comp1.informacao();
comp1.desligar();
comp1.informacao();
comp2.ligar();
comp2.informacao();
comp2.desligar();
comp2.informacao();
//# sourceMappingURL=Computador.js.map