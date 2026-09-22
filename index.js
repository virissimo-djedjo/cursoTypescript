"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Estado;
(function (Estado) {
    Estado["SP"] = "SP";
    Estado["SC"] = "SC";
    Estado["MS"] = "MS";
    Estado["MG"] = "MG";
    Estado["RJ"] = "RJ";
})(Estado || (Estado = {}));
const pessoa1 = {
    nome: "Virissimo",
    idade: 27,
    estado: Estado.SC,
    endereco: {
        rua: "Marques",
        bairro: "Ponto",
        numero: 3000,
    },
};
// console.log(pessoa1)
const calcular = (...numeros) => {
    let soma = 0;
    numeros.forEach((numero) => {
        soma += numero;
    });
    return soma;
};
console.log(calcular(10, 20, 40, 60));
const funcFor = (...nomes) => {
    let texto = "";
    for (let i = 0; i < nomes.length; i++) {
        if (i !== nomes.length - 1)
            texto += 1 + i + "º Nome: " + nomes[i] + ", ";
        else
            texto += 1 + i + "º Nome: " + nomes[i];
    }
    return texto;
};
const funcRest = (...numeros) => {
    let numerosColcao = [];
    numeros.forEach((numero) => {
        numerosColcao.push(numero * 2);
    });
    numerosColcao.filter((numero) => {
        return numero > 3;
    });
    return numerosColcao;
};
console.log(funcFor("Paulo", "João", "Mateus", "Viri"));
console.log(funcRest(1, 2, 3, 4));
const nomes = ["Paulo", "João", "Mateus", "Viri"];
const resultado = nomes.find((nome) => {
    return nome != "Viri";
});
console.log(resultado);
//# sourceMappingURL=index.js.map