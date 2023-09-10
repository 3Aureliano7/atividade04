import PromptSync from "prompt-sync";

const prompt = PromptSync()
let a = prompt("Digite o primeiro numero")
let b = prompt("Digite o segundo numero")
let c = prompt("Digite o terceiro numero")

function compare(a,b,c) {
    if(a>b && a>c){
        console.log(`${a} é maior dos três numeros`)
        return a 
    }
    if(b>a && b>c){
        console.log(`${b} é maior dos três numeros`)
        return b
    }
    if(c>a && c>b){
        console.log(`${c} é maior dos três numeros`)
        return c
    }  
}
const maior = compare(a,b,c)
//console.log(maior) outputs the biggest number returned from function