/*
    1.Com o array de companias:

    - Adicionar 10% de valor de mercado a todas as companias -> MAP
    - Filtrar somente companhias fundadados abaixo de 1990 -> FILTER
    - Somar o valor de mercado das restantes -> REDUCE
*/


const companies = [
    { name: 'Samsung', marketValue: 50, CEO: 'Kim Hyun Suk', foundedOn: 1938 },
    { name: 'Microsoft', marketValue: 415, CEO: 'Satya Nadella', foundedOn: 1975 },
    { name: 'Intel', marketValue: 117, CEO: 'Brian Krzanich', foundedOn: 1968 },
    { name: 'Facebook', marketValue: 383, CEO: 'Mark Zuckerberg', foundedOn: 2004 },
    { name: 'Spotify', marketValue: 30, CEO: 'Daniel Ek', foundedOn: 2006 },
    { name: 'Apple', marketValue: 845, CEO: 'Tim Cook', foundedOn: 1976 },
]

const finalValue = companies

    // Adicionar 10% de valor de mercado a todas as companias
    .map(company => {
        return {
            marketValue: (company.marketValue + (company.marketValue / 10)),
            foundedOn: company.foundedOn
        }
    })

    // Filtrar somente companhias fundadados abaixo de 1990
    .filter(company => company.foundedOn < 1990)

    // Somar o valor de mercado das restantes
    .reduce((acc, company) => acc + company.marketValue, 0)

console.log(finalValue)


// ------------ Segunda Forma de resolução, fazer a logica por fora ------------

const add10Percent = (company => {
    company.marketValue = company.marketValue + (company.marketValue / 10)

    return company
})

const oldCompanies = (company => company.foundedOn < 1990)

const sumMarketValue = ((acc, company) => acc + company.marketValue)

const finalSecondValue = companies
    .map(add10Percent)
    .filter(oldCompanies)
    .reduce(sumMarketValue, 0) // Valor do acc será sempre no reduce


console.log(finalSecondValue)


/* 
    2. Com o array de companias:

    - Subtrair 10% de valor de mercado a todas as companias
    - Filtrar somente companhias fundadados depois de 1980
    - Somar o valor de mercado das restantes
*/

const companies2 = [
    { name: 'Samsung', marketValue: 50, CEO: 'Kim Hyun Suk', foundedOn: 1938 },
    { name: 'Microsoft', marketValue: 415, CEO: 'Satya Nadella', foundedOn: 1975 },
    { name: 'Intel', marketValue: 117, CEO: 'Brian Krzanich', foundedOn: 1968 },
    { name: 'Facebook', marketValue: 383, CEO: 'Mark Zuckerberg', foundedOn: 2004 },
    { name: 'Spotify', marketValue: 30, CEO: 'Daniel Ek', foundedOn: 2006 },
    { name: 'Apple', marketValue: 845, CEO: 'Tim Cook', foundedOn: 1976 },
]

const finalValue2 = companies
    .map(company => {
        company.marketValue - (company.marketValue / 10)
        return company
    })
    .filter(company => company.foundedOn > 1980)
    .reduce((acc, company) => acc + company.marketValue, 0)

console.log(finalValue2)