/* 
    Var x Let e Const

    A principal diferença entre e o var dos outros dois é
    o valor que é aplicado a ele sempre será o mesmo independente do escopo.
    Por exemplo, se atribuir um valor ao var dentro de um if, esse valor permanecerá
    nos outros escopos a menos que ele seja alterado. Isso pode acabar gerando erros no código.

    Enquanto ao let e const, ambos podem ser utilizados novamente em entre 
    escopos com o mesmo nome de variavel sem "herdar" o valor de outro escopo (a menos que seja o global/principal ou um escopo "pai")

    Em resumo, var significa uma variavel global enquanto let e const são varias de bloco.
    
    Let x Const

    A diferença entre eles é que o let pode ter seu valor alterado inúmeras vezes, 
    enquanto o const tem um valor constante, ou seja, inalterável
    
*/