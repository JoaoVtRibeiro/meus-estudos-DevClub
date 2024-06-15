/* 
    Métodos de arrays

        push      -> Adiciona mais um item ao array 
        lenght    -> Mostra o tamanho do array
        sort      -> Organiza o array
        delete    -> Deleta o item de uma posição do Array (logo a posição terá "vazio" como valor)
        every     -> Esse método testa se todos os elementos do array passam em uma condição.
        some      -> O .some() faz algo parecido com o .every(). A diferença é que o .every() retorna true se todos passarem, some precisa que apenas um passe
        fill      -> Preenche posições do array com desejarmos
        find      -> Usamos esse método quando queremos encontrar algum elemento dentro no Array
        findIndex   -> Faz o mesmo que o .find(), mas retorna o índice do elemento encontrado ao
        concat()    ->
        
        includes  -> O método includes() determina se um array co
        join      -> O método join() junta todos os elementos de um

        slice(fatiar) ->
        splice    ->
        pop       ->
        shift     ->
*/

const numbers = [1, 2, 3]
const fruits = ['limão', 'amora', 'goiaba']
const users = [
    { name: 'Nico', credit: 600},
    { name: 'Maria', credit: 900},
    { name: 'Joana', credit: 300},
    { name: 'Vanessa', credit: 200}
]

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
console.log(users.every(user => user.credit > 100))

// some, ao contrario do every, some resulta true se qualquer um dos itens for de acordo a validação

console.log(users.some(user => user.credit > 800))