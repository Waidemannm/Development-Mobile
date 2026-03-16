console.log("Práticas de Desenvolvimento de Software");
function mensage(nome) {
    console.log("Olá, esta é uma mensagem de teste! feita por " + nome);
}

mensage("Larissa");

function soma(x,y) {
    console.log("A soma de " + x + " e " + y + " é: " + (x+y));
}

soma(5, 10);

(function(){
    console.log("Esta é uma função auto-invocada!");
} )

const multi = function(x, y) {
    return x*y;
};

let resultado = multi(5, 10);
console.log("O resultado da multiplicação é: " + resultado);

const somar = (a, b) => {
  return a + b;
};

console.log("A soma usando arrow function é: " + somar(3, 7));

const somar2 = (a, b) => a + b;

console.log("A soma usando arrow function simplificada é: " + somar2(4, 6));

function apresentar(titulo, ...nomes) {
  console.log(titulo);
  nomes.forEach(n => console.log(n));
}

apresentar("Alunos:", "Ana", "João", "Carlos");

function somar3(...numeros) {
  return numeros.reduce((total, n) => total + n, 0);
}

console.log(somar3(1, 2, 3, 4)); // 10

const numeros = [1, 2, 3];

console.log(somar3(...numeros));

///////
const somar4 = (a, b) => a +b;
const multiplicar = (a, b) => a * b;
const subt = (a, b) => a-b;
const dividir = (a,b) => a/b;

console.log("Soma: " + somar4(5, 10));
console.log("Multiplicação: " + multiplicar(5, 10));
console.log("Subtração: " + subt(5, 10));
console.log("Divisão: " + dividir(5, 10));

dividir(10, 5) > 1 ? console.log("O resultado da divisão é maior que 1") : console.log("O resultado da divisão é menor ou igual a 1");

const numeros2 = [1, 2, 3, 4, 5];

const pares = numeros2.filter(n => n % 2 === 0);

console.log(pares); // [2, 4]
