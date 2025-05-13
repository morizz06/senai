const express = require("express")


const app = express()

app.use(express.json())


app.post('/compra', (req,res) => {
    
    
    const produto = req.body.produto
    const preco = req.body.preco 
    const quantidade = req.body.quantidade
    const total = preco*quantidade
    if ( quantidade >= 0 && typeof(preco) == "number") {
        res.send("Produto:" + produto +"," + " Preço:" + preco  +"," + " Quantidade:" + quantidade + "." + " Valor total : R$" + total + ",00 Reais.")
    } 
    else {
        res.send("Informações invalidas.")
    }
    
    
})



app.listen(3000, () => {
    console.log("Servidor rodando em  http://localhost:3000")
}) 


