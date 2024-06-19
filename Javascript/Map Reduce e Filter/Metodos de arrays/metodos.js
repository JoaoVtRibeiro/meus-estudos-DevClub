/* 
    Métodos de arrays

        push      -> Adiciona mais um item ao array 
        lenght    -> Mostra o tamanho do array
        sort      -> Organiza o array
        delete    -> Deleta o item de uma posição do Array (logo a posição terá "vazio" como valor)
        every     -> Esse método testa se todos os elementos do array passam em uma condição.
        some      -> O .some() faz algo parecido com o .every(). A diferença é que o .every() retorna true se todos passarem, some precisa que apenas um passe
        fill      -> Preenche posições do array como desejarmos, de acordo com os 3 parâmetros
        find      -> Usamos esse método quando queremos encontrar algum elemento dentro no Array
        findIndex   -> Faz o mesmo que o .find(), mas retorna o índice (posição) do elemento encontrado
        concat()    -> Usado para juntar dois arrays. Ele não altera os arrays originais, mas cria um novo com a soma dos dois
        
        includes  -> O método includes() determina se um array co
        join      -> O método join() junta todos os elementos de um

        slice(fatiar) ->
        splice    ->
        pop       ->
        shift     ->
*/

const numbers = [1, 2, 3]
const fruits = ['limão', 'amora', 'goiaba']

// push, adiciona um item ao array
numbers.push(4)

// lenght, mostra a quantidade de itens do arrays
console.log(fruits.length)

// sort, organiza os itens em ordem alfabetica
fruits.sort()

// delete, deleta um item do array (não a posição, logo a posição terá "vazio" como valor)
delete fruits[1]

console.log(fruits)

// every, verifica se TODOS os itens passam por um validação posta, resultando em true ou false
const users = [
    { name: 'Nico', credit: 600},
    { name: 'Maria', credit: 900},
    { name: 'Joana', credit: 300},
    { name: 'Vanessa', credit: 200}
]

console.log(users.every(user => user.credit > 100))

// some, ao contrario do every, some resulta true se qualquer um dos itens for de acordo a validação

console.log(users.some(user => user.credit > 800))

/*  
    fill, preenche a posição ou as posições do array com um novo valor a partir de três parâmetros

    1) O valor que será colocado (se apenas ele todas as posições serão preenchidas com eles)
        Ex: console.log(numbers.fill(5)), [5,5,5,5,5]
    
    2) A posição inicial que irá receber a alteração (se apenas ele e o primeiro todas as posições a partir da informada serão preenchidas com o primeiro parâmetro)
        Ex: console.log(numbers.fill(5, 2)), [1,2,5,5,5]

    3) A posição final, ou seja, entre a inicial e a final as posições serão preenchidas com valor do primeiro
        Ex:
*/

console.log(numbers.fill(5,2,4))

// find, encontra algum elemento dentro do array que se encaixa na condição

const findAUser = users.find(user => user.name === 'Maria')
console.log(`find: ${findAUser}`)

// findIndex, faz o mesmo que o find porém retorna a posição do elemento

const findIndexForAUser = users.findIndex(user => user.name === 'Maria')
console.log(`findIndex: ${findIndexForAUser}`)

// concat, faz um novo array juntando dois arrays diferentes

const array1 = ['a', 'b', 'c']
const array2 = ['d', 'e', 'f']

const array3 = array1.concat(array2)
console.log(array3)

// include, verifica se a um item que inclue um determinado valor

console.log(array1.includes('a'));

// join, junta os elementos de um array e os transforma em um só (deixa de ser um array)

const elements = ['Fire', 'Water', 'Air']

const oneElement = elements.join(' ') // se colocar um espaço eles ficam separados com um espaço, se for um traço separados por um traço e assim vai

console.log(oneElement)

// 

