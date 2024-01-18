import mongoose, { mongo } from 'mongoose'

export const CategorySchema = new mongoose.Schema( // Colection, estrutura dos documentos de categoria
    {
        title: String, // O tipo tem que ser passado com letra maiuscula (o mongoose aceita dessa forma)
        color: String,
    },
    { versionKey: false} // descrição final do arquivo
)

export const CategoryModel = mongoose.model('Category', CategorySchema) // ('nome do model', schema que será utilizado)

/*  
    Schemas

        Os squemas são como os modelos de documentos do MongoDB,
        o Mongo trabalha em uma estrutura diferente de banco relacionais (como postgres e mysql),
        ele trabalha com estruturas de colections e documentos, onde:

        - Colections são equivalentes as tabelas

        - Documentos são equivalentes as linhas das tabelas 

    {versionKey: false}

        O mongo por padrão permite versionar o documento, por exemplo
        colocar uma propriedade nova no futuro, criando assim uma versão nova
        com false, não serão permitidas novas propriedades 

        Lembrete importe: Se você não usa não coloca, ainda mais em banco de dados,
        porque em sistemas que milhares de registros são feitos, uma coluna inutil já faz um estrago
        tanto em performace quanto em custo

    Model

        - Ele desempenha o papel de criar uma conexão entre a aplicação e o banco mongoDB
        - Faz a modelagem dos dados, definindo a estrutura utilizando um schema
        - Realiza operações CRUD (Create, Read, Update, Delete) nos documentos do banco

        Em resumo ele simplifica o processo de interação com o mongoDB, 
        permitindo a manipular os dados de uma maneira mais facil
*/


