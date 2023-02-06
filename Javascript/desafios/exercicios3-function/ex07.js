/* 
    7. Faça um programa onde, você chame uma função que calcule a taxa mensal de juros de um investimento.
        Você deve enviar como argumentos da função:
        - Valor inicial investido 
        - Valor atual do investimento 
        - Tempo em meses, que o valor está investido, a função deve RETORNAR a taxa de juros, já formatada. 
        Ex: 2,5%. Siga a formula desse vídeo para te auxiliar com o cálculo.

        Cálculo taxa = juros(Valor atual do investimento - Valor inicial investido) / Valor inicial investido * tempo
*/

let monthlyInterestRate = (initialValue, currentValue, monthsTime) => {
    let interestCalc = (currentValue - initialValue) / initialValue * monthsTime
    return console.log(`A taxa mensal de juros do investimento foi de ${interestCalc.toFixed(1)}%`) 
    // .toFixed() limita a quantidade de casas decimais que um número pode ter
}

monthlyInterestRate(1500, 2000, 10)