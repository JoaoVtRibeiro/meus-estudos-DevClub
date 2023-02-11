/* 
    2. Usando filter, faça um novo array apenas com as empresas que foram fundadas após 1975
    e que tem o valor de mercado acima de 200.
*/

const companies = [
    {name: "Samsung", marketValoue: 50, CEO: "Kim Hyun Suk", foundedOn: 1938},
    {name: "Microsoft", marketValoue: 415, CEO: "Satya Nadella", foundedOn: 1975},
    {name: "Intel", marketValoue: 117, CEO: "Brian Krzanich", foundedOn: 1968},
    {name: "Facebook", marketValoue: 383, CEO: "Mark Zuckerberg", foundedOn: 2004},
    {name: "Spotify", marketValoue: 30, CEO: "Daniel Ek", foundedOn: 2006},
    {name: "Apple", marketValoue: 845, CEO: "Tim Cook", foundedOn: 1976},
]

const bigNewcompanies = companies.filter(company => company.marketValoue > 200 && company.foundedOn > 1975)

console.log(bigNewcompanies)