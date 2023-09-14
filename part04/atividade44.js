import PromptSync from "prompt-sync";
 const prompt=PromptSync()

let nome=prompt("qual seu nome? ")

while ( nome == '' ) {
        nome=prompt("qual seu nome? ")
}
let hobbie=[]

        let out = true
        for (let i = 0; i >= i; i++) {
                hobbie.push(prompt('Digite um de seus hobbies: '))   
                console.log(i)
                if(hobbie[i] == 0){out = false;break}
        }
hobbie.pop(hobbie.lengh-1)
console.log(`${nome}|${hobbie}`)
