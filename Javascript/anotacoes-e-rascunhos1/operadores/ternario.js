/* 
    Operador ternário / condicional

        Ele funciona de forma muito parecida com if e else, quase como uma versão abreviada

        ?   -> Se
        :   -> Se não
*/

// Exemplo 1 (Estrutura básica)

const rain = true

const umbrella = rain ? "Abrir o guarda-chuva" : "Deixar o guarda-chuva guardado"

console.log(`Resultado exemplo 1: \n${umbrella} \n`) /* \n pula linha */

// Exemplo 2 (Estrutura com operadores lógicos)

const balance = true
const isNotBlocked = true
const transferAccountExist = true

const transfer = balance && isNotBlocked && transferAccountExist ? "Transferencia autorizada" : "Transferencia negada"

console.log(`Resultado exemplo 2: \n${transfer}`)