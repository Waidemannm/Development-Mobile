const pessoa = {
    nome: "Felipe",
    idade: 19,
    endereco:{
        logradouro: "Av. Paulista",
        numero: 660
    }
}

//destry
const nome = pessoa.nome
console.log(nome)

const {nome_2, idade} = pessoa
console.log("Nome: " + nome + " idade: " + idade)

const{nome: nm, idade: id} = pessoa
console.log("Nome: " + nm + " idade: " + id)

const numero = pessoa.endereco.numero
console.log(numero)

const {endereco} = pessoa
console.log(endereco)
