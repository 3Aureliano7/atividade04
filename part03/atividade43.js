import PromptSync from "prompt-sync";

const prompt =PromptSync()

let numeros = []

let limite=prompt('quantos numeros desejas comparar?')
//adiciona os numeros no array
for(let r = 0; r < limite; r++) {
    numeros.push(prompt(`Adicione ${r+1}° numero: `))
    // console.log(numeros[r]) verificar se os numeros estão entrando no array
}
let comparador=0
/*
comparador=0 antes do for pois se fosse dentro toda vez antes de rodar o ultimo 
if seu valor equivaleria a 0
*/
//for para determinar o maior numero 
for (let j = 0; j < limite; j++) {

    for (let i = 0; i < limite; i++) {
       if( numeros[j] > numeros[i] ){comparador++
       /*
       a cada numero que corresponde a comparação de n[j]>n[i] 
       add 1 a comparador
       */
       }
    }
//console.log(comparador)
if(comparador==limite-1){
    /*a cada numero que corresponde a comparação de n[j]>n[i] 
    add 1 a comparador logo o maior numero tera o valor agregado do comparador equivalente 
    a todos os numeros a serem comparados -1 pois n[j] não é comparado com ele mesmo e 
    mesmo que fosse não seria maior 
    */
    console.log(`${numeros[j]} é o maior numero de todos`)
    }
    comparador=0
    //colocando o valor de 0 ao comparador para não ficar com valor agregado em comparações de numeros diferentes 
}
// menor numero(funciona = ao código acima)
for (let j = 0; j < limite; j++) {

    for (let i = 0; i < limite; i++) {
       if( numeros[j] < numeros[i] ){comparador++
       }
    }
if(comparador==limite-1){
    console.log(`${numeros[j]} é o menor numero de todos`)
    }
    comparador=0
}

