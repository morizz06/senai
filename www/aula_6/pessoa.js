class Pessoa {
    nome;
    idade;

    falar(nome,idade) {
        this.nome = nome
        this.idade = idade


        console.log("Olá, eu sou " +  this.nome)
        console.log("minha idade é "  + this.idade)

    }
}
var pessoa = new Pessoa()
pessoa.falar("Paulo Roberto", 26)