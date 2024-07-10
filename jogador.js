function Pessoa(nome, idade){
this.nome = nome
this.idade = idade
}

function Jogador(nome,idade, posicao,condicao,overal){
    this.posicao = posicao
    this.condicao = condicao
    this.overal = overal 
    Pessoa.call(this, nome,idade)
}

function Funcionario(nome, idade, cargo){
    this.cargo = cargo
    Pessoa.call(this, nome, idade)
}

const pessoa1 = new Pessoa("Joaquina", 33)
const jogador1 = new Jogador ("igor", 26, "meio-campo", "titular", 99)
const funcionario1 = new Funcionario("José", 38, "rouperio")

console.log(pessoa1)
console.log(jogador1)
console.log(funcionario1)