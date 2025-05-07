 function Usuario(nome,idade){
    if (nome == "" || idade == ""){
        console.log("Erro: Nome e idade são obrigatórios para o cadastro!")
    }
    else{
        console.log(" Usuário cadastrado com sucesso!")
        var resultado = nome + idade;
        console.log(resultado )
    }
   
}

 module.exports = Usuario;

 
