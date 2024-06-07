// 1. Faça um reduce para saber a soma do valor de mercado de todas as empresas

const companies = [
    { name: 'Samsung', marketValue: 50, CEO: 'Kim Hyun Suk', foundedOn: 1938 },
    { name: 'Microsoft', marketValue: 415, CEO: 'Satya Nadella', foundedOn: 1975 },
    { name: 'Intel', marketValue: 117, CEO: 'Brian Krzanich', foundedOn: 1968 },
    { name: 'Facebook', marketValue: 383, CEO: 'Mark Zuckerberg', foundedOn: 2004 },
    { name: 'Spotify', marketValue: 30, CEO: 'Daniel Ek', foundedOn: 2006 },
    { name: 'Apple', marketValue: 845, CEO: 'Tim Cook', foundedOn: 1976 },
]

// Resposta

const allMarketValue = companies.reduce((acc, i) => {
    return acc + i.marketValue
}, 0) // valor inicial do acc

console.log(allMarketValue)

// 2. Faça um reduce para saber o preço final da compra, lembrando que o valor de cada produto será por kilo

const cart = [
    { productName: 'Abóbora', pricePerKg: 5, kg: 1 },
    { productName: 'Pepino', pricePerKg: 3.55, kg: 1.3 },
    { productName: 'Limão', pricePerKg: 1.2, kg: 2 },
    { productName: 'Abacate', pricePerKg: 5.4, kg: 1.67 },
    { productName: 'Morango', pricePerKg: 11.9, kg: 3 },
]

// Resposta

const finalPrice = cart.reduce((acc, i) => {
    const sum = acc + (i.pricePerKg * i.kg)

    return sum
}, 0)

console.log(`A sua compra ficou no total de: R$ ${finalPrice.toFixed(2)}`)

