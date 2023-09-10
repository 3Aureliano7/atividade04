import PromptSync from "prompt-sync";
 const prompt=PromptSync()

let nome=prompt("qual seu nome? ")

while (nome=='') {
        nome=prompt("qual seu nome? ")
}
