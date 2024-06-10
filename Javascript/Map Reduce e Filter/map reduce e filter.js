/*
    Com o array de companias:

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

const finalValue = 

// Adicionar 10% de valor de mercado a todas as companias
companies.map(company => {
    return { 
        name: company.name, 
        marketValue: (company.marketValue + (company.marketValue / 10)), 
        CEO: company.CEO, 
        foundedOn: company.foundedOn }
})

// Filtrar somente companhias fundadados abaixo de 1990
.filter(company => company.foundedOn < 1990)

// Somar o valor de mercado das restantes
.reduce((acc, company) =>  acc + company.marketValue, 0)

console.log(finalValue)