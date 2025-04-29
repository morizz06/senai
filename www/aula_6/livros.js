class Livros{
    titulo;
    autor;
    
    meulivro(titulo,autor) {
        this.titulo = titulo
        this.autor = autor


        console.log("O titulo do livro é: " + this.titulo)
        console.log("O nome do autor é"  + this.autor)

    }
}
var livros1 = new Livros()
livros1.meulivro("Um lugar silencioso", " Carlos Alberto")

var livros2 = new Livros()
livros2.meulivro("Turma da Monica ", " Mauricio de Souza")

var livros3 = new Livros()
livros3.meulivro("jogos de herença ", " Jennifer Lynn Barnes")