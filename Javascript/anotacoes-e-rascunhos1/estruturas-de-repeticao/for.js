/* 
    Estrutura de repetição - For

    For é auxilia a criar repitições a partir de uma determinada condição

    Sua estrutura é formada por:

    variavel - condição(determina o que será necessario para repetição acontecer) - o que irá acontecer a cada looping

    Obs: geralmente, a variavel que será utilizada no "for" é um "i" que seria a abreviação de "index"
*/

// Exemplo da estrutura

for(let i = 1; i <= 10; i++){ /* Só irá adicionar +1 após a primeira repetição (i começa com 1) */
    console.log(i)
}

// Exemplo prático com uma array


console.log("\nExemplo com array:\n")

const students = ["joão", "maria", "roberto", "roger", "julia"]

for(let i = 0; i <= students.length; i++){
    console.log(`${students[i]} está presente na aula`)
}

