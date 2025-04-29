class Calculadora{

    valor1;
    valor2;

    somar(valor1, valor2){
    this.valor1 = valor1
    this.valor2 = valor2
    var resultado = this.valor1 + this.valor2;
console.log("Resultado da soma é " + resultado)
    }
multiplicar(valor3, valor4) {

    this.valor3 = valor3
    this.valor4 = valor4
    var resultado = this.valor3 * this.valor4;
console.log("Resultado da multiplicação é " + resultado)
}
dividir(valor5, valor6) {

    this.valor5 = valor5
    this.valor6 = valor6
    var resultado = this.valor5 / this.valor6;
console.log("Resultado da divisão é " + resultado)


}
subtrair(valor7, valor8) {

    this.valor7 = valor7
    this.valor8= valor8
    var resultado = this.valor7 - this.valor8;
console.log("Resultado da subtração é " + resultado)

}

}

// criando o objeto
var calc1 = new Calculadora();

//chamando um método da soma
calc1.somar(8, 8); 
calc1.multiplicar(8,8);
calc1.dividir(8,8);
calc1.subtrair(8,8);