import mongoose, { mongo } from 'mongoose'

export const CategorySchema = new mongoose.Schema(
    {
        title: String,
        color: String,
    },
    { versionKey: false}
)

export const CategoryModel = mongoose.model('Category', CategorySchema)

// Repository Pattern


/*  Obs: Os squemas são como os modelos de documentos do MongoDB,
    o Mongo trabalha em uma estrutura diferente de banco relacionais (como postgres e mysql),
    ele trabalha com estruturas de colections e documentos, onde:

    - Colections são equivalentes as tabelas

    - Documentos são equivalentes as linhas das tabelas 
*/