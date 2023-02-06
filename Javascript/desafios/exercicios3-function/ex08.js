/* 
    8. Escreva um programa onde, você cria uma função geradora de desconto.
    A função aceita 4 parâmetros (Nome do cliente, valor total da compra, um booleano 
    que diz se é a primeira compra do cliente ou não, um booleando que diz se o cliente vai pagar a vista ou não)

    Os descontos funcionam da seguinte forma:
    1. Se é a primeira compra do cliente, pagar a vista, e a compra for maior que R$ 1000 => 30% de desconto
    2. Se é a primeira compra do cliente, pagar a vista, e a compra for menor que R$ 1000, e maior que R$ 500 => 25% de desconto
    3. Se é a primeira compra do cliente, pagar a vista e a compra for menor que R$ 500 => desconto de 20%
    4. Se é a primeira compra do cliente, NÃO pagar a vista, e a compra for maior que R$ 1000 => 20% de desconto 
    5. Se é a primeira compra do cliente, NÃO pagar a vista, e a compra for menor que R$ 1000, e maior que R$ 500 => 15% de desconto
    6. Se é a primeira compra do cliente, NÃO pagar a vista e a compra for menor que R$ 500 => desconto de 10%
    7. Se NÃO é a primeira compra do cliente, pagar a vista, e a compra for maior que R$ 1000 => 20% de desconto
    8. Se NÃO é a primeira compra do cliente, pagar a vista, e a compra for menor que R$ 1000, e maior que R$ 500 => 15% de desconto
    9. Se NÃO é a primeira compra do cliente, pagar a vista e a compra for menor que R$ 500 => desconto de 10%
    10. Se NÃO é a primeira compra do cliente, NÃO pagar a vista, e a compra for maior que R$ 1000 => 10% de desconto 
    11. Se NÃO é a primeira compra do cliente, NÃO pagar a vista, e a compra for menor que R$ 1000, e maior que R$ 500 => 5% de desconto
    12. Se NÃO é a primeira compra do cliente, NÃO pagar a vista e a compra for menor que R$ 500 => SEM DESCONTO- A função deve imprimir na tela:
    
    Se o cliente recebeu desconto, imprima na tela um agradecimento pela compra, o valor total sem desconto, 
    o valor total com desconto e a porcentagem de desconto que ele recebeu.

    Se o cliente não recebeu desconto, imprima na tela um agradecimento pela compra, 
    o valor total da sua compra e um cupom de desconto. Esse cupom deve ser um valor aleatório entre 10 e 20% para a próxima compra.
*/

