 alunos = ["Fernanado", "Rebeca", "Gilbas"]
console.log(alunos)

//adiciona item a array
alunos.push("Caio")
console.log(alunos)

//ordena em ordem crescente alfabetica ou numerica
alunos.sort()
console.log(alunos)

//ordena em ordem decrescente alfabetica ou numerica
alunos.sort().reverse()
console.log(alunos)

//deleta item de posicao [0]
delete alunos[0]
console.log(alunos)

//deleta ultimo item
alunos.pop()
console.log(alunos)

//deleta primeiro item
alunos.shift()
console.log(alunos)

novosAlunos = ["Fernanado", "Rebeca", "Gilbas", "Bruna", "Brenno", "Leo"]
console.log(novosAlunos)

//apaga intervalo do array
//primerio argumento e qual posicao comeca, segundo argumento sao quantos items ira deletar a partir daquele, contando ele
novosAlunos.splice(0,2)
console.log(novosAlunos)

novosAlunos.splice(2,2)
console.log(novosAlunos)

//extrai uma faixa de itens do array, mecmo conceito de parametros do .splice()
professores = ["Fernanado", "Rebeca", "Gilbas", "Bruna", "Brenno", "Leo"]
algunsProfs = professores.slice(0,2)

//laco de repeticao com funcao recebendo parametro
alunos.forEach(function(nome, indice){
    console.log(nome, indice)
})

const carros = [
    {modelo:"Strada", preco:90000, ano:2020},
    {modelo:"Uno", preco:50000, ano:2000},
    {modelo:"Palio", preco:12000, ano:2022},
    {modelo:"Clio", preco:10, ano:1810},
    {modelo:"Moby", preco:50000, ano:2025},
    {modelo:"Fusca", preco:25000, ano:1900},
    {modelo:"Porsche GT3-RS", preco:120000, ano:2023},
]

const acima50 = carros.filter(carro => carro.preco > 50000)
console.log(acima50)

const novosCarros = carros.filter(carro => carro.preco > 50000 && carro.ano >= 2022)
console.log(novosCarros)

const pessoas = [
    {nome: "Felipe", idade: 19, profissao: "Dev"},
    {nome: "Jose", idade: 11, profissao: "Dev"},
    {nome: "Bruna", idade: 12, profissao: "Pedreiro"},
    {nome: "Maria", idade: 27, profissao: "Dev"},
]

function devMaiores18(pessoas){
    
    const devs = pessoas.filter(pessoa => pessoa.idade >= 18 && pessoa.profissao == "Dev")
    return devs
    
}

const devs = devMaiores18(pessoas)
console.log(devs)