const express = require("express")

let curso = "Programador Back-end."

const app = express()

app.get("/", (req,res) => {
    res.send("Servidor express funcionado")
})
app.get('/usuario',(req,res) => {
    res.send('Paulo Roberto')
})

app.get('/senai',(req,res) => {
    res.send(curso)
})

app.listen(3000, () => {
    console.log("Servidor rodando em  http://localhost:3000")
}) 

