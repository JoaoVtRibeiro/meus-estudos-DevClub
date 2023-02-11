/* 
    1. Usando filter, faça um novo array filtrando apenas os números pares e divisíveis por 5
*/


const list = [20,3,234,12,17,541,6,87,275,1000]


const even_divisible5 = list.filter(number => number % 2 === 0 && number % 5 === 0)

console.log(even_divisible5)