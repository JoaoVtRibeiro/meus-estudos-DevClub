import { StatusCodes } from 'http-status-codes' // Semantica*anotar (Ele é basicamente um enum)

export class AppError extends Error { // Herança*anotar
    public statusCode: StatusCodes

    constructor(message: string, statusCode: StatusCodes) {
        super(message)

        this.statusCode = statusCode
    }
}


/* 
    App Error, a função desse arquivo/classe é fazer com que os erros sejam retornados na api também 
    para que os erros esperados não interrompam o funcionamento da aplicação.


*/