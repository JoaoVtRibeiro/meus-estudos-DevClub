/* 
    1. Com Reduce, some o valor de mercado de todas as empresas
*/

const companies = [
    {name: "Samsung", marketValue: 50, CEO: "Kim Hyun Suk", foundedOn: 1938},
    {name: "Microsoft", marketValue: 415, CEO: "Satya Nadella", foundedOn: 1975},
    {name: "Intel", marketValue: 117, CEO: "Brian Krzanich", foundedOn: 1968},
    {name: "Facebook", marketValue: 383, CEO: "Mark Zuckerberg", foundedOn: 2004},
    {name: "Spotify", marketValue: 30, CEO: "Daniel Ek", foundedOn: 2006},
    {name: "Apple", marketValue: 845, CEO: "Tim Cook", foundedOn: 1976},
]

const totalMarketValue = companies.reduce((acc, company) => acc + company.marketValue, 0)


console.log(totalMarketValue)

// Colocando no parâmetro "valor atual" o nome do atributo entre chaves, será enviado o valor do atributo sem a necessecidade do "parametro.atributo"
const sum = companies.reduce((acc, {marketValue}) => acc + marketValue, 0) 
console.log(sum)