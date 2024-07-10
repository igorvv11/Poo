function Pessoa(nome){
    this.nome = nome;
    this.dizOi = function(){
        console.log(this.nome + " diz olá")
    }
    this.dizCArgo
}

function Funcionario(nome, cargo, salario){
    this.cargo = cargo;
    this.salario = salario;
    Pessoa.call(this, nome);
}

const funcionario1 = new Funcionario("Klarra" , "Dev front-end", 5000) 
funcionario1.dizOi()
