import { soma, subtracao, multiplicacao } from "./index.js";

console.log("Teste da função Soma()");
if (soma(2, 2) === 4) console.log("Passou 1!")
else console.log("Falhou 1");

if (soma(-1, 2) === 1) console.log("Passou 2!")
else console.log("Falhou 2!");

if (soma(2, 0) === 2) console.log("Passou 3!")
else console.log("Falhou 3!");

console.log("Teste de função de Subtração()")

if (subtracao(4, 2) === 2) console.log("Passou 4!")
else console.log("Falhou 4!");

console.log("Teste de função de Multiplicacao()")

if (multiplicacao(4, 2) === 8) console.log("Passou 5!")
    else console.log("Falhou 5!");


function soma(a, b){
    return a + b;
}
function subtracao(a, b){
    return a - b;
}
function multiplicacao(a, b){
    return a * b;
}