function discountGenerator(name, totalValue, firstPurchase, cashPayment) {

    // Mensagem para o cliente

    let welcomeMsg = `Olá ${name}, muito obrigado por sua preferência!`
    let purchaseMsg
    let paymentMsg
    let valueMsg1
    let valueMsg2

    if (firstPurchase === true) {
        purchaseMsg = `Primeira compra: Sim`
    } else {
        purchaseMsg = `Primeira compra: Não`
    }

    if (cashPayment === true) {
        paymentMsg = `Pagamento à vista: Sim`
    } else {
        paymentMsg = `Pagamento à vista: Não`
    }

    if (totalValue > 1000) {
        valueMsg1 = `Valor da compra maior que R$ 1000: Sim`
    } else {
        valueMsg1 = `Valor da compra maior que R$ 1000: Não`
    }

    if (totalValue > 500) {
        valueMsg2 = `Valor da compra maior que R$ 500: Sim`
    } else {
        valueMsg2 = `Valor da compra maior que R$ 500: Não`
    }

    // 1. Se é a primeira compra do cliente, pagar a vista, e a compra for maior que R$ 1000 => 30% de desconto
    if (firstPurchase === true && cashPayment === true && totalValue > 1000) {
        console.log(`${welcomeMsg}\n${purchaseMsg}\n${paymentMsg}\n${valueMsg1}\n${valueMsg2}\nParabéns! Você ganhou um desconto de 30%!\n
        Valor total da compra: ${totalValue}
        Valor final com desconto: ${totalValue - (totalValue * 30 / 100)}`)
    }

    // 2. Se é a primeira compra do cliente, pagar a vista, e a compra for menor que R$ 1000, e maior que R$ 500 => 25% de desconto
    if (firstPurchase === true && cashPayment === true && totalValue < 1000 && totalValue > 500){
        console.log(`${welcomeMsg}\n${purchaseMsg}\n${paymentMsg}\n${valueMsg1}\n${valueMsg2}\nParabéns! Você ganhou um desconto de 25%!
        Valor total da compra: ${totalValue}
        Valor final com desconto: ${totalValue - (totalValue * 25 / 100)}`)
    }

    // 3. Se é a primeira compra do cliente, pagar a vista e a compra for menor que R$ 500 => desconto de 20%
    if (firstPurchase === true && cashPayment === true && totalValue < 500){
        console.log(`${welcomeMsg}\n${purchaseMsg}\n${paymentMsg}\n${valueMsg1}\n${valueMsg2}\nParabéns! Você ganhou um desconto de 20%!
        Valor total da compra: ${totalValue}
        Valor final com desconto: ${totalValue - (totalValue * 20 / 100)}`)
    }

    // 4. Se é a primeira compra do cliente, NÃO pagar a vista, e a compra for maior que R$ 1000 => 20% de desconto 
    if (firstPurchase === true && cashPayment === false && totalValue > 1000){
        console.log(`${welcomeMsg}\n${purchaseMsg}\n${paymentMsg}\n${valueMsg1}\n${valueMsg2}\nParabéns! Você ganhou um desconto de 20%!
        Valor total da compra: ${totalValue}
        Valor final com desconto: ${totalValue - (totalValue * 20 / 100)}`)
    }

    // 5. Se é a primeira compra do cliente, NÃO pagar a vista, e a compra for menor que R$ 1000, e maior que R$ 500 => 15% de desconto
    if (firstPurchase === true && cashPayment === false && totalValue < 1000 && totalValue > 500){
        console.log(`${welcomeMsg}\n${purchaseMsg}\n${paymentMsg}\n${valueMsg1}\n${valueMsg2}\nParabéns! Você ganhou um desconto de 15%!
        Valor total da compra: ${totalValue}
        Valor final com desconto: ${totalValue - (totalValue * 15 / 100)}`)
    }

    // 6. Se é a primeira compra do cliente, NÃO pagar a vista e a compra for menor que R$ 500 => desconto de 10%
    if (firstPurchase === true && cashPayment === false && totalValue < 500){
        console.log(`${welcomeMsg}\n${purchaseMsg}\n${paymentMsg}\n${valueMsg1}\n${valueMsg2}\nParabéns! Você ganhou um desconto de 10%!
        Valor total da compra: ${totalValue}
        Valor final com desconto: ${totalValue - (totalValue * 10 / 100)}`)
    }

    // 7. Se NÃO é a primeira compra do cliente, pagar a vista, e a compra for maior que R$ 1000 => 20% de desconto
    if (firstPurchase === false && cashPayment === true && totalValue > 1000){
        console.log(`${welcomeMsg}\n${purchaseMsg}\n${paymentMsg}\n${valueMsg1}\n${valueMsg2}\nParabéns! Você ganhou um desconto de 20%!
        Valor total da compra: ${totalValue}
        Valor final com desconto: ${totalValue - (totalValue * 20 / 100)}`)
    }

    // 8. Se NÃO é a primeira compra do cliente, pagar a vista, e a compra for menor que R$ 1000, e maior que R$ 500 => 15% de desconto
    if (firstPurchase === false && cashPayment === true && totalValue < 1000 && totalValue > 500){
        console.log(`${welcomeMsg}\n${purchaseMsg}\n${paymentMsg}\n${valueMsg1}\n${valueMsg2}\nParabéns! Você ganhou um desconto de 15%!
        Valor total da compra: ${totalValue}
        Valor final com desconto: ${totalValue - (totalValue * 15 / 100)}`)
    }

    // 9. Se NÃO é a primeira compra do cliente, pagar a vista e a compra for menor que R$ 500 => desconto de 10%
    if (firstPurchase === false && cashPayment === true && totalValue < 500){
        console.log(`${welcomeMsg}\n${purchaseMsg}\n${paymentMsg}\n${valueMsg1}\n${valueMsg2}\nParabéns! Você ganhou um desconto de 10%!
        Valor total da compra: ${totalValue}
        Valor final com desconto: ${totalValue - (totalValue * 10 / 100)}`)
    }

    // 10. Se NÃO é a primeira compra do cliente, NÃO pagar a vista, e a compra for maior que R$ 1000 => 10% de desconto 
    if (firstPurchase === false && cashPayment === false && totalValue > 1000){
        console.log(`${welcomeMsg}\n${purchaseMsg}\n${paymentMsg}\n${valueMsg1}\n${valueMsg2}\nParabéns! Você ganhou um desconto de 10%!
        Valor total da compra: ${totalValue}
        Valor final com desconto: ${totalValue - (totalValue * 10 / 100)}`)
    }

    // 11. Se NÃO é a primeira compra do cliente, NÃO pagar a vista, e a compra for menor que R$ 1000, e maior que R$ 500 => 5% de desconto
    if (firstPurchase === false && cashPayment === false && totalValue < 1000 && totalValue > 500){
        console.log(`${welcomeMsg}\n${purchaseMsg}\n${paymentMsg}\n${valueMsg1}\n${valueMsg2}\nParabéns! Você ganhou um desconto de 5%!
        Valor total da compra: ${totalValue}
        Valor final com desconto: ${totalValue - (totalValue * 5 / 100)}`)
    }

    // 12. Se NÃO é a primeira compra do cliente, NÃO pagar a vista e a compra for menor que R$ 500 => SEM DESCONTO- A função deve imprimir na tela:
    if (firstPurchase === false && cashPayment === false && totalValue < 500){
        console.log(`${welcomeMsg}\n${purchaseMsg}\n${paymentMsg}\n${valueMsg1}\n${valueMsg2}\nInfelizmente, sem desconto nessa compra...\n
        Mas, você ganhou um desconto para a próxima compra! 
        O valor do desconto é de ${Math.floor((Math.random() * 11 + 10))}%`)
    }
}

discountGenerator("cliente", 300, false, false)


