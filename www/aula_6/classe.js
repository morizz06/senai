class Carro{ 
    marca;
    modelo;
    ano;



    ligar() {
        console.log("O carro está ligado.")
    }
}    
var carro1 = new Carro()
carro1.marca = "chevrolet"
carro1.modelo = "onix"
carro1.ano = "2021"
console.log(carro1.marca,carro1.modelo,carro1.ano)

var carro2 = new Carro()
carro2.marca = "fiat"
carro2.modelo = "Uno"
carro2.ano = "2006"
console.log(carro2.marca,carro2.modelo,carro2.ano)

var carro3 = new Carro()
carro3.marca = "ford"
carro3.modelo = "focus"
carro3.ano = "2009"
console.log(carro3.marca,carro3.modelo,carro3.ano)