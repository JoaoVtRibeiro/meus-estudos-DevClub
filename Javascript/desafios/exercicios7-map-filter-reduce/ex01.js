/* 
    1. Utilizando apenas uma vez cada (Map, Filter e Reduce)

    - Aumente em 10% de valor de mercado de todas as empresas
    - Filtre apenas empresas fundadas antes do ano 2000
    - Some o valor de mercado de todas as empresas filtradas
*/

const companies = [
    { name: "Samsung", marketValue: 50, CEO: "Kim Hyun Suk", foundedOn: 1938 },
    { name: "Microsoft", marketValue: 415, CEO: "Satya Nadella", foundedOn: 1975 },
    { name: "Intel", marketValue: 117, CEO: "Brian Krzanich", foundedOn: 1968 },
    { name: "Facebook", marketValue: 383, CEO: "Mark Zuckerberg", foundedOn: 2004 },
    { name: "Spotify", marketValue: 30, CEO: "Daniel Ek", foundedOn: 2006 },
    { name: "Apple", marketValue: 845, CEO: "Tim Cook", foundedOn: 1976 },
]

// Aumente em 10% de valor de mercado de todas as empresas
const increaseMarketValue = companies.map((company) => {
    return {
        name: company.name,
        marketValue: company.marketValue + company.marketValue / 10,
        CEO: company.CEO,
        foundedOn: company.foundedOn}
})

// Filtre apenas empresas fundadas antes do ano 2000
const oldCompaniesFilter = increaseMarketValue.filter(company => company.foundedOn < 2000)

// Some o valor de mercado de todas as empresas filtradas

const totalOldMarketValue = oldCompaniesFilter.reduce((acc, curr) => acc + curr.marketValue, 0)

console.log(`Essas são as empresas fundadas antes do ano 2000, com o valor de mercado aumentado em 10%:`)
console.log(oldCompaniesFilter)
console.log(`O valor de mercado somado de todas essas empresas é de: ${totalOldMarketValue}`)
