const express = require("express")


const app = express()

app.use(express.json())

app.get("/", (req,res) => {
    res.send("Bem-vindo ao servidor Express!")
})
app.get('/sobre',(req,res) => {
    res.send('Este é um projeto de exemplo com rotos.')
})

app.get('/contato',(req,res) => {
    res.send("Entre em contato pelo e-mail:pauloroberto6678")
})

app.post('/usuario', (req,res) => {
    const nome = req.body.nome
    const cargo = req.body.cargo
    res.send("usuário" + nome + " criado com sucesso, " + "cargo:"+ cargo+".")
})



app.listen(3000, () => {
    console.log("Servidor rodando em  http://localhost:3000")
}) 


