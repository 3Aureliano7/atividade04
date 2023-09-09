import PromptSync from "prompt-sync";
const prompt = PromptSync()
let a = prompt("digite um numero:")
let b = prompt("digite até qual numero será multiplicado em uma tabuada:")

function tabuada(a,b) {

    for (let i = 1; i <= b ; i++){
        console.log(`${a} x ${i} = ${a*i}`)
        
    }
    
}

const tabela = tabuada(a,b)