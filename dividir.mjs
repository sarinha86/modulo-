export function multiplicar(a, b) {
   return a * b;
}

export  function somar(a, b) {
   return a + b;
}

export  function subtrair(a, b) {
   return a - b;
}

export function dividir(a, b) {
   return (b !== 0) ? a / b : "Erro: Divisão por zero!";
}

// Utilizando as funções importadas 
const num1 = 10;
const num2 = 5;

console.log(`Multiplicação: ${num1} * ${num2} = ${multiplicar(num1, num2)}`);
console.log(`Soma: ${num1} + ${num2} = ${somar(num1, num2)}`);
console.log(`Subtração: ${num1} - ${num2} = ${subtrair(num1, num2)}`);
console.log(`Divisão: ${num1} / ${num2} = ${dividir(num1, num2)}`);