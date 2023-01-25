/* 
    Operadores Lógicos

    &&  -> E 
        true && true = true
        true && false = false
        false && false = true

            No geral, se tiver um "false" não importa quantos "true" houver, será falso

    ||  -> Ou
        true || true = true
        true || false = true
        false || false = false

             No geral, se tiver um "true" não importa quantos "false" houver, será true

    !  -> Negação
        !true = false
        !false = true

*/

console.log(!(!(true && true && true) && !(false && true || true)))