/* 
    Function

    Funções executam um trecho de código sempre quando são chamadas, 
    ajudam muito a organizar e economizar código.

*/

// Exemplo 1

function callFunction(){   
    console.log(`Função chamada`)
}

callFunction()

// Exemplo 2

let timesCalled = 0

function callCount(){

    timesCalled++

    if(timesCalled === 1){
        console.log(`\n A função foi chamada ${timesCalled} vez`)
    } else {
        console.log(`\n A função foi chamada ${timesCalled} vezes`)
    }   
}

callCount()
callCount()
callCount()
callCount()
