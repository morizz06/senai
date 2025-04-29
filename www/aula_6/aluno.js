class Aluno{
    nome;
    idade;
    curso;

   cadastro(nome,idade,curso) {
    this.nome = nome 
    this.idade = idade
    this.curso = curso

    console.log("Olá, eu sou " +  this.nome)
    console.log("minha idade é "  + this.idade + " anos.")
    console.log("Estou no curso de "  +  this.curso)


    }
}
var Aluno1 = new Aluno()
Aluno1.cadastro("Tin da Silva", 27, " Administrador de Banco de dados.")

var Aluno2 = new Aluno()
Aluno2.cadastro("Maia dos Santos", 27, " Progamador Back-End.")