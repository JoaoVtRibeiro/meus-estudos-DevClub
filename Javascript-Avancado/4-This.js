/* 

    This - "Este/esse/isto"

    Uma palavra reservada do javascript que faz referência ao escopo no qual se encontra.

    Escopos:
        -> Global, é a área que abrange todo o código JavaScript em execução, 
           incluindo o código dentro de funções e blocos de código. Nele as variaveis e funções 
           são acessíveis por toda a aplicação. No contexto global, this faz referência ao objeto global,
           objeto window no navegador de internet ou propriamente objeto global no Node.js

        -> Local, blocos de código / área dentro de comandos ou variaveis, como objetos por exemplo

        Obs: Vale lembrar que sem um contexto, this em uma função faz referencia ao global ou a quem estiver acima

    Com this também é possivel conceder atributos ao módulo 
    em que ele se encontra, dessa forma é possivel realizar uma exportação como o module.exports

 */

// This fazendo referencia o objeto global
function refGlobal() {
    console.log(this)
}

refGlobal()

// This fazendo referencia ao objeto declarado
const refObject = {
    name: "Fulano",
    age: 22,
    talk: function() {
        console.log(this)
    }
}

refObject.talk()

// Exportação
const number = 2

this.two = number // this.nomedoatributo = itemParaSerExportado