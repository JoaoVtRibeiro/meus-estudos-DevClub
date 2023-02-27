/* 
    Classes

    São muito parecidas com funções, elas podem receber alguns parâmetros
    com isso executar e reutilizar varias vezes um mesmo trecho de código.

    Com sua estrutura pronta, inúmeras variaveis podem instanciar essa classe e
    dessa forma, todas elas podem utilizar de uma mesma estrutura(um padrão)
    com parâmetros diferentes cada uma.

    Além disso, elas também podem ter métodos, que funcionam como as "funções" das classes

*/

// Classe sem o constructor
class Person{
    name; // Declaração de atributos
    age;

    talk(){ // Método, trecho de código que é executado quando chamado (nomedaclasse.nomedométodo())
        console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old`)
    }
}

const newPerson = new Person() // Uma nova pessoa criada utilizando a classe (podem ser criadas varias com a mesma classe)

newPerson.name = "Fulano" // Valores dos atributos
newPerson.age = 26

newPerson.talk() // Método sendo chamado


// Classe com o constructor
class Person2 {
    constructor(name, age){ // (Opcional) Comando que já é executado quando a classe é declara em uma variavel
        console.log(`Hello, I'm ${name}`)

        this.name = name
        this.age = age
    }

    talk(){ 
        console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old`)
    }
}

const newPerson2 = new Person2("Joao", 22)

newPerson2.talk()
