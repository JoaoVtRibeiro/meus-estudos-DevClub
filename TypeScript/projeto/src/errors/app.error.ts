import { StatusCodes } from 'http-status-codes' // Enums sobre os status das requisições 

export class AppError { // Herança*anotar
    public statusCode: StatusCodes
    public message: string | string[]

    constructor(message: string | string[], statusCode: StatusCodes) {
        this.message = message

        this.statusCode = statusCode
    }
}


/* 
    App Error, a função desse arquivo/classe é fazer com que os erros sejam retornados na api também 
    para que os erros esperados não interrompam o funcionamento da aplicação.


*/